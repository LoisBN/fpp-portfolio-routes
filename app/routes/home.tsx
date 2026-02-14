export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center py-12">
        <h2 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h2>
        <p className="text-2xl text-gray-400 mb-6">Full-stack developer & creative technologist</p>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my projects, learn more about me, and see what I've built.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Skills</h3>
          <ul className="text-gray-300 space-y-2">
            <li>React & TypeScript</li>
            <li>Node.js & Express</li>
            <li>Database Design</li>
            <li>UI/UX Design</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
          <p className="text-gray-300 mb-2">Senior Developer</p>
          <p className="text-gray-400 text-sm">Tech Company Inc. - 5 years</p>
        </div>
      </div>

      <div className="bg-blue-900 rounded-lg p-8 border border-blue-700 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Check Out My Work</h3>
        <p className="text-gray-300 mb-6">View my projects and see what I can create for you</p>
        <p className="text-gray-400 text-sm">Go to the Projects page to see featured work</p>
      </div>
    </div>
  );
}