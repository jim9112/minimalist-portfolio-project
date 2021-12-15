import Image from 'next/image';
import githubIcon from '../public/icons/github.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import twitterIcon from '../public/icons/twitter.svg';
import logoWhite from '../public/logo-white.svg';

export default function Footer() {
  return (
    <div>
      <div className='px-8 pt-10'>
        <div className=' pb-20 pt-28 flex flex-col gap-8 items-center border-t-2 border-secondary-light-grey'>
          <h1 className='text-primary-greyish-blue font-heading font-bold text-4xl'>
            Interested in doing a project together?
          </h1>
          <button className='border-2 border-primary-greyish-blue px-8 w-max h-12 font-body text-xs'>
            CONTACT ME
          </button>
        </div>
      </div>
      <footer className='bg-primary-greyish-blue text-secondary-very-light-grey flex flex-col items-center py-14 gap-10'>
        <div>
          <Image src={logoWhite} alt='logo' />
        </div>
        <ul className='font-body text-xs text-center flex flex-col gap-y-8'>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>CONTACT ME</li>
        </ul>
        <div className='flex gap-x-8'>
          <Image src={githubIcon} alt='github icon' />
          <Image src={twitterIcon} alt='twitter icon' />
          <Image src={linkedinIcon} alt='linked in icon' />
        </div>
      </footer>
    </div>
  );
}
