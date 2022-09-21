import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import IntroductResData from "../compornents/home/introductResData";
import ToolsData from "../compornents/home/toolsData";

type IntroductResultData = {
  title?: string;
  imagePath?: string;
  description?: string;
};

const Home: NextPage = (props: any) => {
  // サーバーサイドでのAPI呼び出し※propsにデータが入っている
  console.log(JSON.stringify(props));
  const resultdata: IntroductResultData[] = props["result"];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>タイトル</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <main>
        <header className={styles.header}>
          <h1 className={styles.h1}>
            <Image
              height="60px"
              width="300px"
              className={styles.img}
              src="/images/freeImage/logo2.png"
              alt="ロゴ"
            />
          </h1>
          <div className={styles.parent_hero}>
            <Image
              height="640px"
              width="1280px"
              className={styles.img}
              src="/images/freeimage/hero_2.jpg"
              alt="ヒーローイメージ"
            />
          </div>
        </header>

        <div>
          {/* 第一コンテンツ */}
          <IntroductResData data={resultdata} />

          {/* 第２コンテンツ */}
          <ToolsData />
        </div>

        {/* フッターの領域 */}
        <footer className={styles.footer}>
          <div>
            <p className={styles.footer_p}>
              <strong>連絡先</strong>
            </p>
            <ul className={styles.footer_ul}>
              <li className={styles.li}>〒XXX-XXXX</li>
              <li className={styles.li}>厚生棟３</li>
              <li className={styles.li}>
                <span>営業時間</span>XX:XX-XX:XX
              </li>
              <li className={styles.li}>
                <span>定休日</span>XX曜日
              </li>
              <li className={styles.li}>
                <span>TEL</span>XX-XXXX-XXXX
              </li>
              <li className={styles.li}>
                <span>FAX</span>XX-XXXX-XXXX
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const host = context.req.headers.host || "localhost:3000";
    const protocol = /^localhost/.test(host) ? "http" : "https";
    const result = await fetch(
      `${protocol}://${host}/api/getIntroductResData`
    ).then((data) => {
      return data.json();
    });
    return {
      props: {
        result,
      },
    };
  } catch (e) {
    console.log(e);
    console.log("######ERROR#######");
    return {
      props: {
        result: [],
      },
    };
  }
};
