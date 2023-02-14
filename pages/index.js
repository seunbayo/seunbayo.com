import Head from "next/head";
import styles from "../styles/Home.module.css";
import DarkModeToggle from "../components/DarkModeToggle";
import Footer from "../components/Footer/Footer";

const metaData = {
  pageTitle:
    "Seunbayo — Software Engineer, Content Creator, and Developer Advocate.",
  description:
    "Seunbayo is a Software Developer, a Web3 Advocate who currently works as a Developer Advocate at Spheron",

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
        <h1 className={styles.title}>SEUNBAYO</h1>

        <p className={styles.description}>
          Hi 👋🏾 <br />
          <br />
          I'm a Software Engineer, Full Stack Soul Winner for Jesus Christ,
          Developer Advocate who currently manages Developer Relations at{" "}

          <a
            href="http://spheron.network/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spheron
          </a>

          . I'm intelligent thinker with a passion for tech education and
          outreach,web3 ecosystem, communities, FOSS. I love creating
          user-facing, engineering documentation, training materials, tutorials,
          and blog pieces. I ❤️ the{" "}

          <a
            href="https://biblehub.com/matthew/6-33.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            gospel of Jesus Christ
          </a>
          .
          <br />
          <br />I am also the Co-founder of Codeclan, Web3 Nation and at my
          spare time I create content (on my{" "}
          <a
            href="https://seunbayo.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>{" "}
          ,{" "}
          <a
            href="https://www.getrevue.co/profile/seunbayo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Newsletter
          </a>
          , and{" "}
          {/*  <a
            href="https://www.youtube.com/c/bolajiayodeji"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube)
          </a> */}
          build useful{" "}
          <a
            href="https://github.com/seunbayo"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source projects
          </a>
          , speak at some meetups/conferences, and build technical communities.
        </p>

        <div className={styles.grid}>
          <a href="https://seunbayo.hashnode.dev/" className={styles.card}>
            <h2>✍🏾 Blog</h2>
            <p>Read my technical and non-technical articles.</p>
          </a>

          <a
            href="https://www.getrevue.co/profile/seunbayo"
            className={styles.card}
          >
            <h2>💌 Newsletter</h2>
            <p>Subscribe to and read my Bi-weekly newsletter.</p>
          </a>

          <a href="https://twitter.com/seunbayong" className={styles.card}>
            <h2>🐦 Twitter</h2>
            <p>Follow me, interact with my tweets and maybe send a DM.</p>
          </a>

          {/* <a
            href="https://www.youtube.com/c/bolajiayodeji"
            className={styles.card}
          >
            <h2>🎥 YouTube</h2>
            <p>Watch my videos or join my live streams (coming soon!).</p>
          </a> */}
          <a
            href="https://www.linkedin.com/in/seunbayo/"
            className={styles.card}
          >
            <h2>💼 Linkedin</h2>
            <p>Connect with me.</p>
          </a>

          <a href="https://github.com/seunbayo" className={styles.card}>
            <h2>👨🏾‍💻 GitHub</h2>
            <p>Checkout or contribute to my open source projects.</p>
          </a>

          {/* <a href="https://patreon.com/bolajiayodeji" className={styles.card}>
            <h2>💰 Patreon</h2>
            <p>Become my patron and $upport my work.</p>
          </a> */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
