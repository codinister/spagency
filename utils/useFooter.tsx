import Link from 'next/link';

type LN = (title: string, { ...rest }) => React.ReactNode;

const useFooter: LN = (title, { ...rest }) => {
  const items = Object.entries(rest).map(([name, link], k) => (
    <li key={k}>
      <Link href={link}>{name}</Link>
    </li>
  ));

  return (
    <div>
      <h4>{title}</h4>
      <ul>{items}</ul>
    </div>
  );
};

export default useFooter;
