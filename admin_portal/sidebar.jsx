export function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul>
        <li className="mb-2 hover:bg-gray-700 px-2 py-2 rounded">
          Notifications
        </li>
        <li className="mb-2 hover:bg-gray-700 px-2 py-2 rounded">Rewards</li>
        <li className="mb-2 hover:bg-gray-700 px-2 py-2 rounded">Analytics</li>
        <li className="hover:bg-gray-700 px-2 py-2 rounded">Settings</li>
      </ul>
    </aside>
  );
}
