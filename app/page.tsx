'use client';

import useGetQuery from '@/axios/useGetQuery';
import Card from '@/components/Card';
import Excerptox from '@/components/Excerptox';
import Headeroverlay from '@/components/Headeroverlay';
import Modal from '@/components/Modal';
import Youtubebox from '@/components/Youtubebox';
import Slider from '@/components/home/Slider';
import { useEffect, useState } from 'react';

export default function Home() {
  const [openmodal, setOpenmodal] = useState(false);
  const [getImg, setImg] = useState('');

  useEffect(() => {
    if (openmodal) {
      document.body.style.overflow = 'hidden';
    }
  }, [openmodal]);

  //SETTINGS  DATA
  const { data } = useGetQuery('setti', '/settings');
  type SETTINS = {
    comp_email: string;
    comp_location: string;
    comp_name: string;
    youtube: string;
  };
  const sett: SETTINS = data ? data?.data[0] : [];

  //SERVICES DATA
  const { data: serv } = useGetQuery('serv', '/services');
  const servdata = serv ? serv?.data : [];
  const serv1 = servdata[0];
  const serv2 = servdata[1];
  const serv3 = servdata[2];

  //ABOUT DATA
  const { data: abt } = useGetQuery('abt', '/about');
  const about = abt ? abt?.data : [];

  //NEW BOARDS
  type GALLERY = {
    _id: string;
    image: string;
  }[];
  
  const { data: board } = useGetQuery('newb', '/newboards');
  const boards: GALLERY = board ? board?.data : [];
  const gallery = boards.map((v) => ({ img: v.image })).slice(0, 7);

  const singleimg = gallery.splice(0, 1);

  const handleClick = (e: any) => {
    e.preventDefault();
    const img = e.target.dataset.img;
    setImg(img);
    setOpenmodal(true);
  };

  const services = [
    {
      _id: serv1?._id,
      fa: 'picture-o',
      title: serv1?.title,
      excerpt: serv1?.excerpt,
      link: '/services',
      linktext: 'Learn more',
    },
    {
      _id: serv2?._id,
      fa: 'newspaper-o',
      title: serv2?.title,
      excerpt: serv2?.excerpt,
      link: '/services',
      linktext: 'Learn more',
    },
    {
      _id: serv3?._id,
      fa: 'id-card-o',
      title: serv3?.title,
      excerpt: serv3?.excerpt,
      link: '/services',
      linktext: 'Learn more',
    },
  ];

  return (
    <>
      <Modal img={getImg} openmodal={openmodal} setOpenmodal={setOpenmodal} />

      <section className="header">
        <div>
          <Slider />
        </div>
        <Headeroverlay
          title={sett?.comp_name?.toUpperCase()}
          caption="Give your business the presence it deserves with S.P AGENCY"
        />
      </section>

      <section className="sec2">
        <div>
          {services.map(({ fa, title, excerpt, link, linktext }, k) => (
            <Card
              key={k}
              fa={fa}
              title={title}
              excerpt={excerpt}
              link={link}
              linktext={linktext}
            />
          ))}
        </div>

        <div className="container">
          
          <Excerptox
            title="About us"
            excerpt={about[1]?.excerpt}
            btn1_name="Contact us"
            btn2_name="Learn more"
            btn1_link="/connect"
            btn2_link="/about"
          />

          <Youtubebox url={sett?.youtube} />
        </div>
      </section>

      <section className="sec3">
        <div className="container">
          <div>
            <h2>{about[0]?.title}</h2>

            <div>{about[0]?.excerpt}</div>
          </div>
        </div>
      </section>

      <section className="sec4">
        <h2>OUR WORKS</h2>
        <div className="container">
          <div
            data-img={singleimg[0]?.img}
            onClick={handleClick}
            className="bigimg"
            style={{
              backgroundImage: `url(${singleimg[0]?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '40rem',
              cursor: 'pointer',
            }}
          ></div>
          <div>
            {Object.values(gallery).map((v, k) => {
              return (
                <div
                  data-img={v.img}
                  onClick={handleClick}
                  key={k}
                  style={{
                    backgroundImage: `url(${v.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    width: '100%',
                    height: '19.6rem',
                    cursor: 'pointer',
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
