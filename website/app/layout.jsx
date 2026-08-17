import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Swaati Enterprises - Construction Chemical & Engineering Solutions',
  description: 'Trusted partner for Waterproofing Systems, Concrete Admixtures, Epoxy Flooring, Structural Repair and Industrial Solutions.',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    images: ['/images/se-logo.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full">
        <div className="app-wrapper bg-white" id="app">
          <TopBar />
          <Navbar />
          <main id="pageContent">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
