type Obj = {
  img: string;
  title: string;
  handleClick: (e: any)=> void
};

const Productscard = ({ img, title, handleClick}: Obj) => {
  console.log(title)
  return (
    <div className="prod-card">
      <div
    
    data-img={img}
    onClick={handleClick}

        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          cursor: 'pointer',
          height: '20rem'
        }}
      ></div>

      <h3 style={{
        textAlign: 'center', 
        padding: '2rem',
        color: 'black'
      }}>{title}</h3>
    </div>
  );
};

export default Productscard;
