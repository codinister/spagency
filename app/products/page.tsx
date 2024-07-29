'use client';

import Pageheader from '@/components/Pageheader';
import Imagebg from '@/components/Imagebg';
import Productscard from '@/components/Productscard';
import Modal from '@/components/Modal';
import { useState, useEffect } from 'react';
import useGetQuery from '@/axios/useGetQuery';
import Aboutbox from '@/components/Aboutbox';

const About = () => {
  type PRO = {
    title: string;
    image: string;
  }[];
  const { data } = useGetQuery('prod', '/products');

  const products: PRO = data ? data?.data : [];

  const [getImg, setImg] = useState('');
  const [openmodal, setOpenmodal] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    const img = e.target.dataset.img;
    setImg(img);
    setOpenmodal(true);
  };

  useEffect(() => {
    if (openmodal) {
      document.body.style.overflow = 'hidden';
    }
  }, [openmodal]);

  console.log(products);

  return (
    <>
      <Modal img={getImg} openmodal={openmodal} setOpenmodal={setOpenmodal} />
      <Pageheader h1="PRODUCTS" h4="The different types of products we have" />

      <section className="products">
        <div className="container">
          {products.map((v, k) => (
            <Productscard
              key={k}
              img={v.image}
              handleClick={handleClick}
              title={v.title}
            />
          ))}
        </div>
      </section>

      <Imagebg />

      <Aboutbox />
    </>
  );
};

export default About;
