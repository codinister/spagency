import useCopyright from '@/utils/useCopyright';
import useFooter from '@/utils/useFooter';
import useLogo from '@/utils/useLogo';
import useSocial from '@/utils/useSocial';
import useGetQuery from '@/axios/useGetQuery';

const Footer = () => {
  //SETTINGS  DATA
  const { data } = useGetQuery('setti', '/settings');
  type SETTINS = {
    comp_email: string;
    comp_location: string;
    comp_name: string;
    comp_phone: string;
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
  const sett: SETTINS = data ? data?.data[0] : [];

  //ABOUT DATA
  const { data: abt } = useGetQuery('abt', '/about');
  const about = abt ? abt?.data : [];

const aboutexcerpt = about[1]?.excerpt.slice(0,100)


  
  return (
    <footer>
      <div className="container">
        {useFooter('SERVICES', {
          ['Branding']: '/services',
          ['Large Format Printing']: '/services',
          ['Outdoor Advertising']: '/services',
        })}
        {useFooter('ABOUT', {
          [aboutexcerpt]:
            '/about',
        })}

        {useFooter('CONTACT', {
          [sett?.comp_location]: '/contact',
          [sett?.comp_email]: '/contact',
          [sett?.comp_phone]: '/contact',
        })}
      </div>

      <div>
        {useLogo(60, 50)}

        {useSocial({
          ['facebook']: `${sett?.facebook}`,
          ['twitter']: `${sett?.twitter}`,
          ['instagram']: `${sett?.instagram}`,
        })}

        {useCopyright({
          start_date: '2024-02-11',
          comp_name: 'S.P Agency',
        })}
      </div>
    </footer>
  );
};

export default Footer;
