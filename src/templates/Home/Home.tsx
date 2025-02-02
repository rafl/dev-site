import PropTypes from 'prop-types';
import React from 'react';
import {
  FaBookOpen as ViewDocsIcon,
  FaRocket as QuickstartIcon,
  FaUserCheck as SignUpIcon,
} from 'react-icons/fa';

import Layout from '../../components/Layout/Layout';
import LinkButton from '../../components/LinkButton';
import {
  a as A,
  LinkGroupCard,
} from '../../components/Mdx';
import Product from './Product';
import { IHomeContext } from './query';

import * as styles from './Home.module.scss';

const queryString = '?lang=en';

interface IHome {
  pageContext: IHomeContext;
}

const Home: React.FC<IHome> = (props) => {
  const { pageContext } = props;
  const { frontmatter } = pageContext;
  const { description, keywords, title } = frontmatter;

  return (
    <Layout
      className={styles.layout}
      description={description}
      hasSidebar={false}
      keywords={keywords}
      title={title}
    >
      <div
        className={styles.callout}
      >
        <h1
          className={styles.calloutHeading}
        >
          <span
            aria-label="waving hand"
            role="img"
          >
            👋
          </span>
          {' '}
          Welcome to the
          {' '}
          <span
            className={styles.noWrap}
          >
            MaxMind Developer Portal
          </span>
          !
        </h1>
        <h2
          className={styles.calloutSubheading}
        >
          Develop applications using industry-leading
          {' '}
          <span
            className={styles.noWrap}
          >
            IP intelligence and risk scoring.
          </span>
        </h2>
      </div>
      <div
        className={styles.products}
      >
        <Product
          family="minfraud"
          footer={(
            <>
              Learn more about
              {' '}
              <A
                href="https://www.maxmind.com/en/solutions/minfraud-services"
              >
                minFraud Web Services
              </A>
              .
            </>
          )}
          heading="minFraud Web Services"
          icon="MinFraudIcon"
          links={(
            <>
              <LinkButton
                Icon={QuickstartIcon}
                text="Quickstart"
                to="/minfraud/evaluate-a-transaction"
              />
              <LinkButton
                Icon={ViewDocsIcon}
                text="View docs"
                to="/minfraud"
              />
            </>
          )}
          subheading="Transaction Risk API"
        >
          Use risk scoring and data to identify high-risk activity in
          e-commerce payments, platform user activity, incentivized traffic,
          and more.
        </Product>
        <Product
          family="geoip"
          footer={(
            <>
              Learn more about
              {' '}
              <A
                // eslint-disable-next-line max-len
                href="https://www.maxmind.com/en/geoip2-services-and-databases"
              >
                GeoIP2
              </A>
              {' '}
              and
              {' '}
              <A
                href={`/geoip/geolite2-free-geolocation-data?${queryString}`}
              >
                GeoLite2
              </A>
              .
            </>
          )}
          heading="GeoIP2 and GeoLite2"
          icon="GeoIPIcon"
          links={(
            <>
              <LinkButton
                Icon={QuickstartIcon}
                text="Quickstart"
                to="/geoip/geolocate-an-ip"
              />
              <LinkButton
                Icon={ViewDocsIcon}
                text="View docs"
                to="/geoip"
              />
            </>
          )}
          subheading="Databases and Web Services"
        >
          Use GeoIP intelligence for content customization, advertising,
          digital rights management, compliance, fraud detection, security and
          more.
        </Product>
      </div>
      <div
        className={styles.signUp}
      >
        <LinkGroupCard
          heading="Sign up for a GeoLite2 account
            to get free IP geolocation data."
          icon={SignUpIcon}
          to="https://www.maxmind.com/en/geolite2/signup"
        />
      </div>
    </Layout>
  );
};

Home.propTypes = {
  pageContext: PropTypes.any,
};

export default Home;
