'use client';
import useGetQuery from '@/axios/useGetQuery';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Clients = () => {
  type CL = {
    image: string;
  }[];
  const { data: client } = useGetQuery('client', '/clients');
  const clients: CL = client ? client?.data : [];

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => e.preventDefault();




  const items = clients.map((v, k) => {
          return (
            <div
            className="clients-thumbs"
            onDragStart={handleDragStart} role="presentation"
              key={k}
              style={{
                backgroundImage: `url(${v.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></div>
          );
        })

  return (
    <div className="carousel-wrapper">
      <AliceCarousel
      autoWidth={true}
      disableDotsControls={true}
      mouseTracking items={items} />
    </div>
  );
};

export default Clients;
