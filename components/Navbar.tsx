import hamburgerIcon from '../public/icons/hamburger.svg';
import logo from '../public/logo.svg';
import Image from 'next/image';
export default function Navbar() {
  return (
    <div className='p-8 flex justify-between items-center'>
      <Image src={logo} alt='logo' />
      <div>
        <Image src={hamburgerIcon} alt='hamburger icon' />
      </div>
    </div>
  );
}
