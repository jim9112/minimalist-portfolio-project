import Image from 'next/image';
import githubIcon from '../public/icons/github.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import twitterIcon from '../public/icons/twitter.svg';
import logoWhite from '../public/logo-white.svg';

export default function Footer() {
  return (
    <div>
      <div className='px-8 pt-10'>
        <div className=' pb-20 pt-28 flex flex-col md:flex-row gap-8 md:justify-between items-center border-t-2 md:border-t-0 border-secondary-light-grey'>
          <h1 className='text-primary-greyish-blue font-heading font-bold text-4xl md:w-80'>
            Interested in doing a project together?
          </h1>
          <div className='hidden h-[2px] w-[113px] bg-secondary-light-grey md:block'></div>
          <button className='border-2 border-primary-greyish-blue w-[162px] h-12 font-body text-xs'>
            CONTACT ME
          </button>
        </div>
      </div>
      <footer className='bg-primary-greyish-blue text-secondary-very-light-grey flex flex-col items-center py-14 md:py-4 gap-10 md:flex-row md:px-10 md:justify-between'>
        <div>
          <Image src={logoWhite} alt='logo' />
        </div>
        <ul className='font-body text-xs text-center flex flex-col md:flex-row gap-8'>
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
