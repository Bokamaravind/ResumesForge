// function initials(name) {
//   return (name || 'RF').split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
// }

// const SKILL_LEVELS = [85, 90, 75, 95, 80, 70, 88, 92];

// function Link({ href, children, style = {} }) {
//   if (!href) return <span style={style}>{children}</span>;
//   const url = href.startsWith('http') ? href : `https://${href}`;
//   return (
//     <a href={url} target="_blank" rel="noopener noreferrer"
//       style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer', ...style }}>
//       {children}
//     </a>
//   );
// }

// export default function VerticalTemplate({ data }) {
//   const {
//     personalInfo = {},
//     experience = [],
//     education = [],
//     skills = [],
//     projects = [],
//     tools = [],
//   } = data;

//   const labelStyle = {
//     fontSize: 9,
//     fontWeight: 700,
//     color: '#9ca3af',
//     textTransform: 'uppercase',
//     letterSpacing: 0.5,
//     marginRight: 3,
//   };

//   const mainLabel = {
//     fontSize: 9.5,
//     fontWeight: 700,
//     color: '#6b7280',
//     marginRight: 3,
//   };

//   const sectionTitle = {
//     fontSize: 9.5,
//     fontWeight: 700,
//     textTransform: 'uppercase',
//     letterSpacing: 1.5,
//     color: '#1a1f36',
//     position: 'relative',
//     paddingBottom: 4,
//     marginBottom: 10,
//   };

//   const goldLine = {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     width: 28,
//     height: 2,
//     background: '#c9a84c',
//   };

//   return (
//     <div id="resume-preview" style={{
//       width: 794,
//       minHeight: 1123,
//       background: 'white',
//       fontFamily: 'Arial, sans-serif',
//       fontSize: 11,
//       color: '#1a1a1a',
//       display: 'grid',
//       gridTemplateColumns: '190px 1fr',
//     }}>

//       {/* ── SIDEBAR ── */}
//       <div style={{ background: '#1a1f36', color: 'white', padding: '24px 16px', minHeight: 1123 }}>

//         {/* Avatar */}
//         <div style={{
//           width: 68, height: 68, borderRadius: '50%',
//           background: '#c9a84c', display: 'flex',
//           alignItems: 'center', justifyContent: 'center',
//           fontFamily: 'Georgia, serif', fontSize: 22,
//           fontWeight: 700, color: '#1a1f36',
//           margin: '0 auto 10px',
//         }}>
//           {initials(personalInfo.name)}
//         </div>

//         {/* Name + Title */}
//         <div style={{ textAlign: 'center', marginBottom: 16 }}>
//           <div style={{ fontFamily: 'Georgia, serif', fontSize: 14, fontWeight: 700, color: 'white', lineHeight: 1.3, marginBottom: 3 }}>
//             {personalInfo.name || 'Your Name'}
//           </div>
//           <div style={{ fontSize: 9, color: '#e8c97a', letterSpacing: 0.5 }}>
//             {personalInfo.jobTitle || 'Professional Title'}
//           </div>
//         </div>

//         {/* Contact */}
//         <div style={{ marginBottom: 16 }}>
//           <div style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,.15)', paddingBottom: 3, marginBottom: 8 }}>
//             Contact
//           </div>
//           {personalInfo.email && (
//             <div style={{ fontSize: 9, color: '#b0c4d6', marginBottom: 5 }}>
//               <div style={labelStyle}>Email</div>
//               <Link href={`mailto:${personalInfo.email}`} style={{ color: '#e2e8f0' }}>
//                 {personalInfo.email}
//               </Link>
//             </div>
//           )}
//           {personalInfo.phone && (
//             <div style={{ fontSize: 9, color: '#b0c4d6', marginBottom: 5 }}>
//               <div style={labelStyle}>Phone</div>
//               <Link href={`tel:${personalInfo.phone}`} style={{ color: '#e2e8f0' }}>
//                 {personalInfo.phone}
//               </Link>
//             </div>
//           )}
//           {personalInfo.location && (
//             <div style={{ fontSize: 9, color: '#b0c4d6', marginBottom: 5 }}>
//               <div style={labelStyle}>Location</div>
//               <div style={{ color: '#e2e8f0' }}>{personalInfo.location}</div>
//             </div>
//           )}
//           {personalInfo.website && (
//             <div style={{ fontSize: 9, color: '#b0c4d6', marginBottom: 5 }}>
//               <div style={labelStyle}>LinkedIn</div>
//               <Link href={personalInfo.website} style={{ color: '#e8c97a', wordBreak: 'break-all' }}>
//                 {personalInfo.website}
//               </Link>
//             </div>
//           )}
//           {personalInfo.portfolio && (
//             <div style={{ fontSize: 9, color: '#b0c4d6', marginBottom: 5 }}>
//               <div style={labelStyle}>Portfolio</div>
//               <Link href={personalInfo.portfolio} style={{ color: '#e8c97a', wordBreak: 'break-all' }}>
//                 {personalInfo.portfolio}
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Skills */}
//         {skills.length > 0 && (
//           <div style={{ marginBottom: 16 }}>
//             <div style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,.15)', paddingBottom: 3, marginBottom: 8 }}>
//               Skills
//             </div>
//             {skills.map((skill, i) => (
//               <div key={i} style={{ marginBottom: 6 }}>
//                 <div style={{ fontSize: 9, color: '#e5e7eb', marginBottom: 2 }}>{skill}</div>
//                 <div style={{ background: 'rgba(255,255,255,.15)', height: 3, borderRadius: 2 }}>
//                   <div style={{ background: '#c9a84c', height: 3, borderRadius: 2, width: `${SKILL_LEVELS[i % SKILL_LEVELS.length]}%` }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Tools */}
//         {tools.length > 0 && (
//           <div style={{ marginBottom: 16 }}>
//             <div style={{ fontSize: 8.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: '#c9a84c', borderBottom: '1px solid rgba(255,255,255,.15)', paddingBottom: 3, marginBottom: 8 }}>
//               Tools
//             </div>
//             {tools.map((tool, i) => (
//               <div key={i} style={{ fontSize: 9, color: '#b0c4d6', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 5 }}>
//                 <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#c9a84c', flexShrink: 0, display: 'inline-block' }} />
//                 {tool}
//               </div>
//             ))}
//           </div>
//         )}

//       </div>

//       {/* ── MAIN ── */}
//       <div style={{ padding: '24px 24px' }}>

//         {/* Summary */}
//         {personalInfo.summary && (
//           <div style={{ marginBottom: 18 }}>
//             <div style={sectionTitle}>
//               Summary
//               <div style={goldLine} />
//             </div>
//             <p style={{ fontSize: 10, color: '#374151', lineHeight: 1.75, margin: 0 }}>
//               {personalInfo.summary}
//             </p>
//           </div>
//         )}

//         {/* Experience */}
//         {experience.some(e => e.role) && (
//           <div style={{ marginBottom: 18 }}>
//             <div style={sectionTitle}>
//               Experience
//               <div style={goldLine} />
//             </div>
//             {experience.map((exp, i) => exp.role && (
//               <div key={i} style={{ marginBottom: 14 }}>

//                 {/* Role + Date */}
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                   <div>
//                     <span style={mainLabel}>Role:</span>
//                     <span style={{ fontWeight: 700, fontSize: 11, color: '#1a1f36' }}>{exp.role}</span>
//                   </div>
//                   <div style={{ fontSize: 9.5, color: '#6b7280', flexShrink: 0, marginLeft: 8 }}>
//                     {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
//                   </div>
//                 </div>

//                 {/* Company */}
//                 <div style={{ fontSize: 10.5, marginBottom: 2 }}>
//                   <span style={mainLabel}>Company:</span>
//                   <span style={{ color: '#c9a84c', fontWeight: 600 }}>{exp.company}</span>
//                 </div>

//                 {/* Project Link (optional) */}
//                 {exp.projectLink && (
//                   <div style={{ fontSize: 9.5, marginBottom: 4 }}>
//                     <span style={mainLabel}>Project Link:</span>
//                     <Link href={exp.projectLink} style={{ color: '#4f46e5', fontWeight: 500 }}>
//                       {exp.projectLink}
//                     </Link>
//                   </div>
//                 )}

//                 {/* Description */}
//                 <div style={{ fontSize: 10, color: '#374151', lineHeight: 1.7, whiteSpace: 'pre-line', marginTop: 4 }}>
//                   {exp.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Projects */}
//         {projects.some(p => p.name) && (
//           <div style={{ marginBottom: 18 }}>
//             <div style={sectionTitle}>
//               Projects
//               <div style={goldLine} />
//             </div>
//             {projects.map((proj, i) => proj.name && (
//               <div key={i} style={{ marginBottom: 14 }}>

//                 {/* Name + Link */}
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                   <div style={{ fontWeight: 700, fontSize: 11, color: '#1a1f36' }}>{proj.name}</div>
//                   {proj.link && (
//                     <Link href={proj.link} style={{ fontSize: 9.5, color: '#4f46e5', fontWeight: 500, flexShrink: 0, marginLeft: 8 }}>
//                       View Project
//                     </Link>
//                   )}
//                 </div>

//                 {/* Tech Stack */}
//                 {proj.techStack && (
//                   <div style={{ fontSize: 10, marginBottom: 4 }}>
//                     <span style={mainLabel}>Skills:</span>
//                     <span style={{ color: '#c9a84c', fontWeight: 600 }}>{proj.techStack}</span>
//                   </div>
//                 )}

//                 {/* Description */}
//                 <div style={{ fontSize: 10, color: '#374151', lineHeight: 1.7 }}>
//                   {proj.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Education */}
//         {education.some(e => e.degree) && (
//           <div style={{ marginBottom: 18 }}>
//             <div style={sectionTitle}>
//               Education
//               <div style={goldLine} />
//             </div>
//             {education.map((edu, i) => edu.degree && (
//               <div key={i} style={{ marginBottom: 10 }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
//                   <div style={{ fontWeight: 700, fontSize: 11, color: '#1a1f36' }}>{edu.degree}</div>
//                   <div style={{ fontSize: 9.5, color: '#6b7280', flexShrink: 0, marginLeft: 8 }}>{edu.year}</div>
//                 </div>
//                 <div style={{ fontSize: 10, color: '#374151' }}>
//                   {edu.institution}
//                   {edu.gpa && (
//                     <span>
//                       &nbsp;|&nbsp;
//                       <span style={mainLabel}>Grade:</span>
//                       <span style={{ fontWeight: 600, color: '#1a1f36' }}>{edu.gpa}</span>
//                     </span>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

function initials(name) {
  return (name || 'RF').split(' ').map(w => w[0] || '').slice(0, 2).join('').toUpperCase();
}
const SKILL_LEVELS = [85, 90, 75, 95, 80, 70, 88, 92];

export default function VerticalTemplate({ data }) {
  const { personalInfo = {}, experience = [], education = [], skills = [], projects = [] } = data;

  return (
    <div className="rv" id="resume-preview" style={{ width: 794, minHeight: 1123 }}>
      {/* Sidebar */}
      <div className="rv-side">
        <div className="rv-avatar">{initials(personalInfo.name)}</div>
        <div className="rv-name">{personalInfo.name || 'Your Name'}</div>
        <div className="rv-jobtitle">{personalInfo.jobTitle || 'Professional Title'}</div>

        <div className="rv-sec">
          <div className="rv-sec-title">Contact</div>
          {personalInfo.email    && <div className="rv-contact-item">Email: {personalInfo.email}</div>}
          {personalInfo.phone    && <div className="rv-contact-item">Phone: {personalInfo.phone}</div>}
          {personalInfo.location && <div className="rv-contact-item">Location: {personalInfo.location}</div>}
          {personalInfo.website  && <div className="rv-contact-item">Web: {personalInfo.website}</div>}
        </div>

        {skills.length > 0 && (
          <div className="rv-sec">
            <div className="rv-sec-title">Skills</div>
            {skills.map((skill, i) => (
              <div className="rv-skill-item" key={i}>
                <div className="rv-skill-name">{skill}</div>
                <div className="rv-skill-track">
                  <div className="rv-skill-fill" style={{ width: `${SKILL_LEVELS[i % SKILL_LEVELS.length]}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main */}
      <div className="rv-main">
        {personalInfo.summary && (
          <div className="rv-main-sec">
            <div className="rv-main-title">Summary</div>
            <p style={{ fontSize: 10, color: '#374151', lineHeight: 1.7 }}>{personalInfo.summary}</p>
          </div>
        )}

        {experience.some(e => e.role) && (
          <div className="rv-main-sec">
            <div className="rv-main-title">Experience</div>
            {experience.map((exp, i) => exp.role && (
              <div className="rv-exp-item" key={i}>
                <div className="rv-exp-role">{exp.role}</div>
                <div className="rv-exp-co">
                  {exp.company}
                  {(exp.startDate || exp.endDate) && (
                    <span className="rv-exp-date"> | {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}</span>
                  )}
                </div>
                <div className="rv-exp-desc" style={{ whiteSpace: 'pre-line' }}>{exp.description}</div>
              </div>
            ))}
          </div>
        )}

        {projects.some(p => p.name) && (
          <div className="rv-main-sec">
            <div className="rv-main-title">Projects</div>
            {projects.map((proj, i) => proj.name && (
              <div className="rv-exp-item" key={i}>
                <div className="rv-exp-role">
                  {proj.name}{proj.link ? ` | ${proj.link}` : ''}
                </div>
                {proj.techStack && <div className="rv-exp-co">{proj.techStack}</div>}
                <div className="rv-exp-desc">{proj.description}</div>
              </div>
            ))}
          </div>
        )}

        {education.some(e => e.degree) && (
          <div className="rv-main-sec">
            <div className="rv-main-title">Education</div>
            {education.map((edu, i) => edu.degree && (
              <div className="rv-edu-item" key={i}>
                <div className="rv-edu-deg">{edu.degree}</div>
                <div className="rv-edu-meta">
                  {edu.institution}{edu.year ? ` | ${edu.year}` : ''}{edu.gpa ? ` | ${edu.gpa}` : ''}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
