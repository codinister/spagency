type Obj = {
  h1: string;
  h4: string;
};

const Pageheader = ({ h1, h4 }: Obj) => {
  return (
    <div className="pageheader">
      <div className="container">
        <div>
          <h1>{h1}</h1>
          <h4>{h4}</h4>
        </div>
      </div>
    </div>
  );
};

export default Pageheader;
