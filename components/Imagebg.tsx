import Servicebox from './Servicebox';
import useGetQuery from '@/axios/useGetQuery';

const Imagebg = () => {
  //SERVICES DATA
  const { data: serv } = useGetQuery('serv', '/services');
  const servdata = serv ? serv?.data : [];
  const serv1 = servdata[0];
  const serv2 = servdata[1];
  const serv3 = servdata[2];

  return (
    <div className="imagebg">
      <div className="container">
        <Servicebox fa="picture-o" name={serv1?.title} />
        <Servicebox fa="newspaper-o" name={serv2?.title} />
        <Servicebox fa="id-card-o" name={serv3?.title} />
      </div>
    </div>
  );
};

export default Imagebg;
