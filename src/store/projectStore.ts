
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project, ProjectFormData } from '@/types/project';

interface ProjectStore {
  projects: Project[];
  addProject: (project: ProjectFormData) => void;
  updateProject: (id: string, project: ProjectFormData) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
  getFeaturedProjects: () => Project[];
  getProjectsByCategory: (category: string) => Project[];
}

export const useProjectStore = create<ProjectStore>()(
  persist(
    (set, get) => ({
      projects: [
        {
          id: '1',
          title: 'E-Commerce Platform',
          description: 'A modern e-commerce platform built with React and Node.js',
          longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance and user experience.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
          images: ['/placeholder.svg'],
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com/user/project',
          category: 'web',
          featured: true,
          createdAt: '2024-01-15',
          updatedAt: '2024-01-15'
        },
        {
          id: '2',
          title: 'Task Management App',
          description: 'A productivity app for managing tasks and projects',
          longDescription: 'A powerful task management application with features like project organization, team collaboration, deadline tracking, and progress monitoring. Designed to boost productivity for individuals and teams.',
          technologies: ['React Native', 'Firebase', 'TypeScript'],
          images: ['/placeholder.svg'],
          liveUrl: 'https://example.com',
          githubUrl: 'https://github.com/user/project',
          category: 'mobile',
          featured: true,
          createdAt: '2024-02-01',
          updatedAt: '2024-02-01'
        },
        {
          id: '3',
          title: 'Weather Dashboard',
          description: 'Real-time weather tracking and forecasting dashboard',
          longDescription: 'An interactive weather dashboard that provides real-time weather data, 7-day forecasts, interactive maps, and weather alerts. Features a clean, responsive design with beautiful data visualizations.',
          technologies: ['Vue.js', 'D3.js', 'OpenWeather API', 'SCSS'],
          images: ['/placeholder.svg'],
          category: 'web',
          featured: false,
          createdAt: '2024-03-10',
          updatedAt: '2024-03-10'
        }
      ],
      addProject: (projectData) =>
        set((state) => ({
          projects: [
            ...state.projects,
            {
              ...projectData,
              id: Date.now().toString(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),
      updateProject: (id, projectData) =>
        set((state) => ({
          projects: state.projects.map((project) =>
            project.id === id
              ? { ...project, ...projectData, updatedAt: new Date().toISOString() }
              : project
          ),
        })),
      deleteProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((project) => project.id !== id),
        })),
      getProject: (id) => {
        return get().projects.find((project) => project.id === id);
      },
      getFeaturedProjects: () => {
        return get().projects.filter((project) => project.featured);
      },
      getProjectsByCategory: (category) => {
        return get().projects.filter((project) => project.category === category);
      },
    }),
    {
      name: 'portfolio-projects',
    }
  )
);
