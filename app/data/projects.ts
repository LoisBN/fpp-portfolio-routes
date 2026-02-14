export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    tech: ['React', 'Firebase', 'Tailwind CSS']
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Real-time weather information with forecasts',
    tech: ['React', 'TypeScript', 'Weather API']
  }
];