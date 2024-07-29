import Link from 'next/link';

const useSocial = ({ ...rest }) => {
  const items = Object.entries(rest).map(([fa, link], k) => (
    <a href={link} key={k} target="_blank">
      <i className={`fa fa-${fa} fa-lg`}>a</i>
    </a>
  ));

  return <div className="social-media">{items}</div>;
};

export default useSocial;
