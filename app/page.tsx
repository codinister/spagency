'use client';
import useGetQuery from '@/axios/useGetQuery';
import Link from 'next/link';
import { MdReadMore } from 'react-icons/md';
import { TfiPrinter } from 'react-icons/tfi';
import { MdCameraOutdoor } from 'react-icons/md';
import { MdOutlineBrandingWatermark } from 'react-icons/md';
import Youtubebox from '@/components/Youtubebox';
import Modal from '@/components/Modal';
import { useState } from 'react';
import Clients from '@/components/Clients';

export default function Home() {
  const { data: sliderdata } = useGetQuery('slider', '/slider') || [];

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
  const gallery = boards?.map((v) => ({ img: v.image })).slice(0, 7);

  const [modalvalue, setModalvalue] = useState('hide');
  const [modalimg, setModalimg] = useState('');
  const modalFn = (value: string) => {
    setModalvalue(value);
  };

  return (
    <>
      <section
        className="header"
        style={{
          backgroundImage: `url(${sliderdata?.data[2].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <h4>
          Give your business the presence it deserves with{' '}
          <span>S.P AGENCY</span>
        </h4>
      </section>

      <section className="sec2">
        <div className="container">
          <div>
            <div className="svg-icons">
              <TfiPrinter />
            </div>
            <h2>{serv1?.title}</h2>
            <p>{serv1?.excerpt}</p>
            <Link href="/about">
              Learn more <MdReadMore />
            </Link>
          </div>
          <div>
            <div>
              <div className="svg-icons">
                <MdCameraOutdoor />
              </div>
              <h2>{serv2?.title}</h2>
              <p>{serv2?.excerpt}</p>
              <Link href="/about">
                Learn more <MdReadMore />
              </Link>
            </div>
            <div>
              <div className="svg-icons">
                <MdOutlineBrandingWatermark />
              </div>
              <h2>{serv3?.title}</h2>
              <p>{serv3?.excerpt}</p>
              <Link href="/about">
                Learn more <MdReadMore />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec3">
        <h5>WE CAN BE TRUSTED</h5>
        <h2>{about[0]?.title}</h2>

        <div className="container">
          <div>
            <Youtubebox url={sett?.youtube} />
          </div>
          <div>
            <h4>About Us</h4>
            <div>{about[0]?.excerpt}</div>
          </div>
        </div>

        <div className="container">
          <div>
            <h1>1200</h1>
            <h5>Satisfied clients</h5>
          </div>
          <div>
            <h1>500+</h1>
            <h5>Billboards</h5>
          </div>
          <div>
            <h1>100+</h1>
            <h5>Workers</h5>
          </div>
        </div>

        <div className="container">
          <Clients />
        </div>
      </section>

      <section className="sec4">
        <div>
          <div
            onClick={() => {
              modalFn('show');
              setModalimg(gallery[0]?.img);
            }}
            style={{
              backgroundImage: `url(${gallery[0]?.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(gallery[6]?.img);
                }}
                style={{
                  backgroundImage: `url(${gallery[6]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
            </div>

            <div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(gallery[2]?.img);
                }}
                style={{
                  backgroundImage: `url(${gallery[2]?.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
            </div>
          </div>

          <div>
            <div
              onClick={() => {
                modalFn('show');
                setModalimg(gallery[5]?.img);
              }}
              style={{
                backgroundImage: `url(${gallery[5]?.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></div>
          </div>
        </div>
      </section>

      <Modal image={modalimg} actionFn={modalFn} value={modalvalue} />
    </>
  );
}
