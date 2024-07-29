import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import useGetQuery from '@/axios/useGetQuery';

const Slider = () => {
  type SLD = {
    image: string;
  }[];

  const { data } = useGetQuery('slider', '/slider');
  const slide: SLD = data ? data?.data : [];

  type GRC = {
    img: string;
  }[];

  const imgs = slide.map((v) => v.image);


  const images = [
    {
      url: imgs[0],
    },
    {
      url: imgs[1],
    },
    {
      url: imgs[2],
    },
  ];

  function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    } else {
      return {
        width: 1500,
        height: 600,
      };
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const SLIDER_WIDTH = `1500`;
  const SLIDER_HEIGHT = windowDimensions?.width < 500 ? '200' : '600';

  return (
    <div className="slide-container">
      <Slide>
        {images.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <Image
              priority
              width={SLIDER_WIDTH}
              height={SLIDER_HEIGHT}
              className="slider"
              alt=""
              src={fadeImage.url}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
