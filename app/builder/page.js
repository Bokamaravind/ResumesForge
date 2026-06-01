'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import Toast from '@/components/ui/Toast';
import HorizontalTemplate from '@/components/templates/HorizontalTemplate';
import VerticalTemplate from '@/components/templates/VerticalTemplate';
import ClassicTemplate from '@/components/templates/ClassicTemplate';
import ModernTemplate from '@/components/templates/ModernTemplate';

const EMPTY_EXP = () => ({ role: '', company: '', startDate: '', endDate: '', description: '' });
const EMPTY_EDU = () => ({ degree: '', institution: '', year: '', gpa: '' });
const EMPTY_PROJ = () => ({ name: '', techStack: '', link: '', description: '' });

// ── AI Suggest Button ──────────────────────────────────────────────────
function AiBtn({ onClick, loading, label = '✨ AI Suggest' }) {
  return (
    <button className="ai-btn" onClick={onClick} disabled={loading} type="button">
      {loading ? <span style={{ width:12,height:12,border:'2px solid rgba(255,255,255,.3)',borderTopColor:'white',borderRadius:'50%',display:'inline-block',animation:'spin .6s linear infinite' }} /> : '✨'}
      {loading ? 'Generating...' : label}
    </button>
  );
}

// ── ATS Score Modal ────────────────────────────────────────────────────
function ATSModal({ result, onClose }) {
  const score = result.score || 0;
  const grade = result.grade || 'F';
  const color = score >= 80 ? '#16a34a' : score >= 60 ? '#d97706' : '#dc2626';
  const bg = score >= 80 ? '#dcfce7' : score >= 60 ? '#fef3c7' : '#fee2e2';

  return (
    <div className="ats-modal-bg" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="ats-modal">
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1.25rem' }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.4rem' }}>ATS Resume Score</h2>
          <button onClick={onClose} style={{ background:'none',border:'none',fontSize:'1.4rem',cursor:'pointer',color:'#6b7280' }}>×</button>
        </div>

        <div className="ats-score-ring" style={{ background: bg, border: `4px solid ${color}` }}>
          <div className="ats-score-num" style={{ color }}>{score}</div>
          <div className="ats-score-label" style={{ color }}>Grade {grade}</div>
        </div>

        <p style={{ textAlign:'center', fontSize:'.88rem', color:'#374151', marginBottom:'1.25rem', lineHeight:1.6 }}>{result.summary}</p>

        <div style={{ marginBottom:'1.25rem' }}>
          <h4 style={{ fontSize:'.82rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.5px', color:'#6b7280', marginBottom:'.75rem' }}>Checklist</h4>
          {(result.checks || []).map((c, i) => (
            <div className="ats-check" key={i}>
              <div className={`ats-check-icon ${c.passed ? 'pass' : 'fail'}`}>{c.passed ? '✓' : '✕'}</div>
              <div>
                <div className="ats-check-label">{c.label}</div>
                <div className="ats-check-tip">{c.tip}</div>
              </div>
            </div>
          ))}
        </div>

        {result.improvements?.length > 0 && (
          <div>
            <h4 style={{ fontSize:'.82rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.5px', color:'#6b7280', marginBottom:'.75rem' }}>💡 Improvements</h4>
            {result.improvements.map((tip, i) => (
              <div className="ats-improvement" key={i}>
                <span>→</span><span>{tip}</span>
              </div>
            ))}
          </div>
        )}

        <button className="btn btn-navy btn-full" style={{ marginTop:'1.25rem' }} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

// ── Main Builder Page ──────────────────────────────────────────────────
export default function BuilderPage() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [template, setTemplate] = useState(null);
  const [toast, setToast] = useState(null);
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [resumeId, setResumeId] = useState(null);

  // AI states
  const [aiLoading, setAiLoading] = useState({});
  const [atsResult, setAtsResult] = useState(null);
  const [atsLoading, setAtsLoading] = useState(false);

  // Form state
  const [personalInfo, setPersonalInfo] = useState({ name:'', jobTitle:'', email:'', phone:'', location:'', website:'', portfolio:'', summary:'' });
  const [experience, setExperience] = useState([EMPTY_EXP()]);
  const [education, setEducation] = useState([EMPTY_EDU()]);
  const [skillsInput, setSkillsInput] = useState('');
  const [toolsInput, setToolsInput] = useState('');
  const [projects, setProjects] = useState([EMPTY_PROJ()]);

  useEffect(() => {
  async function checkAuth() {
    const localUser = localStorage.getItem('rf_user');
    if (localUser) return; // normal login — ok

    // Check if logged in via Google (NextAuth session)
    const res = await fetch('/api/auth/session');
    const session = await res.json();

    if (session?.user) {
      // Google login — save to localStorage
      localStorage.setItem('rf_user', JSON.stringify({
        id: session.user.id || session.user.email,
        name: session.user.name,
        email: session.user.email,
      }));
    } else {
      router.push('/login');
    }
  }
  checkAuth();
}, [router]);

  const skills = skillsInput.split(',').map(s => s.trim()).filter(Boolean);
  const tools = toolsInput.split(',').map(s => s.trim()).filter(Boolean);
  const resumeData = { personalInfo, experience, education, skills, projects, tools };

  function showToast(msg, type='default') { setToast({ message: msg, type }); }
  function setAiKey(key, val) { setAiLoading(prev => ({ ...prev, [key]: val })); }

  // ── AI Suggest Handlers ──────────────────────
  async function suggestSummary() {
    if (!personalInfo.jobTitle) { showToast('Enter your job title first', 'error'); return; }
    setAiKey('summary', true);
    try {
      const res = await fetch('/api/ai/suggest', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'summary', data: { jobTitle: personalInfo.jobTitle, skills } }),
      });
      const d = await res.json();
      if (d.result) setPersonalInfo(p => ({ ...p, summary: d.result }));
    } catch { showToast('AI error, try again', 'error'); }
    setAiKey('summary', false);
  }

  async function suggestExpDesc(i) {
    const exp = experience[i];
    if (!exp.role) { showToast('Enter job title first', 'error'); return; }
    setAiKey(`exp${i}`, true);
    try {
      const res = await fetch('/api/ai/suggest', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'experience', data: { role: exp.role, company: exp.company, skills } }),
      });
      const d = await res.json();
      if (d.result) updateExp(i, 'description', d.result);
    } catch { showToast('AI error, try again', 'error'); }
    setAiKey(`exp${i}`, false);
  }

  async function suggestProjDesc(i) {
    const proj = projects[i];
    if (!proj.name) { showToast('Enter project name first', 'error'); return; }
    setAiKey(`proj${i}`, true);
    try {
      const res = await fetch('/api/ai/suggest', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'project', data: { projectName: proj.name, techStack: proj.techStack } }),
      });
      const d = await res.json();
      if (d.result) updateProj(i, 'description', d.result);
    } catch { showToast('AI error, try again', 'error'); }
    setAiKey(`proj${i}`, false);
  }

  async function checkATS() {
    setAtsLoading(true);
    try {
      const res = await fetch('/api/ai/suggest', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'ats', data: resumeData }),
      });
      const d = await res.json();
      if (d.result) setAtsResult(d.result);
      else showToast('ATS check failed', 'error');
    } catch { showToast('AI error, try again', 'error'); }
    setAtsLoading(false);
  }

  // ── Experience helpers ───────────────────────
  function addExp() { setExperience(p => [...p, EMPTY_EXP()]); }
  function removeExp(i) { setExperience(p => p.filter((_,idx) => idx !== i)); }
  function updateExp(i, field, val) { setExperience(p => p.map((e,idx) => idx===i ? {...e,[field]:val} : e)); }

  // ── Education helpers ────────────────────────
  function addEdu() { setEducation(p => [...p, EMPTY_EDU()]); }
  function removeEdu(i) { setEducation(p => p.filter((_,idx) => idx !== i)); }
  function updateEdu(i, field, val) { setEducation(p => p.map((e,idx) => idx===i ? {...e,[field]:val} : e)); }

  // ── Project helpers ──────────────────────────
  function addProj() { setProjects(p => [...p, EMPTY_PROJ()]); }
  function removeProj(i) { setProjects(p => p.filter((_,idx) => idx !== i)); }
  function updateProj(i, field, val) { setProjects(p => p.map((e,idx) => idx===i ? {...e,[field]:val} : e)); }

  // ── Save ─────────────────────────────────────
  async function saveResume() {
    setSaving(true);
    try {
      const res = await fetch('/api/resume/save', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeId, template, personalInfo, experience, education, skills, projects, tools }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResumeId(data.resumeId);
      showToast('Resume saved!', 'success');
    } catch (err) { showToast(err.message || 'Save failed', 'error'); }
    setSaving(false);
  }

  // ── Download PDF ──────────────────────────────
  async function downloadPDF() {
    setDownloading(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { default: jsPDF } = await import('jspdf');

      const source = document.getElementById('resume-preview');
      if (!source) throw new Error('Preview not found');

      // Clone at full size off-screen for clean rendering
      const clone = source.cloneNode(true);
      clone.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:794px;transform:none;zoom:1;background:white;';
      document.body.appendChild(clone);

      await document.fonts.ready;
      await new Promise(r => setTimeout(r, 300));

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 794,
        windowWidth: 794,
      });

      document.body.removeChild(clone);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = (canvas.height * pdfW) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfW, pdfH);
      pdf.save(`${personalInfo.name || 'Resume'}_ResumeForge.pdf`);
      showToast('PDF downloaded!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Download failed. Try again.', 'error');
    }
    setDownloading(false);
  }

  // ══════════════════════════════════════════════
  // STEP 1: Template Select
  // ══════════════════════════════════════════════
  if (step === 1) {
    return (
      <>
        <Navbar />
        <div className="page-wrap">
          <div style={{ maxWidth:700, margin:'0 auto' }}>
            <div style={{ margin:'0 0 1.5rem' }}>
              <div className="ad-banner"><strong>Advertisement</strong>Google AdSense – 728×90 Leaderboard</div>
            </div>
            <h1 className="section-title">Choose Your Template</h1>
            <p className="section-sub">4 professional templates — all ATS-friendly and free</p>
            <div className="template-grid">
              {[
                { id:'horizontal', label:'Horizontal', sub:'Header top · Skills sidebar', svg: (
                  <svg width="150" height="115" viewBox="0 0 150 115">
                    <rect width="150" height="32" fill="#1a1f36" rx="2"/>
                    <rect x="9" y="9" width="85" height="7" rx="1" fill="#c9a84c"/>
                    <rect x="9" y="19" width="55" height="4" rx="1" fill="#7c8bb0"/>
                    <rect x="108" y="9" width="33" height="3" rx="1" fill="#4b5c7a"/>
                    <rect x="108" y="15" width="28" height="3" rx="1" fill="#4b5c7a"/>
                    <rect x="108" y="21" width="24" height="3" rx="1" fill="#4b5c7a"/>
                    <rect x="9" y="38" width="95" height="3" rx="1" fill="#d1d5db"/>
                    <rect x="9" y="44" width="75" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="9" y="57" width="42" height="3" rx="1" fill="#1a1f36"/>
                    <rect x="9" y="63" width="90" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="9" y="68" width="78" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="9" y="81" width="42" height="3" rx="1" fill="#1a1f36"/>
                    <rect x="9" y="87" width="80" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="112" y="38" width="30" height="3" rx="1" fill="#1a1f36"/>
                    <rect x="112" y="45" width="24" height="4" rx="2" fill="#dbeafe"/>
                    <rect x="112" y="52" width="20" height="4" rx="2" fill="#dbeafe"/>
                    <rect x="112" y="59" width="26" height="4" rx="2" fill="#dbeafe"/>
                  </svg>
                )},
                { id:'vertical', label:'Vertical', sub:'Sidebar left · Main right', svg: (
                  <svg width="150" height="115" viewBox="0 0 150 115">
                    <rect width="48" height="115" fill="#1a1f36" rx="2"/>
                    <circle cx="24" cy="20" r="11" fill="#c9a84c" opacity=".85"/>
                    <rect x="9" y="35" width="32" height="4" rx="1" fill="#e8c97a"/>
                    <rect x="9" y="42" width="24" height="2" rx="1" fill="#7c8bb0"/>
                    <rect x="9" y="73" width="22" height="2.5" rx="1" fill="#c9a84c"/>
                    <rect x="56" y="9" width="55" height="5" rx="1" fill="#1a1f36"/>
                    <rect x="56" y="18" width="78" height="2" rx="1" fill="#d1d5db"/>
                    <rect x="56" y="33" width="42" height="3" rx="1" fill="#1a1f36"/>
                    <rect x="56" y="39" width="80" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="56" y="57" width="42" height="3" rx="1" fill="#1a1f36"/>
                    <rect x="56" y="63" width="75" height="2" rx="1" fill="#e5e7eb"/>
                  </svg>
                )},
                { id:'classic', label:'Classic', sub:'Traditional · Centered header', svg: (
                  <svg width="150" height="115" viewBox="0 0 150 115">
                    <rect width="150" height="115" fill="white" rx="2" stroke="#e5e7eb" strokeWidth="1"/>
                    <rect x="20" y="8" width="110" height="8" rx="1" fill="#1a1a1a"/>
                    <rect x="35" y="19" width="80" height="4" rx="1" fill="#555"/>
                    <rect x="25" y="27" width="45" height="1.5" rx="1" fill="#888"/>
                    <rect x="80" y="27" width="45" height="1.5" rx="1" fill="#888"/>
                    <rect x="15" y="33" width="120" height="1.5" rx="1" fill="#1a1a1a"/>
                    <rect x="15" y="38" width="40" height="3" rx="1" fill="#1a1a1a"/>
                    <rect x="15" y="43" width="120" height="1" rx="1" fill="#ccc"/>
                    <rect x="15" y="47" width="115" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="15" y="52" width="100" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="15" y="60" width="40" height="3" rx="1" fill="#1a1a1a"/>
                    <rect x="15" y="65" width="120" height="1" rx="1" fill="#ccc"/>
                    <rect x="15" y="69" width="90" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="15" y="74" width="85" height="2" rx="1" fill="#e5e7eb"/>
                    <rect x="15" y="87" width="40" height="3" rx="1" fill="#1a1a1a"/>
                    <rect x="15" y="92" width="120" height="1" rx="1" fill="#ccc"/>
                    <rect x="15" y="96" width="110" height="2" rx="1" fill="#e5e7eb"/>
                  </svg>
                )},
                { id:'modern', label:'Modern', sub:'Gradient header · Tag skills', svg: (
                  <svg width="150" height="115" viewBox="0 0 150 115">
                    <rect width="150" height="35" fill="#0f172a" rx="2"/>
                    <rect x="9" y="9" width="70" height="7" rx="1" fill="white"/>
                    <rect x="9" y="19" width="50" height="3" rx="1" fill="#94a3b8"/>
                    <circle cx="133" cy="18" r="9" fill="rgba(255,255,255,0.15)"/>
                    <rect x="9" y="27" width="25" height="3" rx="2" fill="#94a3b8"/>
                    <rect x="38" y="27" width="25" height="3" rx="2" fill="#94a3b8"/>
                    <rect width="105" height="80" fill="white" transform="translate(0 35)"/>
                    <rect width="45" height="80" fill="#f8fafc" transform="translate(105 35)"/>
                    <rect x="9" y="42" width="3" height="10" rx="1" fill="#0f172a"/>
                    <rect x="15" y="44" width="30" height="3" rx="1" fill="#0f172a"/>
                    <rect x="9" y="60" width="3" height="10" rx="1" fill="#0f172a"/>
                    <rect x="15" y="62" width="35" height="3" rx="1" fill="#0f172a"/>
                    <rect x="15" y="68" width="80" height="2" rx="1" fill="#e2e8f0"/>
                    <rect x="15" y="73" width="70" height="2" rx="1" fill="#e2e8f0"/>
                    <rect x="109" y="42" width="32" height="3" rx="1" fill="#0f172a"/>
                    <rect x="109" y="49" width="15" height="5" rx="2" fill="#0f172a"/>
                    <rect x="127" y="49" width="12" height="5" rx="2" fill="#0f172a"/>
                    <rect x="109" y="60" width="32" height="3" rx="1" fill="#0f172a"/>
                    <rect x="109" y="67" width="15" height="5" rx="2" fill="#e2e8f0"/>
                    <rect x="127" y="67" width="12" height="5" rx="2" fill="#e2e8f0"/>
                  </svg>
                )},
              ].map(t => (
                <div key={t.id} className={`template-card${template===t.id?' selected':''}`} onClick={() => setTemplate(t.id)}>
                  <div className="template-thumb">{t.svg}</div>
                  <div className="template-info">
                    <div><h3>{t.label}</h3><span>{t.sub}</span></div>
                    <span className={`badge ${template===t.id?'badge-gold':'badge-navy'}`}>{template===t.id?'✓ Selected':'Select'}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign:'center' }}>
              <button className="btn btn-navy btn-lg" disabled={!template} onClick={() => setStep(2)}>
                Continue with {template ? template.charAt(0).toUpperCase()+template.slice(1) : 'Template'} →
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ══════════════════════════════════════════════
  // STEP 2: Form + Live Preview
  // ══════════════════════════════════════════════
  return (
    <>
      <Navbar />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      {atsResult && <ATSModal result={atsResult} onClose={() => setAtsResult(null)} />}

      <div className="page-wrap">
        {/* Top bar */}
        <div style={{ marginBottom:'1rem', display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap' }}>
          <button className="btn btn-ghost" onClick={() => setStep(1)}>← Back</button>
          <div className="ad-banner" style={{ flex:1 }}><strong>Advertisement</strong>Google AdSense – 728×90</div>
          <button className="btn btn-full" onClick={checkATS} disabled={atsLoading}
            style={{ background:'linear-gradient(135deg,#0f172a,#1e3a8a)', color:'white', padding:'9px 20px', borderRadius:8, fontFamily:'inherit', fontWeight:600, fontSize:'.88rem', cursor:'pointer', border:'none', display:'flex', alignItems:'center', gap:'.4rem', whiteSpace:'nowrap' }}>
            {atsLoading ? <span style={{ width:14,height:14,border:'2px solid rgba(255,255,255,.3)',borderTopColor:'white',borderRadius:'50%',display:'inline-block',animation:'spin .6s linear infinite' }} /> : '🎯'}
            {atsLoading ? 'Checking...' : 'Check ATS Score'}
          </button>
        </div>

        <div className="builder-grid">
          {/* ── FORM PANEL ── */}
          <div className="form-panel">

            {/* Personal Info */}
            <div className="panel-title">Personal Information</div>
            <div className="row-2">
              <div className="form-group"><label>Full Name *</label>
                <input type="text" placeholder="Aravind Kumar" value={personalInfo.name} onChange={e => setPersonalInfo(p => ({...p,name:e.target.value}))} /></div>
              <div className="form-group"><label>Job Title *</label>
                <input type="text" placeholder="Full Stack Developer" value={personalInfo.jobTitle} onChange={e => setPersonalInfo(p => ({...p,jobTitle:e.target.value}))} /></div>
            </div>
            <div className="row-2">
              <div className="form-group"><label>Email</label>
                <input type="email" placeholder="you@email.com" value={personalInfo.email} onChange={e => setPersonalInfo(p => ({...p,email:e.target.value}))} /></div>
              <div className="form-group"><label>Phone</label>
                <input type="tel" placeholder="+91 9876543210" value={personalInfo.phone} onChange={e => setPersonalInfo(p => ({...p,phone:e.target.value}))} /></div>
            </div>
            <div className="row-2">
              <div className="form-group"><label>Location</label>
                <input type="text" placeholder="Delhi, India" value={personalInfo.location} onChange={e => setPersonalInfo(p => ({...p,location:e.target.value}))} /></div>
              <div className="form-group"><label>LinkedIn / Website</label>
                <input type="text" placeholder="linkedin.com/in/aravind" value={personalInfo.website} onChange={e => setPersonalInfo(p => ({...p,website:e.target.value}))} /></div>
            </div>
            <div className="form-group">
              <label>Portfolio Link <span style={{ color:'#9ca3af',fontWeight:400 }}>(optional)</span></label>
              <input type="text" placeholder="aravind.dev or github.com/aravind" value={personalInfo.portfolio || ''} onChange={e => setPersonalInfo(p => ({...p,portfolio:e.target.value}))} />
            </div>
            <div className="form-group">
              <div className="ai-btn-row">
                <label>Professional Summary</label>
                <AiBtn onClick={suggestSummary} loading={aiLoading.summary} label="✨ AI Write" />
              </div>
              <textarea placeholder="Motivated Full Stack Developer with 2+ years of experience..." value={personalInfo.summary} onChange={e => setPersonalInfo(p => ({...p,summary:e.target.value}))} />
            </div>

            {/* Experience */}
            <div className="section-header">
              <h4>Work Experience</h4>
              <button className="btn btn-navy" style={{ padding:'5px 12px',fontSize:'.78rem' }} onClick={addExp}>+ Add</button>
            </div>
            {experience.map((exp, i) => (
              <div className="entry-block" key={i}>
                <div className="row-2">
                  <div className="form-group"><label>Job Title</label>
                    <input type="text" placeholder="Full Stack Developer" value={exp.role} onChange={e => updateExp(i,'role',e.target.value)} /></div>
                  <div className="form-group"><label>Company</label>
                    <input type="text" placeholder="Amazon" value={exp.company} onChange={e => updateExp(i,'company',e.target.value)} /></div>
                </div>
                <div className="form-group">
                  <label>Project/Work Link <span style={{ color:'#9ca3af',fontWeight:400 }}>(optional)</span></label>
                  <input type="text" placeholder="github.com/project or live-demo.com" value={exp.projectLink || ''} onChange={e => updateExp(i,'projectLink',e.target.value)} />
                </div>
                <div className="row-2">
                  <div className="form-group"><label>Start Date</label>
                    <input type="text" placeholder="Jan 2024" value={exp.startDate} onChange={e => updateExp(i,'startDate',e.target.value)} /></div>
                  <div className="form-group"><label>End Date</label>
                    <input type="text" placeholder="Present" value={exp.endDate} onChange={e => updateExp(i,'endDate',e.target.value)} /></div>
                </div>
                <div className="form-group">
                  <div className="ai-btn-row">
                    <label>Description</label>
                    <AiBtn onClick={() => suggestExpDesc(i)} loading={aiLoading[`exp${i}`]} />
                  </div>
                  <textarea placeholder="• Built REST APIs using Node.js&#10;• Developed React frontends with Tailwind CSS" value={exp.description} onChange={e => updateExp(i,'description',e.target.value)} />
                </div>
                {experience.length > 1 && <button className="btn btn-danger" style={{ fontSize:'.78rem',padding:'4px 10px' }} onClick={() => removeExp(i)}>Remove</button>}
              </div>
            ))}

            {/* Education */}
            <div className="section-header">
              <h4>Education</h4>
              <button className="btn btn-navy" style={{ padding:'5px 12px',fontSize:'.78rem' }} onClick={addEdu}>+ Add</button>
            </div>
            {education.map((edu, i) => (
              <div className="entry-block" key={i}>
                <div className="row-2">
                  <div className="form-group"><label>Degree</label>
                    <input type="text" placeholder="B.Tech CSE" value={edu.degree} onChange={e => updateEdu(i,'degree',e.target.value)} /></div>
                  <div className="form-group"><label>Institution</label>
                    <input type="text" placeholder="Delhi University" value={edu.institution} onChange={e => updateEdu(i,'institution',e.target.value)} /></div>
                </div>
                <div className="row-2">
                  <div className="form-group"><label>Year</label>
                    <input type="text" placeholder="2022 – 2026" value={edu.year} onChange={e => updateEdu(i,'year',e.target.value)} /></div>
                  <div className="form-group"><label>CGPA / Grade</label>
                    <input type="text" placeholder="8.5/10" value={edu.gpa} onChange={e => updateEdu(i,'gpa',e.target.value)} /></div>
                </div>
                {education.length > 1 && <button className="btn btn-danger" style={{ fontSize:'.78rem',padding:'4px 10px' }} onClick={() => removeEdu(i)}>Remove</button>}
              </div>
            ))}

            {/* Skills + Tools */}
            <div className="form-group" style={{ marginTop:'.5rem' }}>
              <label>Skills <span style={{ color:'#9ca3af',fontWeight:400 }}>(comma separated)</span></label>
              <input type="text" placeholder="React, Node.js, MongoDB, Express, Python, Git" value={skillsInput} onChange={e => setSkillsInput(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Tools <span style={{ color:'#9ca3af',fontWeight:400 }}>(comma separated)</span></label>
              <input type="text" placeholder="VS Code, Postman, Azure, Docker, Figma, Git" value={toolsInput} onChange={e => setToolsInput(e.target.value)} />
            </div>

            {/* Projects */}
            <div className="section-header">
              <h4>Projects</h4>
              <button className="btn btn-navy" style={{ padding:'5px 12px',fontSize:'.78rem' }} onClick={addProj}>+ Add</button>
            </div>
            {projects.map((proj, i) => (
              <div className="entry-block" key={i}>
                <div className="row-2">
                  <div className="form-group"><label>Project Name</label>
                    <input type="text" placeholder="ResumeForge" value={proj.name} onChange={e => updateProj(i,'name',e.target.value)} /></div>
                  <div className="form-group"><label>Tech Stack</label>
                    <input type="text" placeholder="Next.js, Node.js, MongoDB" value={proj.techStack} onChange={e => updateProj(i,'techStack',e.target.value)} /></div>
                </div>
                <div className="form-group"><label>Project Link <span style={{ color:'#9ca3af',fontWeight:400 }}>(optional)</span></label>
                  <input type="text" placeholder="github.com/aravind/resumeforge" value={proj.link} onChange={e => updateProj(i,'link',e.target.value)} /></div>
                <div className="form-group">
                  <div className="ai-btn-row">
                    <label>Description</label>
                    <AiBtn onClick={() => suggestProjDesc(i)} loading={aiLoading[`proj${i}`]} />
                  </div>
                  <textarea placeholder="An AI-powered resume builder that..." value={proj.description} onChange={e => updateProj(i,'description',e.target.value)} />
                </div>
                {projects.length > 1 && <button className="btn btn-danger" style={{ fontSize:'.78rem',padding:'4px 10px' }} onClick={() => removeProj(i)}>Remove</button>}
              </div>
            ))}

            {/* Actions */}
            <div style={{ display:'flex', gap:'.75rem', marginTop:'1rem' }}>
              <button className="btn btn-ghost btn-full" onClick={saveResume} disabled={saving}>
                {saving ? <span className="spinner" style={{ borderTopColor:'#1a1f36',borderColor:'#d1d5db' }} /> : '💾 Save'}
              </button>
              <button className="btn btn-gold btn-full" onClick={downloadPDF} disabled={downloading}>
                {downloading ? <span className="spinner" /> : '⬇ Download PDF'}
              </button>
            </div>
          </div>

          {/* ── PREVIEW PANEL ── */}
          <div className="preview-sticky">
            <div className="preview-header">Live Preview</div>
            <div className="preview-body" style={{ overflow:'hidden', minHeight:480 }}>
              <div style={{ transform:'scale(0.42)', transformOrigin:'top left', width:'238%' }}>
                {template === 'vertical' ? <VerticalTemplate data={resumeData} />
                  : template === 'classic' ? <ClassicTemplate data={resumeData} />
                  : template === 'modern' ? <ModernTemplate data={resumeData} />
                  : <HorizontalTemplate data={resumeData} />}
              </div>
            </div>
            <div className="ad-banner" style={{ marginTop:'1rem' }}><strong>Advertisement</strong>Google AdSense – 300×250</div>
          </div>
        </div>
      </div>
    </>
  );
}
