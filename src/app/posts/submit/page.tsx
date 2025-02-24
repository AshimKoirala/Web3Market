import Link from 'next/link';

const posts = [
  { id: 1, title: 'Innovating in Web3', price: '0.2 ETH' },
  { id: 2, title: 'Building dApps', price: '0.1 ETH' },
  { id: 3, title: 'NFT Art Showcase', price: '0.5 ETH' },
];

export default function Posts() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-xl text-blue-600">Price: {post.price}</p>
            <Link href={`/post/${post.id}`}>
              <button className="mt-4 text-white bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
