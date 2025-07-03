'use client';

import useGetQuery from '@/axios/useGetQuery';
import Contactform from '@/components/Contactform';
import Map from '@/components/Map';
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  const { data: sliderdata } = useGetQuery('slider', '/slider') || [];

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
    googlemap: string;
    digitaladdress: string;
  };
  const sett: SETTINS = data ? data?.data[0] : [];

  return (
    <section className="contact-wrapper">
      <div
        style={{
          backgroundImage: `url(${sliderdata?.data[3].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
        className="header"
      >
        <div className="page-title">
          <h1>Contact Us</h1>
          <h5>Home &gt; Contact Us</h5>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div>
              <h1> Don&apos;t Be A Stranger Just Say Hello.</h1>
              <p>
                Get in touch with us we are your outdoor advertising partner our doors are always opened to you
              </p>
            </div>
            <Contactform />
          </div>
          <div>
            <div>
              <h4>Get Information</h4>
              <p>
                Our Contact information Details and Follow us on social media
              </p>
            </div>

            <div>
              <IoLocationOutline />
              <h4>Office Address</h4>
              <p>{sett?.comp_location}</p>
            </div>

            <div>
              <LuPhone />
              <h4>Phone Number</h4>
              <p>{sett?.comp_phone}</p>
            </div>

            <div>
              <MdOutlineEmail />
              <h4>Send Mail</h4>
              <p>{sett?.comp_email}</p>
            </div>

            <div>
              <FaLocationCrosshairs />
              <h4>Digital Address</h4>
              <p>{sett?.digitaladdress}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Map src={sett?.googlemap} width="100%" height="350pz" />
      </div>
    </section>
  );
};

export default Contact;
