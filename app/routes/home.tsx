export default function Home() {
  return (
    <div className="space-y-8">
      {/* Exercise Instructions */}
      <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">
          Portfolio Routes Exercise
        </h2>
        <p className="text-gray-300 mb-4">
          Build a multi-page portfolio site using React Router v7. Complete the tasks below using AI assistance.
        </p>

        <div className="space-y-6">
          {/* Task 1 */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Task 1: Set Up Routes
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm mb-3">
              <li>Open <code className="bg-gray-700 px-1 rounded">app/routes.ts</code></li>
              <li>Add routes for: <code className="bg-gray-700 px-1 rounded">/about</code>, <code className="bg-gray-700 px-1 rounded">/projects</code>, <code className="bg-gray-700 px-1 rounded">/contact</code></li>
              <li>Create the corresponding route files in <code className="bg-gray-700 px-1 rounded">app/routes/</code></li>
            </ul>
            <details className="text-sm">
              <summary className="text-blue-400 cursor-pointer hover:text-blue-300">
                AI Prompt
              </summary>
              <pre className="bg-gray-900 p-3 rounded mt-2 text-gray-300 overflow-x-auto">
{`Add routes for /about, /projects, and /contact to my routes.ts file.
Then create the corresponding route files in app/routes/ with basic headings.`}
              </pre>
            </details>
          </div>

          {/* Task 2 */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Task 2: Build the Navbar with NavLink
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm mb-3">
              <li>Create a Navbar component with links: Home, About, Projects, Contact</li>
              <li>Use <code className="bg-gray-700 px-1 rounded">NavLink</code> instead of <code className="bg-gray-700 px-1 rounded">Link</code> for active styling</li>
              <li>Style the active link with an underline or different color</li>
              <li>Make the navbar sticky at the top</li>
            </ul>
            <details className="text-sm">
              <summary className="text-blue-400 cursor-pointer hover:text-blue-300">
                AI Prompt
              </summary>
              <pre className="bg-gray-900 p-3 rounded mt-2 text-gray-300 overflow-x-auto">
{`Create a Navbar component with NavLink for Home, About, Projects, and Contact.
Style the active link with an underline and make the navbar sticky at the top.
Use Tailwind CSS for styling.`}
              </pre>
            </details>
          </div>

          {/* Task 3 */}
          <div className="bg-gray-800/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Task 3: Build Page Content
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm mb-3">
              <li><strong>Home:</strong> Hero section with your name and tagline</li>
              <li><strong>About:</strong> Short bio and a skills list (as badges)</li>
              <li><strong>Projects:</strong> 3-4 project cards in a responsive grid</li>
              <li><strong>Contact:</strong> Form with name, email, message fields</li>
            </ul>
            <details className="text-sm">
              <summary className="text-blue-400 cursor-pointer hover:text-blue-300">
                AI Prompts (one per page)
              </summary>
              <pre className="bg-gray-900 p-3 rounded mt-2 text-gray-300 overflow-x-auto text-xs">
{`# Home
Create a hero section with my name and tagline "Full Stack Developer". Centered layout with Tailwind.

# About
Add a bio section and skills list. Display skills as badges in a flex container.

# Projects
Create a grid of 4 project cards with title, description, and "View Project" link.

# Contact
Build a contact form with name, email, and message fields. No form submission needed.`}
              </pre>
            </details>
          </div>
        </div>
      </div>

      {/* Key Concept */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-3">Key Concept: NavLink vs Link</h3>
        <pre className="bg-gray-900 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`// Link - basic navigation
<Link to="/about">About</Link>

// NavLink - knows if it's active
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'underline' : ''}
>
  About
</NavLink>`}
        </pre>
      </div>

      {/* Current Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-white mb-3">Current Status</h3>
        <p className="text-gray-400 mb-4">
          This is the starter template. Replace this page with your hero section once you complete the tasks.
        </p>
        <p className="text-gray-500 text-sm">
          Tip: The navbar in <code className="bg-gray-700 px-1 rounded">root.tsx</code> already has basic links.
          Update it to use NavLink with active styling.
        </p>
      </div>
    </div>
  );
}
