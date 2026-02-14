import { Link } from 'react-router';
import { projects } from '~/data/projects';

export default function Projects() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition cursor-pointer">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}