'use client';

import Pageheader from '@/components/Pageheader';
import { useState, useEffect } from 'react';
import Contbox from '@/components/Contbox';
import Contactform from '@/components/Contactform';
import Map from '@/components/Map';
import useGetQuery from '@/axios/useGetQuery';

const Contact = () => {
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

  return (
    <>
      <Pageheader h1="CONTACT" h4="The different types of products we have" />

      <section className="contact">
        <div className="container">
          <Contbox title="PHONE" text={sett?.comp_phone} fa="phone" />
          <Contbox title="EMAIL" text={sett?.comp_email} fa="envelope" />
          <Contbox
            title="LOCATION"
            text={sett?.comp_location}
            fa="map-marker"
          />
        </div>

        <div className="contact-form-area">
          <div>
            <Contactform />
          </div>
          <div>
            <Map
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.4000144685817!2d-0.22318353539066738!3d5.596538332492256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b34cbfbfff1%3A0x50f6930e95a924a8!2sSP%20Agency%20Ghana!5e0!3m2!1sen!2sgh!4v1707925085853!5m2!1sen!2sgh"
              width="100%"
              height="500"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
