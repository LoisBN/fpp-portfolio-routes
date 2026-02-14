import { Outlet, NavLink } from 'react-router';
import './app.css';

export default function Root() {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 text-white p-6 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
          <div className="flex gap-6">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-gray-300 hover:text-white"}>
              Home
            </NavLink>
            {/* TODO: Add NavLink for /about route */}
            {/* TODO: Add NavLink for /projects route */}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}