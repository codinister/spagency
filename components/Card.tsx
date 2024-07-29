import Link from 'next/link';

type CD = {
  fa: string;
  title: string;
  excerpt: string;
  link: string;
  linktext: string;
};

const Card = ({ fa, title, excerpt, link, linktext }: CD) => {
  return (
    <div className="card">
      <i className={`fa fa-lg fa-${fa}`}></i>
      <h3>{title}</h3>
      <div>{excerpt}</div>
      <Link href={link}>{linktext}</Link>
    </div>
  );
};

export default Card;
