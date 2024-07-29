type Obj = {
  img: string;
  para: string;
};
const Whitebox = ({ img, para }: Obj) => {
  return (
    <div className="whitebox">
      <div className="container">
      <div>{para}</div>
        <div
          style={{
            backgroundImage: `url('/${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'none',
            height: '40rem',
          }}
        ></div>
  
      </div>
    </div>
  );
};

export default Whitebox;
