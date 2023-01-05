import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            เรียน คอม
          </Link>
        </div>
      </div>
    </header>
  );
}



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.main}>
        <div className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className={styles.bannerContainer}>
            <img 
              src="https://cdn.discordapp.com/attachments/986230290487848971/1060214521861521528/1121-m0014-m007-m050-m008-gaming-pcs-and-laptops-guide-as274382882.jpg" 
              className={styles.img} 
              alt="Banner Image">
            </img>
          </div>
          <HomepageFeatures/>
        </div>
      </main>
    </Layout>
  );
}
