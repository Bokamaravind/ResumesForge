import { NextResponse } from 'next/server';
import { getUserFromRequest } from '@/lib/auth';

export async function POST(request) {
  try {
    const user = getUserFromRequest(request);
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { type, data } = await request.json();

    let prompt = '';
    let systemPrompt = 'You are a professional resume writer helping job seekers in India create ATS-friendly resumes.';

    if (type === 'summary') {
      prompt = `Write a professional resume summary for a ${data.jobTitle} with skills: ${(data.skills || []).join(', ') || 'not specified'}.
Requirements:
- 2-3 sentences only
- Start with a strong adjective (Results-driven, Motivated, Passionate, Dynamic)
- Mention the job title, key skills, and value they bring
- Professional and ATS-friendly tone
- Do NOT use first person
Return ONLY the summary text, nothing else.`;
    }

    else if (type === 'experience') {
      prompt = `Write 3 bullet point descriptions for a resume work experience entry.
Role: ${data.role}
Company: ${data.company || 'a company'}
Skills/Context: ${(data.skills || []).join(', ') || 'general'}
Requirements:
- Each bullet starts with a strong past-tense action verb (Built, Developed, Implemented, Designed, Led, Optimized, Delivered)
- Include measurable impact or result where possible (e.g. "reduced load time by 40%")
- ATS-friendly keywords relevant to the role
- Each bullet on a new line starting with •
- Keep each bullet under 20 words
Return ONLY the 3 bullet points, nothing else.`;
    }

    else if (type === 'project') {
      prompt = `Write a 2-sentence project description for a resume.
Project Name: ${data.projectName}
Technologies: ${data.techStack || 'not specified'}
Requirements:
- Sentence 1: What the project does and its purpose
- Sentence 2: Technologies used and your specific contribution
- Do NOT use first person
Return ONLY the 2-sentence description, nothing else.`;
    }

    else if (type === 'ats') {
      const p = data.personalInfo || {};
      const resumeText = `
Name: ${p.name || ''}
Job Title: ${p.jobTitle || ''}
Email: ${p.email || 'NOT PROVIDED'}
Phone: ${p.phone || 'NOT PROVIDED'}
Location: ${p.location || 'NOT PROVIDED'}
Website/LinkedIn: ${p.website || 'NOT PROVIDED'}
Portfolio: ${p.portfolio || 'NOT PROVIDED'}
Summary: ${p.summary || ''}
Experience: ${(data.experience || []).map(e => `${e.role} at ${e.company} (${e.startDate} - ${e.endDate}): ${e.description}`).join(' | ')}
Education: ${(data.education || []).map(e => `${e.degree} from ${e.institution} ${e.year} ${e.gpa ? 'GPA:' + e.gpa : ''}`).join(' | ')}
Skills: ${(data.skills || []).join(', ')}
Tools: ${(data.tools || []).join(', ')}
Projects: ${(data.projects || []).map(pr => `${pr.name} (${pr.techStack}): ${pr.description}`).join(' | ')}
      `.trim();

      systemPrompt = 'You are a senior ATS expert and technical recruiter with 10+ years experience. You only respond with valid JSON, no markdown, no explanation.';

      prompt = `Perform a deep ATS analysis of this resume. Be strict and accurate.

Resume:
${resumeText}

Instructions:
1. Detect the target job role from Job Title
2. Generate 8 relevant keywords for that role
3. Check which keywords appear in the resume
4. Check for strong action verbs in experience descriptions
5. Check for measurable results (numbers, percentages, metrics)
6. Check skills relevance to job role
7. Check all contact fields

Return ONLY this exact JSON (no markdown, no extra text):
{
  "score": <number 0-100>,
  "grade": "<A/B/C/D/F>",
  "jobRole": "<detected job role>",
  "summary": "<2 sentence honest assessment>",
  "keywordAnalysis": {
    "expectedKeywords": ["<kw1>", "<kw2>", "<kw3>", "<kw4>", "<kw5>", "<kw6>", "<kw7>", "<kw8>"],
    "foundKeywords": ["<keywords found in resume>"],
    "missingKeywords": ["<important missing keywords>"]
  },
  "checks": [
    { "label": "Contact Information", "passed": <true if email AND phone present>, "tip": "<tip>" },
    { "label": "Professional Summary", "passed": <true/false>, "tip": "<tip>" },
    { "label": "Work Experience", "passed": <true/false>, "tip": "<tip>" },
    { "label": "Education", "passed": <true/false>, "tip": "<tip>" },
    { "label": "Skills Relevance", "passed": <true/false>, "tip": "<tip>" },
    { "label": "Action Verbs", "passed": <true/false>, "tip": "<tip>" },
    { "label": "Measurable Results", "passed": <true/false>, "tip": "<tip>" },
    { "label": "Projects Section", "passed": <true/false>, "tip": "<tip>" },
    { "label": "Keyword Match", "passed": <true/false>, "tip": "<percentage and what to add>" },
    { "label": "Experience Duration", "passed": <true/false>, "tip": "<tip>" }
  ],
  "improvements": [
    "<specific tip 1 with exact keywords to add>",
    "<specific tip 2 with exact section to improve>",
    "<specific tip 3 with exact metrics to add>"
  ]
}`;
    }

    else {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
    }

    // ── Groq API ──────────────────────────────────
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1000,
        temperature: 0.7,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Groq error:', err);
      return NextResponse.json({ error: err.error?.message || 'AI API error' }, { status: 500 });
    }

    const aiData = await response.json();
    const text = aiData.choices?.[0]?.message?.content?.trim() || '';

    if (type === 'ats') {
      try {
        const clean = text.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(clean);
        return NextResponse.json({ result: parsed });
      } catch (e) {
        console.error('ATS JSON parse error. Raw text:', text);
        return NextResponse.json({ error: 'AI response parse error' }, { status: 500 });
      }
    }

    return NextResponse.json({ result: text });

  } catch (err) {
    console.error('AI suggest error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}