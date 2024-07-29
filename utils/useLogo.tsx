import Image from 'next/image';

type LG = (w: number, h: number) => React.ReactNode;

const useLogo: LG = (w, h) => {
  return <Image src="/logo.png" alt="Logo" width={w} height={h} />;
};

export default useLogo;
