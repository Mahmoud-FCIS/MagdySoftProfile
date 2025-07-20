
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectFormData {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  featured: boolean;
}
