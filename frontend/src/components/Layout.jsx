import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  const navItem =
    "flex items-center px-4 py-2 rounded-xl transition-all duration-200";

  const active =
    "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md";

  const inactive = "text-gray-300 hover:bg-gray-800 hover:text-white";

  return (
    <div className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <aside className="w-64 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white p-6 flex flex-col shadow-xl">
        <h1 className="text-2xl font-bold tracking-wide mb-10 text-blue-400">
          HRMS Lite
        </h1>

        <nav className="space-y-3">
          <Link
            to="/"
            className={`${navItem} ${
              location.pathname === "/" ? active : inactive
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/employees"
            className={`${navItem} ${
              location.pathname === "/employees" ? active : inactive
            }`}
          >
            Employees
          </Link>

          <Link
            to="/attendance"
            className={`${navItem} ${
              location.pathname === "/attendance" ? active : inactive
            }`}
          >
            Attendance
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">Admin Dashboard</h2>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white font-bold border border-white/30">
              A
            </div>
          </div>
        </header>

        <main className="p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
