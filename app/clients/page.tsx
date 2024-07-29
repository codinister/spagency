
'use client'

import Pageheader from '@/components/Pageheader';
import Aboutbox from '@/components/Aboutbox';
import Servicesbox from '@/components/Servicesbox';
import useGetQuery from '@/axios/useGetQuery';

const Client = () => {
  type CL = {
    image: string
  }[]
  const {data} = useGetQuery('client', '/clients')
  const clients: CL = data ? data?.data : []


  return (
    <>
      <Pageheader h1="CLIENTS" h4="Those we work with" />

      <section className="clients">
        <div className="container">

{
clients.map((v,k) => (
  <div
  key={k}
  style={{
    backgroundImage: `url(${v.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
></div>
))

}
      



        </div>
      </section>


<Aboutbox /> 
<Servicesbox />



    </>
  );
};

export default Client
