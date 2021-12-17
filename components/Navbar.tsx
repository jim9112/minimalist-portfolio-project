import hamburgerIcon from '../public/icons/hamburger.svg';
import logo from '../public/logo.svg';
import Image from 'next/image';
export default function Navbar() {
  return (
    <div className='p-8 flex justify-between items-center'>
      <Image src={logo} alt='logo' />
      <div className='md:hidden'>
        <Image src={hamburgerIcon} alt='hamburger icon' />
      </div>

      <ul className='hidden md:flex gap-x-10 font-body text-xs text-primary-greyish-blue'>
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>CONTACT ME</li>
      </ul>
    </div>
  );
}
