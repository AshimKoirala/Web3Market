import { useRouter } from 'next/router';

const posts = [
  { id: 1, title: 'Innovating in Web3', description: 'How Web3 is changing the way we interact with the web.', price: '0.2 ETH' },
  { id: 2, title: 'Building dApps', description: 'A deep dive into building decentralized apps for the future.', price: '0.1 ETH' },
  { id: 3, title: 'NFT Art Showcase', description: 'Exploring the world of NFTs and how artists are showcasing their work.', price: '0.5 ETH' },
];

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-xl text-blue-600">Price: {post.price}</p>
      <p className="mt-4">{post.description}</p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200">
        Hire Creator
      </button>
    </div>
  );
}
