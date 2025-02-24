'use client';
import { useState } from 'react';
import Link from 'next/link';

const posts = [
  { id: 1, title: 'Innovating in Web3', price: '0.2 ETH', category: 'Development', image: '/path-to-image1.jpg' },
  { id: 2, title: 'Building dApps', price: '0.1 ETH', category: 'Development', image: '/path-to-image2.jpg' },
  { id: 3, title: 'NFT Art Showcase', price: '0.5 ETH', category: 'Art', image: '/path-to-image3.jpg' },
  { id: 4, title: 'Smart Contract Development', price: '0.3 ETH', category: 'Development', image: '/path-to-image4.jpg' },
  { id: 5, title: 'Web3 Design Innovations', price: '0.15 ETH', category: 'Design', image: '/path-to-image5.jpg' },
];

const categories = ['All', 'Development', 'Art', 'Design'];

export default function Posts() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceOrder, setSelectedPriceOrder] = useState<'asc' | 'desc'>('asc');

  // Filter posts by category
  const filteredPosts = posts.filter((post) => {
    return selectedCategory === 'All' || post.category === selectedCategory;
  });

  // Sort posts by price (ascending or descending)
  const sortedPosts = filteredPosts.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return selectedPriceOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

  return (
    <div className=" mx-auto p-6">
      <h1 className="text-3xl font-bold mx-10 mb-6">Latest Posts</h1>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between mb-6 gap-6">
        {/* Category Filter */}
        <div className="flex gap-4 mx-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              } hover:bg-blue-500 hover:text-white transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Price Filter (Dropdown) */}
        <div className="flex gap-4">
          <select
            value={selectedPriceOrder}
            onChange={(e) => setSelectedPriceOrder(e.target.value as 'asc' | 'desc')}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white transition"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Post Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200">
            {/* Image */}
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />

            {/* Post Details */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
                <p className="text-xl text-blue-600">Price: {post.price}</p>
                <p className="text-sm text-gray-600">Category: {post.category}</p>

              <Link href={`/post/${post.id}`}>
                <button className="mt-4 text-white bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  View Details
                </button>
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
