'use client';

import useGetQuery from '@/axios/useGetQuery';
import Modal from '@/components/Modal';
import { useState } from 'react';

const Products = () => {
  const { data: sliderdata } = useGetQuery('slider', '/slider') || [];

  const [modalvalue, setModalvalue] = useState('hide');
  const [modalimg, setModalimg] = useState('');
  const modalFn = (value: string) => {
    setModalvalue(value);
  };

  //NEW BOARDS
  type ProductsType = {
    title: string;
    image: string;
  }[];

  const { data: board } = useGetQuery('products', '/products');
  const boards: ProductsType = board ? board?.data : [];


  return (
    <>
      <section className="products">
        <div
          className="header"
          style={{
            backgroundImage: `url(${sliderdata?.data[2].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div className="page-title">
            <h1>Products</h1>
            <h5>Home &gt; Products</h5>
          </div>
        </div>

        <div className="product-gallery">
          <div>
            <div
              onClick={() => {
                modalFn('show');
                setModalimg(boards[0]?.image);
              }}
              style={{
                backgroundImage: `url(${boards[0]?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            >
              <h2>{boards[0]?.title}</h2>
            </div>
          </div>

          <div>
            <div>
              <div>
                <div
                  onClick={() => {
                    modalFn('show');
                    setModalimg(boards[1]?.image);
                  }}
                  style={{
                    backgroundImage: `url(${boards[1]?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                >
                  <h2>{boards[1]?.title}</h2>
                </div>
              </div>

              <div>
                <div
                  onClick={() => {
                    modalFn('show');
                    setModalimg(boards[2]?.image);
                  }}
                  style={{
                    backgroundImage: `url(${boards[2]?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                >
                  <h2>{boards[2]?.title}</h2>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div
                  onClick={() => {
                    modalFn('show');
                    setModalimg(boards[3]?.image);
                  }}
                  style={{
                    backgroundImage: `url(${boards[3]?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                >
                  <h2>{boards[3]?.title}</h2>
                </div>
              </div>
              <div>
                <div
                  onClick={() => {
                    modalFn('show');
                    setModalimg(boards[4]?.image);
                  }}
                  style={{
                    backgroundImage: `url(${boards[4]?.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                >
                  <h2>{boards[4]?.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal image={modalimg} actionFn={modalFn} value={modalvalue} />
    </>
  );
};

export default Products;
