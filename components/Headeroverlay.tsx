type TT = {
  title: string;
  caption: string;
};

const Headeroverlay = ({ title, caption }: TT) => {
  return (
    <div className="headeroverlay">
      <div>
        <h1 className="header_h1">{title}</h1>
        <h4 className="header_h2">{caption}</h4>
      </div>
    </div>
  );
};

export default Headeroverlay;
