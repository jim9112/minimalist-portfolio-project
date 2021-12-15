import heroImage from '../public/homepage/desktop/image-homepage-hero@2x.jpg';
import Image from 'next/image';
import downArrowsIcon from '../public/icons/down-arrows.svg';
export default function HeroHome() {
  return (
    <div className='relative'>
      <div className='h-[271px] md:h-[666px] overflow-hidden relative'>
        <Image
          src={heroImage}
          alt='hero image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='bg-secondary-very-light-grey md:w-[514px] md:absolute md:bottom-[0px] z-10'>
        <div className='py-6 md:py-14 md:pr-28'>
          <p className='font-heading font-bold text-4xl text-primary-greyish-blue'>
            Hey, I’m James and I love building beautiful websites
          </p>
        </div>
        <button className='bg-primary-dark-blue flex w-[200px] h-12'>
          <div className='bg-black w-12 flex place-content-center place-items-center'>
            <div>
              <Image src={downArrowsIcon} alt='arrows pointing down' />
            </div>
          </div>
          <div className='w-full h-full flex place-items-center place-content-center'>
            <p className='font-body text-secondary-very-light-grey text-xs'>
              ABOUT ME
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
