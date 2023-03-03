import Head from "next/head";
import styles from "../styles/home.module.css";
function index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.heading_container}>
          <h1 className={styles.h1}>MY FAM BIBLE STUDY</h1>
          <h5 className={styles.h5}>
            Here are all the basic Operations you can perfom
          </h5>
        </div>

        <section className={styles.section}>
          <article className={styles.article}>
            <h3 className={styles.h3}>MEMBERS CRUD OPs</h3>
            <button className={styles.btn}>GET ALL</button>
            <button className={styles.btn}>UPDATE</button>
            <button className={styles.btn}>POST</button>
            <button className={styles.btn}>DELETE</button>
          </article>

          <article className={styles.article}>
            <h3 className={styles.h3}>ORGANISATION CRUD OPs</h3>
            <button className={styles.btn}>GET ALL</button>
            <button className={styles.btn}>UPDATE</button>
            <button className={styles.btn}>POST</button>
            <button className={styles.btn}>DELETE</button>
          </article>

          <article className={styles.article}>
            <h3 className={styles.h3}>ATTENDANCE CRUD OPs</h3>
            <button className={styles.btn}>GET ALL</button>
            <button className={styles.btn}>UPDATE</button>
            <button className={styles.btn}>POST</button>
            <button className={styles.btn}>DELETE</button>
          </article>
        </section>

        <div></div>
      </div>
    </>
  );
}

export default index;
