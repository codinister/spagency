import useGetQuery from '@/axios/useGetQuery';
import Yellowbox from './Yellowbox';

const Aboutbox = () => {
  //ABOUT DATA
  const { data: abt } = useGetQuery('abt', '/about');
  const about = abt ? abt?.data : [];

  return <Yellowbox img={about[1]?.image} para={about[1]?.body} />;
};

export default Aboutbox;
