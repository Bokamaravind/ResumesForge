// function CLink({ href, children, style = {} }) {
//   if (!href) return <span style={style}>{children}</span>;
//   const url = href.startsWith('http') ? href : `https://${href}`;
//   return (
//     <a href={url} target="_blank" rel="noopener noreferrer"
//       style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer', ...style }}>
//       {children}
//     </a>
//   );
// }

// export default function ClassicTemplate({ data }) {
//   const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], tools = [] } = data;

//   const divider = { borderTop: '1px solid #1a1a1a', margin: '8px 0' };
//   const sectionTitle = { fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#1a1a1a', marginBottom: 6, marginTop: 0 };
//   const labelStyle = { fontSize: 10, fontWeight: 700, color: '#555', marginRight: 3 };

//   return (
//     <div id="resume-preview" style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Georgia, serif', fontSize: 11, color: '#1a1a1a', lineHeight: 1.6, padding: '48px 56px' }}>

//       {/* Header — Centered */}
//       <div style={{ textAlign: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
//         <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
//           {personalInfo.name || 'Your Name'}
//         </div>
//         <div style={{ fontSize: 12, color: '#444', letterSpacing: 1, marginBottom: 8 }}>
//           {personalInfo.jobTitle || 'Professional Title'}
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 10, color: '#555', flexWrap: 'wrap' }}>
//           {personalInfo.email && <span><CLink href={`mailto:${personalInfo.email}`}>{personalInfo.email}</CLink></span>}
//           {personalInfo.phone && <span><CLink href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</CLink></span>}
//           {personalInfo.location && <span>{personalInfo.location}</span>}
//           {personalInfo.website && <span><CLink href={personalInfo.website} style={{ color: '#333' }}>{personalInfo.website}</CLink></span>}
//           {personalInfo.portfolio && <span><CLink href={personalInfo.portfolio} style={{ color: '#333' }}>{personalInfo.portfolio}</CLink></span>}
//         </div>
//       </div>

//       {/* Summary */}
//       {personalInfo.summary && (
//         <div style={{ marginBottom: 14 }}>
//           <div style={sectionTitle}>Professional Summary</div>
//           <div style={divider} />
//           <p style={{ fontSize: 10.5, color: '#333', lineHeight: 1.75, margin: '6px 0 0', textAlign: 'justify' }}>{personalInfo.summary}</p>
//         </div>
//       )}

//       {/* Experience */}
//       {experience.some(e => e.role) && (
//         <div style={{ marginBottom: 14 }}>
//           <div style={sectionTitle}>Professional Experience</div>
//           <div style={divider} />
//           {experience.map((exp, i) => exp.role && (
//             <div key={i} style={{ marginBottom: 10, marginTop: 6 }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                 <div>
//                   <span style={{ fontWeight: 700, fontSize: 11.5 }}>{exp.role}</span>
//                   {exp.company && <span style={{ fontSize: 11, color: '#444' }}> — {exp.company}</span>}
//                 </div>
//                 <div style={{ fontSize: 10, color: '#555', fontStyle: 'italic', flexShrink: 0, marginLeft: 12 }}>
//                   {exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}
//                 </div>
//               </div>
//               {exp.projectLink && (
//                 <div style={{ fontSize: 10, marginTop: 2 }}>
//                   <span style={labelStyle}>Link:</span>
//                   <CLink href={exp.projectLink} style={{ color: '#444' }}>{exp.projectLink}</CLink>
//                 </div>
//               )}
//               <div style={{ fontSize: 10.5, color: '#333', lineHeight: 1.7, whiteSpace: 'pre-line', marginTop: 4 }}>{exp.description}</div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Projects */}
//       {projects.some(p => p.name) && (
//         <div style={{ marginBottom: 14 }}>
//           <div style={sectionTitle}>Projects</div>
//           <div style={divider} />
//           {projects.map((proj, i) => proj.name && (
//             <div key={i} style={{ marginBottom: 10, marginTop: 6 }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                 <div>
//                   <span style={{ fontWeight: 700, fontSize: 11.5 }}>{proj.name}</span>
//                   {proj.techStack && <span style={{ fontSize: 10.5, color: '#555' }}> — {proj.techStack}</span>}
//                 </div>
//                 {proj.link && (
//                   <CLink href={proj.link} style={{ fontSize: 10, color: '#555', fontStyle: 'italic', flexShrink: 0, marginLeft: 12 }}>
//                     {proj.link}
//                   </CLink>
//                 )}
//               </div>
//               <div style={{ fontSize: 10.5, color: '#333', lineHeight: 1.7, marginTop: 4 }}>{proj.description}</div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Education */}
//       {education.some(e => e.degree) && (
//         <div style={{ marginBottom: 14 }}>
//           <div style={sectionTitle}>Education</div>
//           <div style={divider} />
//           {education.map((edu, i) => edu.degree && (
//             <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 6, marginBottom: 6 }}>
//               <div>
//                 <div style={{ fontWeight: 700, fontSize: 11.5 }}>{edu.degree}</div>
//                 <div style={{ fontSize: 10.5, color: '#444' }}>
//                   {edu.institution}
//                   {edu.gpa && <span> | <span style={labelStyle}>Grade:</span>{edu.gpa}</span>}
//                 </div>
//               </div>
//               <div style={{ fontSize: 10, color: '#555', fontStyle: 'italic', flexShrink: 0, marginLeft: 12 }}>{edu.year}</div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Skills & Tools */}
//       {(skills.length > 0 || tools.length > 0) && (
//         <div style={{ marginBottom: 14 }}>
//           <div style={sectionTitle}>Skills & Tools</div>
//           <div style={divider} />
//           <div style={{ marginTop: 6 }}>
//             {skills.length > 0 && (
//               <div style={{ marginBottom: 5 }}>
//                 <span style={{ ...labelStyle, textTransform: 'uppercase', letterSpacing: 1 }}>Skills: </span>
//                 <span style={{ fontSize: 10.5, color: '#333' }}>{skills.join(' • ')}</span>
//               </div>
//             )}
//             {tools.length > 0 && (
//               <div>
//                 <span style={{ ...labelStyle, textTransform: 'uppercase', letterSpacing: 1 }}>Tools: </span>
//                 <span style={{ fontSize: 10.5, color: '#333' }}>{tools.join(' • ')}</span>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


function CLink({ href, children, style = {} }) {
  if (!href) return <span style={style}>{children}</span>;
  const url = href.startsWith('http') ? href : `https://${href}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer', ...style }}>
      {children}
    </a>
  );
}

export default function ClassicTemplate({ data }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [], tools = [] } = data;

  const divider = { borderTop: '1px solid #1a1a1a', margin: '8px 0' };
  const sectionTitle = { fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#1a1a1a', marginBottom: 6, marginTop: 0 };
  const labelStyle = { fontSize: 10, fontWeight: 700, color: '#555', marginRight: 3 };

  return (
    <div id="resume-preview" style={{ width: 794, minHeight: 1123, background: 'white', fontFamily: 'Georgia, serif', fontSize: 11, color: '#1a1a1a', lineHeight: 1.6, padding: '48px 56px' }}>

      {/* Header — Centered */}
      <div style={{ textAlign: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '2px solid #1a1a1a' }}>
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>
          {personalInfo.name || 'Your Name'}
        </div>
        <div style={{ fontSize: 12, color: '#444', letterSpacing: 1, marginBottom: 8 }}>
          {personalInfo.jobTitle || 'Professional Title'}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: 10, color: '#555', flexWrap: 'wrap' }}>
          {personalInfo.email && <span><CLink href={`mailto:${personalInfo.email}`}>{personalInfo.email}</CLink></span>}
          {personalInfo.phone && <span><CLink href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</CLink></span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span><CLink href={personalInfo.website} style={{ color: '#333' }}>{personalInfo.website}</CLink></span>}
          {personalInfo.portfolio && <span><CLink href={personalInfo.portfolio} style={{ color: '#333' }}>{personalInfo.portfolio}</CLink></span>}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div style={{ marginBottom: 14 }}>
          <div style={sectionTitle}>Professional Summary</div>
          <div style={divider} />
          <p style={{ fontSize: 10.5, color: '#333', lineHeight: 1.75, margin: '6px 0 0', textAlign: 'justify' }}>{personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.some(e => e.role) && (
        <div style={{ marginBottom: 14 }}>
          <div style={sectionTitle}>Professional Experience</div>
          <div style={divider} />
          {experience.map((exp, i) => exp.role && (
            <div key={i} style={{ marginBottom: 10, marginTop: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 11.5 }}>{exp.role}</span>
                  {exp.company && <span style={{ fontSize: 11, color: '#444' }}> — {exp.company}</span>}
                </div>
                <div style={{ fontSize: 10, color: '#555', fontStyle: 'italic', flexShrink: 0, marginLeft: 12 }}>
                  {exp.startDate}{exp.endDate ? ` – ${exp.endDate}` : ''}
                </div>
              </div>
              {exp.projectLink && (
                <div style={{ fontSize: 10, marginTop: 2 }}>
                  <span style={labelStyle}>Link:</span>
                  <CLink href={exp.projectLink} style={{ color: '#444' }}>{exp.projectLink}</CLink>
                </div>
              )}
              <div style={{ fontSize: 10.5, color: '#333', lineHeight: 1.7, whiteSpace: 'pre-line', marginTop: 4 }}>{exp.description}</div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.some(p => p.name) && (
        <div style={{ marginBottom: 14 }}>
          <div style={sectionTitle}>Projects</div>
          <div style={divider} />
          {projects.map((proj, i) => proj.name && (
            <div key={i} style={{ marginBottom: 10, marginTop: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ fontWeight: 700, fontSize: 11.5 }}>{proj.name}</span>
                  {proj.techStack && <span style={{ fontSize: 10.5, color: '#555' }}> — {proj.techStack}</span>}
                </div>
                {proj.link && (
                  <CLink href={proj.link} style={{ fontSize: 10, color: '#555', fontStyle: 'italic', flexShrink: 0, marginLeft: 12 }}>
                    {proj.link}
                  </CLink>
                )}
              </div>
              <div style={{ fontSize: 10.5, color: '#333', lineHeight: 1.7, marginTop: 4 }}>{proj.description}</div>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.some(e => e.degree) && (
        <div style={{ marginBottom: 14 }}>
          <div style={sectionTitle}>Education</div>
          <div style={divider} />
          {education.map((edu, i) => edu.degree && (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 6, marginBottom: 6 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 11.5 }}>{edu.degree}</div>
                <div style={{ fontSize: 10.5, color: '#444' }}>
                  {edu.institution}
                  {edu.gpa && <span> | <span style={labelStyle}>Grade:</span>{edu.gpa}</span>}
                </div>
              </div>
              <div style={{ fontSize: 10, color: '#555', fontStyle: 'italic', flexShrink: 0, marginLeft: 12 }}>{edu.year}</div>
            </div>
          ))}
        </div>
      )}

      {/* Skills & Tools */}
      {(skills.length > 0 || tools.length > 0) && (
        <div style={{ marginBottom: 14 }}>
          <div style={sectionTitle}>Skills & Tools</div>
          <div style={divider} />
          <div style={{ marginTop: 6 }}>
            {skills.length > 0 && (
              <div style={{ marginBottom: 5 }}>
                <span style={{ ...labelStyle, textTransform: 'uppercase', letterSpacing: 1 }}>Skills: </span>
                <span style={{ fontSize: 10.5, color: '#333' }}>{skills.join(' • ')}</span>
              </div>
            )}
            {tools.length > 0 && (
              <div>
                <span style={{ ...labelStyle, textTransform: 'uppercase', letterSpacing: 1 }}>Tools: </span>
                <span style={{ fontSize: 10.5, color: '#333' }}>{tools.join(' • ')}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
