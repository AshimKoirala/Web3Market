export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2025 Ashim Koirala . All Rights Reserved.</p>
        </div>

        <div className="space-x-6">
          <a href="https://github.com/AshimKoirala" target="_blank" className="hover:text-blue-400">
            GitHub
          </a>
          <a href="/terms" className="hover:text-blue-400">
            Terms of Service
          </a>
          <a href="/privacy" className="hover:text-blue-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
