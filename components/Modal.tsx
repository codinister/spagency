import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalType = {
  image: string;
  actionFn: (value: string) => void;
  value: string;
};

const Modal = ({ image, actionFn, value }: ModalType) => {
  const [pageReady, setPageready] = useState(false);

  useEffect(() => {
    setPageready(true);
  }, []);

  return pageReady
    ? createPortal(
        <>
          <div className={`modaloverlay ${value}`} onClick={()=> actionFn('hide')}></div>
          <div
            className={`modalinner ${value}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></div>
        </>,
        document.querySelector('body') as HTMLElement
      )
    : '';
};

export default Modal;
