
export enum UserRole {
  STUDENT = 'student',
  ADMIN = 'admin'
}

export enum AppView {
  DASHBOARD = 'dashboard',
  ACADEMIC = 'academic',
  FEES = 'fees',
  DOCUMENTS = 'documents',
  AI_STUDY = 'ai_study',
  PROFILE = 'profile',
  PEERS = 'peers',
  RESUME_BUILDER = 'resume_builder',
  // Admin Specific Views
  MANAGE_STUDENTS = 'manage_students',
  POST_NOTICE = 'post_notice',
  FEE_REPORTS = 'fee_reports'
}

export type EngineeringBranch = 'Computer Science' | 'Mechanical' | 'Civil' | 'Electrical' | 'Electronics' | 'Chemical';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'warning' | 'urgent';
  author?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  branch: EngineeringBranch;
  year: number;
  avatar: string;
  projects: Project[];
  achievements: Achievement[];
  feeStatus: 'paid' | 'pending';
}

export interface FeeRecord {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
}

export interface DigitalDocument {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
}
