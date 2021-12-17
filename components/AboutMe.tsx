import Image from 'next/image';
import profilePic from '../public/homepage/desktop/image-homepage-profile@2x.jpg';

export default function AboutMe() {
  return (
    <div className='pt-24 divide-y-2 md:divide-y-0 divide-secondary-light-grey md:flex md:justify-between'>
      <div className='pb-8 md:pb-0 md:w-56 relative'>
        <Image
          src={profilePic}
          alt='profile picture'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='text-primary-greyish-blue flex flex-col gap-7 pt-8 md:pt-0 md:w-[339px]'>
        <div className='hidden w-full h-[2px] mb-8 bg-secondary-light-grey md:block'></div>
        <h1 className='font-heading font-bold text-4xl'>About Me</h1>
        <p className='font-body text-base'>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in Wilton, NH, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <button className='border-2 border-primary-greyish-blue w-[200px] h-12 font-body text-xs'>
          GO TO PORTFOLIO
        </button>
        <div className='hidden w-full h-[2px] mt-8 bg-secondary-light-grey md:block'></div>
      </div>
    </div>
  );
}
