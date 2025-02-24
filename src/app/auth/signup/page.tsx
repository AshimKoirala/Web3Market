export default function Signup() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
      <form className="space-y-6">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md" />
        <button type="submit" className="bg-teal-600 text-white w-full py-3 rounded-lg hover:bg-teal-500 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
}
