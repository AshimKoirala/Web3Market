export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">Have any questions or feedback? Reach out to us through the form below:</p>
      {/* Mock contact form */}
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md" />
        <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-md" rows={4}></textarea>
        <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-500 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
