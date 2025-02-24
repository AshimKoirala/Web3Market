'use client';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaHome, FaChartLine, FaCogs, FaHeart, FaSignOutAlt } from 'react-icons/fa'; // Icons

export default function Dashboard() {
  const { isSignedIn, signOut } = useAuth();
  const router = useRouter();

  // State for selected content
  const [selectedContent, setSelectedContent] = useState('posts');

  // Redirect if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/auth/login');
    }
  }, [isSignedIn, router]);

  const handleNavigation = (content: string) => {
    setSelectedContent(content);
  };

  const handleLogout = () => {
    signOut(); 
    router.push('/auth/login'); 
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white h-screen p-4 space-y-6 flex flex-col">
        <h2 className="text-3xl font-bold">Dashboard</h2>

        <div className="space-y-4 flex-grow">
          <button
            onClick={() => handleNavigation('posts')}
            className="w-full text-left text-lg hover:bg-blue-600 p-3 rounded-lg transition duration-300 flex items-center space-x-3"
          >
            <FaHome className="text-xl" />
            <span>Your Posts</span>
          </button>

          <button
            onClick={() => handleNavigation('likedPosts')}
            className="w-full text-left text-lg hover:bg-blue-600 p-3 rounded-lg transition duration-300 flex items-center space-x-3"
          >
            <FaHeart className="text-xl" />
            <span>Liked Posts</span>
          </button>

          <button
            onClick={() => handleNavigation('analytics')}
            className="w-full text-left text-lg hover:bg-blue-600 p-3 rounded-lg transition duration-300 flex items-center space-x-3"
          >
            <FaChartLine className="text-xl" />
            <span>Analytics</span>
          </button>

          <button
            onClick={() => handleNavigation('settings')}
            className="w-full text-left text-lg hover:bg-blue-600 p-3 rounded-lg transition duration-300 flex items-center space-x-3"
          >
            <FaCogs className="text-xl" />
            <span>Settings</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left text-lg hover:bg-blue-600 p-3 rounded-lg transition duration-300 flex items-center space-x-3"
          >
            <FaSignOutAlt className="text-xl" />
            <span>Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">
          {selectedContent === 'posts' && 'Your Posts'}
          {selectedContent === 'likedPosts' && 'Liked Posts'}
          {selectedContent === 'analytics' && 'Analytics'}
          {selectedContent === 'settings' && 'Settings'}
        </h1>

        {/* Conditionally Render Content */}
        {selectedContent === 'posts' && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Your Posts</h2>
            <p className="text-lg text-blue-600">Manage your posts here.</p>
          </div>
        )}

        {selectedContent === 'likedPosts' && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Liked Posts</h2>
            <p className="text-lg text-blue-600">View posts you have liked.</p>
          </div>
        )}

        {selectedContent === 'analytics' && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Analytics</h2>
            <p className="text-lg text-blue-600">View insights and statistics.</p>
          </div>
        )}

        {selectedContent === 'settings' && (
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p className="text-lg text-blue-600">Adjust your account settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}
