import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold">Project Details: {slug}</h1>
      <p className="mt-4 text-lg text-center text-gray-600">Here is all the information about the selected project.</p>
    </div>
  );
}
