import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
  role: String, company: String, startDate: String, endDate: String, description: String,
});
const EducationSchema = new mongoose.Schema({
  degree: String, institution: String, year: String, gpa: String,
});
const ProjectSchema = new mongoose.Schema({
  name: String, techStack: String, link: String, description: String,
});

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  title: { type: String, default: 'My Resume' },
  template: { type: String, enum: ['horizontal', 'vertical'], default: 'horizontal' },
  personalInfo: { name: String, jobTitle: String, email: String, phone: String, location: String, website: String, summary: String },
  experience: [ExperienceSchema],
  education: [EducationSchema],
  skills: [String],
  projects: [ProjectSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

ResumeSchema.pre('save', async function () { this.updatedAt = new Date(); });

export default mongoose.models.Resume || mongoose.model('Resume', ResumeSchema);
