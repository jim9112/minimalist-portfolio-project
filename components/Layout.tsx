import type { ReactElement } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div className='bg-secondary-very-light-grey min-h-screen'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
