import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
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
              src="/images/team_logo.png"
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
              <li className={styles.li}>
                <Image
                  width={300}
                  height={300}
                  className={styles.homeImg}
                  src="/images/freeImage/rpa2.jpg"
                  alt="PHOTO"
                />
                <h3 className={styles.h3}>RPA</h3>
                <p className={styles.section_ol_li_p}>
                  RPA（ロボティック・プロセス・オートメーション）を用いて作業の自動化を行う
                </p>
              </li>
              <li className={styles.li}>
                <Image
                  width={300}
                  height={300}
                  className={styles.homeImg}
                  src="/images/freeImage/ai.jpg"
                  alt="PHOTO"
                />
                <h3 className={styles.h3}>AI</h3>
                <p className={styles.section_ol_li_p}>
                  AI技術を用いて、社内作業の効率化を図る。
                </p>
              </li>

              <li className={styles.li}>
                <Image
                  width={300}
                  height={300}
                  className={styles.homeImg}
                  src="/images/freeImage/eye.jpg"
                  alt="PHOTO"
                />
                <h3 className={styles.h3}>データサイエンス</h3>
                <p className={styles.section_ol_li_p}>
                  データを分析し、未来予測を行う
                </p>
              </li>
              <li className={styles.li}>
                <Image
                  width={300}
                  height={300}
                  className={styles.homeImg}
                  src="/images/freeImage/graph.jpg"
                  alt="PHOTO"
                />
                <h3 className={styles.h3}>visualization</h3>
                <p className={styles.section_ol_li_p}>
                  visualization（見える化とは）
                </p>
              </li>
              <li className={styles.li}>
                <Image
                  width={300}
                  height={300}
                  className={styles.homeImg}
                  src="/images/freeImage/iot2.jpg"
                  alt="PHOTO"
                />
                <h3 className={styles.h3}>IOT</h3>
                <p className={styles.section_ol_li_p}>
                  IOT機器を用い社内の効率化を図る
                </p>
              </li>
              <li className={styles.li}>
                <Image
                  width={300}
                  height={300}
                  className={styles.homeImg}
                  src="/images/freeImage/vr.jpg"
                  alt="PHOTO"
                />
                <h3 className={styles.h3}>XR(VR/AR/MR)</h3>
                <p className={styles.section_ol_li_p}>
                  仮想現実、拡張現実の可能性を追求していことにより、社内の効率化に繋げる。
                </p>
              </li>
            </ol>
          </section>

          {/* 第２コンテンツ */}
          <article className={styles.article}>
            <h2 className={styles.h22}>operational efficiency tools</h2>
            <div className={styles.flex_article}>
              <section className={styles.flex_item}>
                <p className={styles.flex_img}>
                  <Image
                    width={220}
                    height={220}
                    className={styles.tlImg}
                    src="/images/freeImage/wb.jpg"
                    alt="PHOTO"
                  />
                </p>
                <h3 className={styles.h32}>ホワイトボード</h3>
              </section>
              <section className={styles.flex_item}>
                <p className={styles.flex_img}>
                  <Image
                    width={220}
                    height={220}
                    className={styles.tlImg}
                    src="/images/freeImage/kb.jpg"
                    alt="PHOTO"
                  />
                </p>
                <h3 className={styles.h32}>カンバンボード</h3>
              </section>
              <section className={styles.flex_item}>
                <p className={styles.flex_img}>
                  <Image
                    width={220}
                    height={220}
                    className={styles.tlImg}
                    src="/images/freeImage/chat.jpg"
                    alt="PHOTO"
                  />
                </p>
                <h3 className={styles.h32}>チャットツール</h3>
              </section>
              <section className={styles.flex_item}>
                <p className={styles.flex_img}>
                  <Image
                    width={220}
                    height={220}
                    className={styles.tlImg}
                    src="/images/freeImage/dc.jpg"
                    alt="PHOTO"
                  />
                </p>
                <h3 className={styles.h32}>docker</h3>
              </section>
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
