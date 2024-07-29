import Link from 'next/link';

type BOX = {
  title: string;
  excerpt: string;
  btn1_name?: string;
  btn2_name?: string;
  btn1_link?: string;
  btn2_link?: string;
};

const Excerptox = ({
  title,
  excerpt,
  btn1_name = '',
  btn2_name = '',
  btn1_link = '',
  btn2_link = '',
}: BOX) => {
  return (
    <div className="excerptbox">
      <h2>{title.toUpperCase()}</h2>
      <div>{excerpt}</div>
      <div>
        {btn1_name ? <Link href={btn1_link}>{btn1_name}</Link> : ''}
        {btn2_name ? <Link href={btn2_link}>{btn2_name}</Link> : ''}
      </div>
    </div>
  );
};

export default Excerptox;
