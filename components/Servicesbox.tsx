import useGetQuery from '@/axios/useGetQuery';
import Servcard from './Servcard';

const Servicesbox = () => {
  //SERVICES DATA
  const { data: serv } = useGetQuery('serv', '/services');
  const servdata = serv ? serv?.data : [];
  const serv1 = servdata[0];
  const serv2 = servdata[1];
  const serv3 = servdata[2];

  return (
    <div className="container">
      <Servcard heading={serv1?.title} fa="picture-o" text={serv1?.excerpt} />

      <Servcard heading={serv2?.title} fa="newspaper-o" text={serv2?.excerpt} />

      <Servcard heading={serv3?.title} fa="id-card-o" text={serv3?.excerpt} />
    </div>
  );
};

export default Servicesbox;
