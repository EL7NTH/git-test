export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Customer Interaction Dashboard</h1>
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700">
          Logout
        </button>
      </div>
    </nav>
  );
}
