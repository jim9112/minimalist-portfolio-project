import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className='px-8 py-20 flex flex-col gap-8 items-center'>
        <h1 className='text-primary-greyish-blue font-heading font-bold text-4xl'>
          Interested in doing a project together?
        </h1>
        <button className='border-2 border-primary-greyish-blue px-8 w-max h-12 font-body text-xs'>
          CONTACT ME
        </button>
      </div>
      <footer className='bg-primary-greyish-blue text-secondary-very-light-grey flex flex-col items-center'>
        <ul className='font-body text-xs'>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>CONTACT ME</li>
        </ul>
      </footer>
    </div>
  );
}
