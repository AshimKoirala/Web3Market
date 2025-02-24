export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold">Your Posts</h2>
          <p className="text-lg text-blue-600">Manage your posts here.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold">Analytics</h2>
          <p className="text-lg text-blue-600">View insights and statistics.</p>
        </div>
      </div>
    </div>
  );
}
