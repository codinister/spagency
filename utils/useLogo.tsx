import Image from 'next/image';
import Link from 'next/link';

type LG = (w: number, h: number) => React.ReactNode;

const useLogo: LG = (w, h) => {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Logo" width={w} height={h} />
    </Link>
  );
};

export default useLogo;
