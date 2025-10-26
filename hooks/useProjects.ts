import { useState, useEffect } from 'react';
import {
    collection,
    query,
    where,
    getDocs,
    orderBy,
    limit,
    DocumentData
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Project, ProjectFilter } from '../types/project';

export const useProjects = (filters?: ProjectFilter, itemsLimit?: number) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const projectsRef = collection(db, 'projects');

                let q = query(projectsRef, orderBy('createdAt', 'desc'));

                // Apply filters
                if (filters?.featured) {
                    q = query(q, where('featured', '==', true));
                }

                if (filters?.category) {
                    q = query(q, where('category', '==', filters.category));
                }

                if (filters?.status) {
                    q = query(q, where('status', '==', filters.status));
                }

                if (itemsLimit) {
                    q = query(q, limit(itemsLimit));
                }

                const querySnapshot = await getDocs(q);
                const projectsData: Project[] = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Project));

                setProjects(projectsData);
                setError(null);
            } catch (err) {
                setError('Failed to fetch projects');
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [filters, itemsLimit]);

    return { projects, loading, error };
};

export const useFeaturedProjects = (limitCount: number = 3) => {
    return useProjects({ featured: true }, limitCount);
};

export const useProject = (projectId: string) => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (!projectId) return;

            try {
                setLoading(true);
                const { doc, getDoc } = await import('firebase/firestore');
                const projectDoc = await getDoc(doc(db, 'projects', projectId));

                if (projectDoc.exists()) {
                    setProject({
                        id: projectDoc.id,
                        ...projectDoc.data()
                    } as Project);
                } else {
                    setError('Project not found');
                }
            } catch (err) {
                setError('Failed to fetch project');
                console.error('Error fetching project:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [projectId]);

    return { project, loading, error };
};