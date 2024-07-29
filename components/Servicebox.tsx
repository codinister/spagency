type Obj = {
  name: string;
  fa: string;
};

const Servicebox = ({ name, fa }: Obj) => {
  return (
    <div className="servbx">
      <div>
        <i className={`fa fa-${fa}`}></i>
      </div>
      <div>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default Servicebox;
