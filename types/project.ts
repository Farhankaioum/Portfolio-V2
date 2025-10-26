// types/project.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    technologies: string[];
    category: 'web' | 'mobile' | 'fullstack' | 'api' | 'dashboard' | 'llm';
    status: 'completed' | 'in-progress' | 'planned';
    featured: boolean;
    demoUrl?: string;
    githubUrl?: string;
    liveUrl?: string;
    images: string[];
    thumbnail: string;
    createdAt: Date;
    updatedAt: Date;
    features: string[];
    challenges: string[];
    solutions: string[];
    results?: string[];
}

export interface ProjectShowcase {
    id: string;
    projectId: string;
    views: number;
    likes: number;
    featuredUntil?: Date;
    showcaseOrder: number;
}

export interface ProjectFilter {
    category?: Project['category'];
    status?: Project['status'];
    technologies?: string[];
    featured?: boolean;
}