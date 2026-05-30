// function MLink({ href, children, style = {} }) {
//   if (!href) return <span style={style}>{children}</span>;
//   const url = href.startsWith('http') ? href : `https://${href}`;
//   return (
//     <a href={url} target="_blank" rel="noopener noreferrer"
//       style={{ textDecoration: 'underline', cursor: 'pointer', ...style }}>
//       {children}
//     </a>
//   );
// }

// export default function ModernTemplate({ data }) {
//   const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], tools = [] } = data;
//   const labelStyle = { fontSize: 9.5, fontWeight: 700, color: '#64748b', marginRight: 3, textTransform: 'uppercase', letterSpacing: 0.5 };

//   return (
//     <div id="resume-preview" style={{ width: 794, minHeight: 1123, background: '#fafafa', fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#1e293b', lineHeight: 1.6 }}>

//       {/* Header */}
//       <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '32px 40px 28px', color: 'white' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//           <div>
//             <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}>
//               {personalInfo.name || 'Your Name'}
//             </div>
//             <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 400, letterSpacing: 1 }}>
//               {personalInfo.jobTitle || 'Professional Title'}
//             </div>
//           </div>
//           <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'white', flexShrink: 0 }}>
//             {(personalInfo.name || 'RF').split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase()}
//           </div>
//         </div>
//         <div style={{ display: 'flex', gap: 18, marginTop: 16, flexWrap: 'wrap' }}>
//           {personalInfo.email && (
//             <MLink href={`mailto:${personalInfo.email}`} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.email}</MLink>
//           )}
//           {personalInfo.phone && (
//             <MLink href={`tel:${personalInfo.phone}`} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.phone}</MLink>
//           )}
//           {personalInfo.location && (
//             <span style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.location}</span>
//           )}
//           {personalInfo.website && (
//             <MLink href={personalInfo.website} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.website}</MLink>
//           )}
//           {personalInfo.portfolio && (
//             <MLink href={personalInfo.portfolio} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.portfolio}</MLink>
//           )}
//         </div>
//       </div>

//       {/* Body */}
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 210px', minHeight: 'calc(1123px - 140px)' }}>

//         {/* Main */}
//         <div style={{ padding: '24px 28px', background: 'white' }}>

//           {personalInfo.summary && (
//             <div style={{ marginBottom: 20 }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
//                 <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
//                 <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Summary</div>
//               </div>
//               <p style={{ fontSize: 10.5, color: '#475569', lineHeight: 1.75, margin: 0 }}>{personalInfo.summary}</p>
//             </div>
//           )}

//           {experience.some(e => e.role) && (
//             <div style={{ marginBottom: 20 }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
//                 <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
//                 <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Experience</div>
//               </div>
//               {experience.map((exp, i) => exp.role && (
//                 <div key={i} style={{ marginBottom: 14, paddingLeft: 11, borderLeft: '1px solid #e2e8f0' }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                     <div>
//                       <div style={{ fontWeight: 700, fontSize: 11.5, color: '#0f172a' }}>
//                         <span style={labelStyle}>Role: </span>{exp.role}
//                       </div>
//                       <div style={{ fontSize: 10.5, marginTop: 1 }}>
//                         <span style={labelStyle}>Company: </span>
//                         <span style={{ color: '#3b82f6', fontWeight: 600 }}>{exp.company}</span>
//                       </div>
//                     </div>
//                     <div style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: 20, fontSize: 9.5, color: '#64748b', flexShrink: 0, marginLeft: 8 }}>
//                       {exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}
//                     </div>
//                   </div>
//                   {exp.projectLink && (
//                     <div style={{ fontSize: 9.5, marginTop: 3 }}>
//                       <span style={labelStyle}>Link: </span>
//                       <MLink href={exp.projectLink} style={{ color: '#3b82f6' }}>{exp.projectLink}</MLink>
//                     </div>
//                   )}
//                   <div style={{ fontSize: 10.5, color: '#475569', lineHeight: 1.7, whiteSpace: 'pre-line', marginTop: 5 }}>{exp.description}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {projects.some(p => p.name) && (
//             <div style={{ marginBottom: 20 }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
//                 <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
//                 <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Projects</div>
//               </div>
//               {projects.map((proj, i) => proj.name && (
//                 <div key={i} style={{ marginBottom: 12, paddingLeft: 11, borderLeft: '1px solid #e2e8f0' }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <div style={{ fontWeight: 700, fontSize: 11.5, color: '#0f172a' }}>{proj.name}</div>
//                     {proj.link && (
//                       <MLink href={proj.link} style={{ fontSize: 9.5, color: '#3b82f6', flexShrink: 0, marginLeft: 8 }}>
//                         View →
//                       </MLink>
//                     )}
//                   </div>
//                   {proj.techStack && (
//                     <div style={{ fontSize: 10, marginTop: 2 }}>
//                       <span style={labelStyle}>Skills: </span>
//                       <span style={{ color: '#3b82f6', fontWeight: 600 }}>{proj.techStack}</span>
//                     </div>
//                   )}
//                   <div style={{ fontSize: 10.5, color: '#475569', lineHeight: 1.7, marginTop: 4 }}>{proj.description}</div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {education.some(e => e.degree) && (
//             <div style={{ marginBottom: 20 }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
//                 <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
//                 <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Education</div>
//               </div>
//               {education.map((edu, i) => edu.degree && (
//                 <div key={i} style={{ marginBottom: 10, paddingLeft: 11, borderLeft: '1px solid #e2e8f0' }}>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                     <div style={{ fontWeight: 700, fontSize: 11.5, color: '#0f172a' }}>{edu.degree}</div>
//                     <div style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: 20, fontSize: 9.5, color: '#64748b', flexShrink: 0, marginLeft: 8 }}>{edu.year}</div>
//                   </div>
//                   <div style={{ fontSize: 10.5, color: '#475569' }}>
//                     {edu.institution}
//                     {edu.gpa && <span> | <span style={labelStyle}>Grade: </span><span style={{ fontWeight: 600, color: '#0f172a' }}>{edu.gpa}</span></span>}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Sidebar */}
//         <div style={{ background: '#f8fafc', padding: '24px 18px', borderLeft: '1px solid #e2e8f0' }}>
//           {skills.length > 0 && (
//             <div style={{ marginBottom: 20 }}>
//               <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a', marginBottom: 10, paddingBottom: 4, borderBottom: '1.5px solid #0f172a' }}>Skills</div>
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
//                 {skills.map((s, i) => (
//                   <span key={i} style={{ background: '#0f172a', color: 'white', padding: '3px 8px', borderRadius: 4, fontSize: 9, fontWeight: 500 }}>{s}</span>
//                 ))}
//               </div>
//             </div>
//           )}
//           {tools.length > 0 && (
//             <div style={{ marginBottom: 20 }}>
//               <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a', marginBottom: 10, paddingBottom: 4, borderBottom: '1.5px solid #0f172a' }}>Tools</div>
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
//                 {tools.map((t, i) => (
//                   <span key={i} style={{ background: '#e2e8f0', color: '#334155', padding: '3px 8px', borderRadius: 4, fontSize: 9, fontWeight: 500 }}>{t}</span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

function MLink({ href, children, style = {} }) {
  if (!href) return <span style={style}>{children}</span>;
  const url = href.startsWith('http') ? href : `https://${href}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ textDecoration: 'underline', cursor: 'pointer', ...style }}>
      {children}
    </a>
  );
}

export default function ModernTemplate({ data }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], tools = [] } = data;
  const labelStyle = { fontSize: 9.5, fontWeight: 700, color: '#64748b', marginRight: 3, textTransform: 'uppercase', letterSpacing: 0.5 };

  return (
    <div id="resume-preview" style={{ width: 794, minHeight: 1123, background: '#fafafa', fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#1e293b', lineHeight: 1.6 }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '32px 40px 28px', color: 'white' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 0.5, marginBottom: 4 }}>
              {personalInfo.name || 'Your Name'}
            </div>
            <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 400, letterSpacing: 1 }}>
              {personalInfo.jobTitle || 'Professional Title'}
            </div>
          </div>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: 'white', flexShrink: 0 }}>
            {(personalInfo.name || 'RF').split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase()}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 16, flexWrap: 'wrap' }}>
          {personalInfo.email && (
            <MLink href={`mailto:${personalInfo.email}`} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.email}</MLink>
          )}
          {personalInfo.phone && (
            <MLink href={`tel:${personalInfo.phone}`} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.phone}</MLink>
          )}
          {personalInfo.location && (
            <span style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.location}</span>
          )}
          {personalInfo.website && (
            <MLink href={personalInfo.website} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.website}</MLink>
          )}
          {personalInfo.portfolio && (
            <MLink href={personalInfo.portfolio} style={{ fontSize: 9.5, color: '#cbd5e1' }}>{personalInfo.portfolio}</MLink>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 210px', minHeight: 'calc(1123px - 140px)' }}>

        {/* Main */}
        <div style={{ padding: '24px 28px', background: 'white' }}>

          {personalInfo.summary && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Summary</div>
              </div>
              <p style={{ fontSize: 10.5, color: '#475569', lineHeight: 1.75, margin: 0 }}>{personalInfo.summary}</p>
            </div>
          )}

          {experience.some(e => e.role) && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Experience</div>
              </div>
              {experience.map((exp, i) => exp.role && (
                <div key={i} style={{ marginBottom: 14, paddingLeft: 11, borderLeft: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 11.5, color: '#0f172a' }}>
                        <span style={labelStyle}>Role: </span>{exp.role}
                      </div>
                      <div style={{ fontSize: 10.5, marginTop: 1 }}>
                        <span style={labelStyle}>Company: </span>
                        <span style={{ color: '#3b82f6', fontWeight: 600 }}>{exp.company}</span>
                      </div>
                    </div>
                    <div style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: 20, fontSize: 9.5, color: '#64748b', flexShrink: 0, marginLeft: 8 }}>
                      {exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}
                    </div>
                  </div>
                  {exp.projectLink && (
                    <div style={{ fontSize: 9.5, marginTop: 3 }}>
                      <span style={labelStyle}>Link: </span>
                      <MLink href={exp.projectLink} style={{ color: '#3b82f6' }}>{exp.projectLink}</MLink>
                    </div>
                  )}
                  <div style={{ fontSize: 10.5, color: '#475569', lineHeight: 1.7, whiteSpace: 'pre-line', marginTop: 5 }}>{exp.description}</div>
                </div>
              ))}
            </div>
          )}

          {projects.some(p => p.name) && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Projects</div>
              </div>
              {projects.map((proj, i) => proj.name && (
                <div key={i} style={{ marginBottom: 12, paddingLeft: 11, borderLeft: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 700, fontSize: 11.5, color: '#0f172a' }}>{proj.name}</div>
                    {proj.link && (
                      <MLink href={proj.link} style={{ fontSize: 9.5, color: '#3b82f6', flexShrink: 0, marginLeft: 8 }}>
                        View →
                      </MLink>
                    )}
                  </div>
                  {proj.techStack && (
                    <div style={{ fontSize: 10, marginTop: 2 }}>
                      <span style={labelStyle}>Skills: </span>
                      <span style={{ color: '#3b82f6', fontWeight: 600 }}>{proj.techStack}</span>
                    </div>
                  )}
                  <div style={{ fontSize: 10.5, color: '#475569', lineHeight: 1.7, marginTop: 4 }}>{proj.description}</div>
                </div>
              ))}
            </div>
          )}

          {education.some(e => e.degree) && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 3, height: 16, background: '#0f172a', borderRadius: 2 }} />
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a' }}>Education</div>
              </div>
              {education.map((edu, i) => edu.degree && (
                <div key={i} style={{ marginBottom: 10, paddingLeft: 11, borderLeft: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontWeight: 700, fontSize: 11.5, color: '#0f172a' }}>{edu.degree}</div>
                    <div style={{ background: '#f1f5f9', padding: '2px 8px', borderRadius: 20, fontSize: 9.5, color: '#64748b', flexShrink: 0, marginLeft: 8 }}>{edu.year}</div>
                  </div>
                  <div style={{ fontSize: 10.5, color: '#475569' }}>
                    {edu.institution}
                    {edu.gpa && <span> | <span style={labelStyle}>Grade: </span><span style={{ fontWeight: 600, color: '#0f172a' }}>{edu.gpa}</span></span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ background: '#f8fafc', padding: '24px 18px', borderLeft: '1px solid #e2e8f0' }}>
          {skills.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a', marginBottom: 10, paddingBottom: 4, borderBottom: '1.5px solid #0f172a' }}>Skills</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {skills.map((s, i) => (
                  <span key={i} style={{ background: '#0f172a', color: 'white', padding: '3px 8px', borderRadius: 4, fontSize: 9, fontWeight: 500 }}>{s}</span>
                ))}
              </div>
            </div>
          )}
          {tools.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#0f172a', marginBottom: 10, paddingBottom: 4, borderBottom: '1.5px solid #0f172a' }}>Tools</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {tools.map((t, i) => (
                  <span key={i} style={{ background: '#e2e8f0', color: '#334155', padding: '3px 8px', borderRadius: 4, fontSize: 9, fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
