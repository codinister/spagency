import Footer from './footer/Footer';
import Nav from './nav/Nav';

type CH = {
  children: React.ReactNode;
};
const Wrapper = ({ children }: CH) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
