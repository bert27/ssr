import styles from "../styles/Home.module.css";
export default function Description() {
  return (
    <>
      <p className={styles.description}>
        Empezando estilos <code className={styles.code}>y enrutamiento</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentación &rarr;</h2>
          <p>
            Encuentre información detallada sobre las funciones y la API de
            Next.js.
          </p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Aprenda más! &rarr;</h2>
          <p>
            Obtenga información sobre Next.js en un curso interactivo con
            cuestionarios!
          </p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h2>Ejemplos &rarr;</h2>
          <p>Descubré e implementa proyectos de Next.js con ejemplos.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Despliega &rarr;</h2>
          <p>
            Implemente instantáneamente su sitio Next.js en una URL pública con
            Vercel.
          </p>
        </a>
      </div>
    </>
  );
}
