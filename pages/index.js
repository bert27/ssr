import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Description from "../components/Description";
import Description2 from "../components/Description2";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ejemplo SSR con Next</title>
        <meta name="description" content="web realizada con next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Ejemplo con Next</h1>
        <div className="style1"></div>
        <Description2 />
        <Description />
      </main>
      <footer className={styles.footer}>albertbenavent.com</footer>
    </div>
  );
}
