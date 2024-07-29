type Obj = {
  title: string;
  text: string;
  fa: string;
};

const Contbox = ({ title, text, fa }: Obj) => {
  return (
    <div className="contbox">
      <i className={`fa fa-${fa}`}></i>
      <h3>{title}</h3>
      <div>{text}</div>
    </div>
  );
};

export default Contbox;
