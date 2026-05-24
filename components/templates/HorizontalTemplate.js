function Link({ href, children, style = {} }) {
  if (!href) return <span style={style}>{children}</span>;
  const url = href.startsWith('http') ? href : `https://${href}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer', ...style }}>
      {children}
    </a>
  );
}

export default function HorizontalTemplate({ data }) {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    skills = [],
    projects = [],
    tools = [],
  } = data;

  const sectionTitle = {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#1a1f36',
    borderBottom: '1.5px solid #c9a84c',
    paddingBottom: 4,
    marginBottom: 10,
    marginTop: 0,
  };

  const labelStyle = {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: 600,
    marginRight: 3,
  };

  return (
    <div id="resume-preview" style={{
      width: 794,
      minHeight: 1123,
      background: 'white',
      fontFamily: 'Arial, sans-serif',
      fontSize: 11,
      color: '#1a1a1a',
      lineHeight: 1.5,
    }}>

      {/* ── HEADER ── */}
      <div style={{
        padding: '28px 36px 20px',
        borderBottom: '3px solid #c9a84c',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 20,
      }}>
        {/* Left */}
        <div>
          <div style={{ fontSize: 26, fontWeight: 700, color: '#1a1f36', fontFamily: 'Georgia, serif', marginBottom: 4 }}>
            {personalInfo.name || 'Your Name'}
          </div>
          <div style={{ fontSize: 12, color: '#c9a84c', fontWeight: 600 }}>
            {personalInfo.jobTitle || 'Professional Title'}
          </div>
        </div>

        {/* Right — Contact */}
        <div style={{ textAlign: 'right', fontSize: 10, color: '#374151', lineHeight: 2, flexShrink: 0 }}>
          {personalInfo.email && (
            <div>
              <span style={labelStyle}>Email:</span>
              <Link href={`mailto:${personalInfo.email}`} style={{ color: '#1a1f36' }}>
                {personalInfo.email}
              </Link>
            </div>
          )}
          {personalInfo.phone && (
            <div>
              <span style={labelStyle}>Phone:</span>
              <Link href={`tel:${personalInfo.phone}`} style={{ color: '#1a1f36' }}>
                {personalInfo.phone}
              </Link>
            </div>
          )}
          {personalInfo.location && (
            <div><span style={labelStyle}>Location:</span>{personalInfo.location}</div>
          )}
          {personalInfo.website && (
            <div>
              <span style={labelStyle}>LinkedIn:</span>
              <Link href={personalInfo.website} style={{ color: '#c9a84c' }}>
                {personalInfo.website}
              </Link>
            </div>
          )}
          {personalInfo.portfolio && (
            <div>
              <span style={labelStyle}>Portfolio:</span>
              <Link href={personalInfo.portfolio} style={{ color: '#c9a84c' }}>
                {personalInfo.portfolio}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ padding: '22px 36px' }}>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <div style={{ marginBottom: 18 }}>
            <div style={sectionTitle}>Professional Summary</div>
            <p style={{ fontSize: 10.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Work Experience */}
        {experience.some(e => e.role) && (
          <div style={{ marginBottom: 18 }}>
            <div style={sectionTitle}>Work Experience</div>
            {experience.map((exp, i) => exp.role && (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={labelStyle}>Role:</span>
                    <span style={{ fontWeight: 700, fontSize: 11.5, color: '#1a1f36' }}>{exp.role}</span>
                  </div>
                  <div style={{ fontSize: 10, color: '#6b7280', flexShrink: 0, marginLeft: 12 }}>
                    {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                  </div>
                </div>

                <div style={{ fontSize: 10.5, marginBottom: 2 }}>
                  <span style={labelStyle}>Company:</span>
                  <span style={{ color: '#c9a84c', fontWeight: 600 }}>{exp.company}</span>
                </div>

                {exp.projectLink && (
                  <div style={{ fontSize: 10, marginBottom: 4 }}>
                    <span style={labelStyle}>Project Link:</span>
                    <Link href={exp.projectLink} style={{ color: '#4f46e5', fontWeight: 500 }}>
                      {exp.projectLink}
                    </Link>
                  </div>
                )}

                <div style={{ fontSize: 10.5, color: '#374151', lineHeight: 1.7, whiteSpace: 'pre-line', marginTop: 4 }}>
                  {exp.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.some(p => p.name) && (
          <div style={{ marginBottom: 18 }}>
            <div style={sectionTitle}>Projects</div>
            {projects.map((proj, i) => proj.name && (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontWeight: 700, fontSize: 11.5, color: '#1a1f36' }}>{proj.name}</div>
                  {proj.link && (
                    <Link href={proj.link} style={{ fontSize: 10, color: '#4f46e5', fontWeight: 500, flexShrink: 0, marginLeft: 12 }}>
                      🔗 View Project
                    </Link>
                  )}
                </div>

                {proj.techStack && (
                  <div style={{ fontSize: 10.5, marginBottom: 4 }}>
                    <span style={labelStyle}>Skills:</span>
                    <span style={{ color: '#c9a84c', fontWeight: 600 }}>{proj.techStack}</span>
                  </div>
                )}

                <div style={{ fontSize: 10.5, color: '#374151', lineHeight: 1.7 }}>
                  {proj.description}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.some(e => e.degree) && (
          <div style={{ marginBottom: 18 }}>
            <div style={sectionTitle}>Education</div>
            {education.map((edu, i) => edu.degree && (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontWeight: 700, fontSize: 11.5, color: '#1a1f36' }}>{edu.degree}</div>
                  <div style={{ fontSize: 10, color: '#6b7280', flexShrink: 0, marginLeft: 12 }}>{edu.year}</div>
                </div>
                <div style={{ fontSize: 10.5, color: '#374151' }}>
                  {edu.institution}
                  {edu.gpa && (
                    <span>
                      &nbsp;|&nbsp;
                      <span style={labelStyle}>Grade:</span>
                      <span style={{ fontWeight: 600, color: '#1a1f36' }}>{edu.gpa}</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills & Tools */}
        {(skills.length > 0 || tools.length > 0) && (
          <div style={{ marginBottom: 18 }}>
            <div style={sectionTitle}>Skills & Tools</div>
            {skills.length > 0 && (
              <div style={{ marginBottom: 6 }}>
                <span style={{ ...labelStyle, textTransform: 'uppercase', letterSpacing: 1 }}>Skills: </span>
                <span style={{ fontSize: 10.5, color: '#374151' }}>{skills.join(' • ')}</span>
              </div>
            )}
            {tools.length > 0 && (
              <div>
                <span style={{ ...labelStyle, textTransform: 'uppercase', letterSpacing: 1 }}>Tools: </span>
                <span style={{ fontSize: 10.5, color: '#374151' }}>{tools.join(' • ')}</span>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}