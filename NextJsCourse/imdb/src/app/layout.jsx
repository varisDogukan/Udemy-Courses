import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import './globals.css';
import Providers from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="width-[95%] max-w-6xl mx-auto">
            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar />

            {/* SearchBox */}
            <SearchBox />

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
