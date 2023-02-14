import Head from "next/head";
import styles from "../styles/Home.module.css";
import DarkModeToggle from "../components/DarkModeToggle";
import Footer from "../components/Footer/Footer";

const metaData = {
  pageTitle:
    "Dear Gbemi — Software Engineer, Content Creator, and Developer Advocate.",
  description:
    "Seunbayo is a Developer Advocate, a Web3 Advocate, and Community Engineer who currently lead the Developer Relations at Spheron",
  keywords:
    "Software Engineer, Content Creator, Developer Advocate, Web3 Advocate, Christian, Nigeria",
  previewImage: "/social.png",
  favicon: "/favicon.png",
  twitterHandle: "@seunbayong",
  url: "https://seunbayo.com",
  type: "website",
};

const {
  pageTitle,
  description,
  keywords,
  previewImage,
  favicon,
  twitterHandle,
  url,
  type,
} = metaData;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={pageTitle} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:type" content={type} key="ogtype" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        <link
          rel="preload"
          href="/fonts/RobotoMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href={favicon} />
      </Head>

      <DarkModeToggle />

      <main className={styles.main}>
        <h1 className={styles.title}>Dear Gbemi</h1>

        <p className={styles.description}>
          I am speechless but <br />
          <br />
        </p>
        <p className={styles.description}>WILL YOU DO VALENTINE WITH ME?</p>
        <h4 className={styles.title}>Be my VAL</h4>

        <div className={styles.grid}>
          <a href="https://seunbayo.hashnode.dev/" className={styles.card}>
            <h2>✍🏾 ö Serious</h2>
          </a>

          <a href="mailto: seunbayo83.com" className={styles.card}>
            <h2>💌 Yes i will</h2>
            <p>Click here</p>
          </a>
        </div>
      </main>

    </div>
  );
}
