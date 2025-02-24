import Footer from '@/components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Web3 Market',
  description: 'Showcase and Hire Innovators in Web3 in Web3 Market.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
