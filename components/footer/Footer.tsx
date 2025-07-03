'use client'

import useGetQuery from '@/axios/useGetQuery';
import { LuPhone } from 'react-icons/lu';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { IoMdBook } from 'react-icons/io';

const Footer = () => {
  //SETTINGS  DATA
  const { data } = useGetQuery('setti', '/settings');
  type SETTINS = {
    comp_email: string;
    comp_location: string;
    comp_name: string;
    comp_phone: string;
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
  const sett: SETTINS = data ? data?.data[0] : [];

  //ABOUT DATA
  const { data: abt } = useGetQuery('abt', '/about');
  const about = abt ? abt?.data : [];

  const aboutexcerpt = about[1]?.excerpt.slice(0, 100);

  return (
    <footer>
      <div>
        <div>
          <h4>Still Have Questions?</h4>
          <p>
            Contact us today and get all your questions answered without delay
          </p>
          <Link href="/">
            <span>Contact Us</span>
            <LuPhone />
          </Link>
        </div>
      </div>

      <div>
        <div className="container">
          <div>
            <h4>About Us</h4> 
            <p>{aboutexcerpt}</p>
            <Link href="/about">
              <span>About Us</span>
              <IoMdBook />
            </Link>
          </div>

          <div>
            <h4>Quick Links</h4>

            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <IoLocationOutline />
                <span>{sett?.comp_location}</span>
              </li>
              <li>
                <LuPhone />
                <span>{sett?.comp_phone}</span>
              </li>

              <li>
                <a href={sett?.facebook} target="_blank">
                  <FaSquareFacebook />
                </a>
                <a href={sett?.instagram} target="_blank">
                  <FaInstagram />
                </a>
                <a href={sett?.twitter} target="_blank">
                  <BsTwitterX />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          Copyrigt &copy; 2023 {sett?.comp_name} Design by Codenester
        </div>
      </div>
    </footer>
  );
};

export default Footer;
