import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { GetServerSideProps } from "next";
import IntroductResData from "../compornents/home/introductResData";
import ToolsData from "../compornents/home/toolsData";
import HomeHeader from "../compornents/home/homeHeader";
import HomeFooter from "../compornents/home/homeFooter";

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
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        /> */}
      </Head>
      <main>
        {/* ヘッダーの領域 */}
        <HomeHeader />

        {/* コンテンツの領域 */}
        <div>
          {/* 第一コンテンツ */}
          <IntroductResData data={resultdata} />

          {/* 第２コンテンツ */}
          <ToolsData />
        </div>

        {/* フッターの領域 */}
        <HomeFooter />
      </main>
    </>
  );
};

export default Home;

/** サーバーサイドレンダリング　※ココ（Pages）でしか使えない **/
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
