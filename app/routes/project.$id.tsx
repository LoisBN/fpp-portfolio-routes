// TODO: Create a dynamic project detail page using useParams
// Import useParams from react-router and get the project id
// Look up the project from the data and display details

import { useParams, Link } from 'react-router';
import { projects } from '~/data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
        <Link to="/projects" className="text-blue-400 hover:text-blue-300">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link to="/projects" className="text-blue-400 hover:text-blue-300">
        Back to Projects
      </Link>

      <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <p className="text-gray-400 text-lg mb-6">{project.description}</p>

        <div>
          <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="bg-blue-900 text-blue-200 px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}