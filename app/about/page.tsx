'use client';

import Pageheader from '@/components/Pageheader';
import Yellowbox from '@/components/Yellowbox';
import Servicesbox from '@/components/Servicesbox';
import useGetQuery from '@/axios/useGetQuery';
import BlockContents from '@/components/BlockContents';
import Aboutbox from '@/components/Aboutbox';

const About = () => {


  return (
    <>
      <Pageheader h1="ABOUT US" h4="Get to know us" />

      <Aboutbox />

      <Servicesbox />
    </>
  );
};

export default About;
