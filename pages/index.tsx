import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import useScroll from 'hooks/useScroll';
import TokenBorn from "components/home/menu/TokenBorn";
import TokenSupport from "components/home/TokenSupport";
import SupportHomeCoin from "components/home/SupportHomeCoin";
import Homosa from "components/home/Homosa";
import Roadmap from "components/home/Roadmap";
import Backer from "components/home/Backer";

const Home: NextPage = () => {
  const title = "Homo";
  const desc = "One of the most effective investment platforms for investors. We create a hybrid platform to connect investors and skilled scholars in the world of \"Play to Earn\" gaming and metaverse.";
  const thumb = "https://lucis.network/assets/lucis_preview_169.jpg";
  useScroll()
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.pageContainer}>
      <Head>
        <link rel="icon" href="/assets/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="utf-8" />

        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta data-hid="image" itemProp="image" content={thumb} />

        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="application-name" content="Lucis Gaming Guild" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={thumb} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="773" />
        <meta property="og:image:height" content="435" />
        <meta property="og:image:alt" content="Lucis: How we work model" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://lucis.network/" />

        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <TokenBorn />
      <TokenSupport />
      <SupportHomeCoin />
      <Homosa />
      <Roadmap />
      <Backer />
      {/*<AnimWhenVisible>*/}
      {/*  <Backer />*/}
      {/*</AnimWhenVisible>*/}
      {showButton && (
        <button onClick={scrollToTop} className="btn-scrollTop">
          &#8679;
        </button>
      )}
    </div>
  );
};

export default Home;
