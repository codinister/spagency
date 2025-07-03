'use client';

import useGetQuery from '@/axios/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';
import {
  MdCameraOutdoor,
  MdOutlineBrandingWatermark,
  MdReadMore,
} from 'react-icons/md';
import { TfiPrinter } from 'react-icons/tfi';

const About = () => {
  const { data: sliderdata } = useGetQuery('slider', '/slider') || [];

  //SERVICES DATA
  const { data: serv } = useGetQuery('serv', '/services');
  const servdata = serv ? serv?.data : [];
  const serv1 = servdata[0];
  const serv2 = servdata[1];
  const serv3 = servdata[2];

  //ABOUT DATA
  const { data: abt } = useGetQuery('abt', '/about');
  const about = abt ? abt?.data : [];

  return (
    <section className="about-us">
      <div
        style={{
          backgroundImage: `url(${sliderdata?.data[0].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
        className="header"
      >
        <div className="page-title">
          <h1>About Us</h1>
          <h5>Home &gt; About Us</h5>
        </div>
      </div>

      <div>
        <div>
          <div>{about[0]?.excerpt}</div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${sliderdata?.data[1].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></div>
        </div>
      </div>

      <div className="container">
        <div>
          {sliderdata?.data ? (
            <>
              <Image
                src={sliderdata?.data[4].image}
                width="600"
                height="900"
                alt=""
              />
              <Image
                src={sliderdata?.data[3].image}
                width="600"
                height="450"
                alt=""
              />
            </>
          ) : (
            ''
          )}
        </div>

        <div>
          <h1>How we work</h1>

          <div className="how-we-work">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h4>Choose a Billboard Location</h4>
              <p>
                One of the most important steps in billboard advertising is
                choosing the right location. Where your billboard is placed can
                make the difference between being noticed by thousands or being
                missed entirely. The goal is to position your message where your
                target audience is most likely to see it — clearly, frequently,
                and with impact.
              </p>
            </div>
          </div>

          <div className="how-we-work">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h4>Get a Quote and Check Availability</h4>
              <p>
                After selecting your ideal billboard location, the next step is
                to get a quote and check availability. This stage ensures that
                the space you want is open for your desired dates and fits
                within your budget. It also helps you understand what is
                included in the rental and any additional services available.
              </p>
            </div>
          </div>

          <div className="how-we-work">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h4>Rent a billboard</h4>
              <p>
                Renting a billboard is one of the most powerful and proven
                methods of outdoor advertising. Whether you are promoting a
                product, service, event, or brand, billboard advertising
                guarantees high visibility and daily exposure to thousands of
                people. With strategic placement in high-traffic areas,
                billboards help you reach your target audience 24/7.
              </p>
            </div>
          </div>

          <div className="how-we-work">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h4>Submit your art work</h4>
              <p>
                Once you have successfully rented a billboard, the next
                important step is to submit your artwork. This is the design or
                visual message that will be displayed on the billboard for the
                public to see. Your artwork is the face of your campaign — it
                needs to be clear, eye-catching, and aligned with your brand or
                message.
              </p>
            </div>
          </div>

          <div className="how-we-work">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h4> Billboard Installation or Display Launch</h4>
              <p>
                After your design has been approved and finalized, the next
                exciting step is the billboard installation or display launch.
                This is where your campaign goes live and becomes visible to the
                public — turning your message into a powerful visual presence.
              </p>
            </div>
          </div>

          <div className="how-we-work">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h4> Monitoring & Maintenance</h4>
              <p>
                Once your billboard is live, the job isn’t over just yet.
                Ongoing monitoring and maintenance are essential to ensure your
                ad stays visible, clean, and effective throughout the campaign
                period. A well-maintained billboard not only protects your
                investment but also upholds the professional image of your
                brand.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div className="svg-icons">
              <TfiPrinter />
            </div>
            <h2>{serv1?.title}</h2>
            <p>{serv1?.excerpt}</p>
          </div>

          <div>
            <div>
              <div className="svg-icons">
                <MdCameraOutdoor />
              </div>
              <h2>{serv2?.title}</h2>
              <p>{serv2?.excerpt}</p>
            </div>
            <div>
              <div className="svg-icons">
                <MdOutlineBrandingWatermark />
              </div>
              <h2>{serv3?.title}</h2>
              <p>{serv3?.excerpt}</p>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              backgroundImage: `url(${sliderdata?.data[2].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
