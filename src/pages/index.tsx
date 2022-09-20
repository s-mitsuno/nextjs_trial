import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  imagePath?: string;
  description?: string;
};

type ToolsInfoData = {
  title: string;
  imagePath: string;
};

const Home: NextPage = (props: any) => {
  // サーバーサイドでのAPI呼び出し※propsにデータが入っている
  console.log(JSON.stringify(props));
  const resultdata: Props[] = props["result"];

  // クライアントでのAPI呼び出し
  const router = useRouter();
  const [toolsdata, settoolsdata] = useState<ToolsInfoData[]>([]);
  const [status, setStatus] = useState<number | null>(null);
  const host = router.basePath;
  const options: AxiosRequestConfig = {
    url: `${router.basePath}/api/getToolsData`,
    method: "GET",
  };

  useEffect(() => {
    axios(options)
      .then((res: AxiosResponse<ToolsInfoData[]>) => {
        const { data, status } = res;
        settoolsdata(data);
        setStatus(status);
        console.log(data);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        // エラー処理
        console.log(e.message);
      });
  }, []);

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
          <section className={styles.section}>
            <h2 className={styles.h2}>導入実績</h2>
            <ol className={styles.ol}>
              {resultdata.map((value) => {
                //console.log(value.title);
                return (
                  <li key={value.title} className={styles.li}>
                    <Image
                      width={300}
                      height={300}
                      className={`${styles.homeImg}`}
                      src={`${value.imagePath}`}
                      alt="PHOTO"
                    />
                    <h3 className={styles.h3}>{value.title}</h3>
                    <p className={styles.section_ol_li_p}>
                      {value.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* 第２コンテンツ */}
          <article className={styles.article}>
            <h2 className={styles.h22}>operational efficiency tools</h2>
            <div className={styles.flex_article}>
              {toolsdata.map(({ title, imagePath }) => {
                return (
                  <section key={title} className={styles.flex_item}>
                    <p className={styles.flex_img}>
                      <Image
                        width={220}
                        height={220}
                        className={styles.tlImg}
                        src={`${imagePath}`}
                        alt="PHOTO"
                      />
                    </p>
                    <h3 className={styles.h32}>{title}</h3>
                  </section>
                );
              })}
            </div>
          </article>
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
