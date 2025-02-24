'use client';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function HomePage() {
  const { isSignedIn } = useAuth();
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-4 drop-shadow-md">
          Discover & Showcase Your Web3 Innovations
        </h1>
        <p className="text-xl sm:text-2xl mb-6 max-w-xl mx-auto drop-shadow-lg">
          Showcase your groundbreaking projects, hire the best creators, and get paid securely with cryptocurrency.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Link href="/posts">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white transition duration-300 transform hover:scale-105">
              Explore Posts
            </button>
          </Link>
          <Link href={isSignedIn ? '/dashboard' : '/auth/login'}>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-white hover:text-blue-600 transition duration-300 transform hover:scale-105">
              Create a Post
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
