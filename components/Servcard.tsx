type Obj = {
  heading: string;
  fa: string;
  text: string;
};
const Servcard = ({ heading, fa, text }: Obj) => {
  return (
    <div className="servcard">
      <i className={`fa fa-${fa}`}></i>
      <h2>{heading}</h2>
      <div className="divide"></div>
      <div>{text}</div>
    </div>
  );
};

export default Servcard;
