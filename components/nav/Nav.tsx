'use client'

import Image from 'next/image';
import useLink from '@/utils/useLink';
import useLogo from '@/utils/useLogo';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [show, setShow] = useState('hide');

  const showBox = () => setShow('show');
  const hideBox = () => setShow('hide');

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const y = Math.floor(window.scrollY);

    if (y > 100) {
      document.querySelector('.navbar')?.classList.add('show');
    } else {
      document.querySelector('.navbar')?.classList.remove('show');
    }
  };

  return (
    <nav className="navbar">

      <div className={`container ${show}`}>
        <div className="logobx">
          {useLogo(100, 70)}
        </div>
        <div className={show ? 'navlinks show' : 'navlinks'}>
          <ul>
            {useLink('Home', '/', hideBox)}
            {useLink('About', '/about', hideBox)}
            {useLink('Products', '/products', hideBox)}
            {useLink('Contact', '/contact', hideBox)}
          </ul>
        </div>
      </div>

      <div
        className={`navoverlay ${show}`}
        onClick={hideBox}
      ></div>

      <div className="hamburger">
        <Image
          src="/hamburger.jpg"
          alt=""
          onClick={showBox}
          width="20"
          height="20"
        />

        <h4>S.P Agency</h4>
      </div>

    </nav>
  );
};

export default Nav;
