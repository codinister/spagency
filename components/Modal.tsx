


import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type MD = {
  img: string;
  openmodal: boolean;
  setOpenmodal: Function;
};

const Modal = ({ img, openmodal, setOpenmodal }: MD) => {
  useEffect(() => {
    if (!openmodal) {

        document.body.style.overflow = 'scroll';
      
    }
  }, [openmodal]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setOpenmodal(false);
  };

  const output = openmodal ? (
    <div className="modal-overlay" onClick={handleClick}>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
 
        }}
      ></div>
    </div>
  ) : (
    ''
  );

  if (typeof window !== "undefined") {
    if(document.getElementById('modal')){
    return createPortal(output,document.getElementById('modal') as HTMLElement);
    }
  }

};

export default Modal;
