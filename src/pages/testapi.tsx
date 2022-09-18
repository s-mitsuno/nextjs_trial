import type { NextPage } from "next";
import React, { useState, useEffect, useDebugValue } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";
import Image from "next/image";

type Props = {
  title?: string;
  imagePath?: string;
  description?: string;
};

export default function HelloWorld(props: any) {
  console.log(JSON.stringify(props));

  const resultdata: Props[] = props["result"];

  // resultdata.forEach((element) => {
  //   console.log(element.title);
  // });

  return (
    <div>
      <Head>
        <title>テスト</title>
      </Head>
      <h1>API取得データと動的タグ生成</h1>
      <div>
        <ul>
          {resultdata.map((value) => {
            console.log(value.title);
            return (
              <div key={value.title}>
                <li className={styles.li}>
                  <Image
                    width={300}
                    height={300}
                    className={`${styles.homeImg}`}
                    src={`${value.imagePath}`}
                    alt="PHOTO"
                  />
                  <h3 className={styles.h3}>{value.title}</h3>
                  <p className={styles.section_ol_li_p}>{value.description}</p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const host = context.req.headers.host || "localhost:3000";
    const protocol = /^localhost/.test(host) ? "http" : "https";
    const result = await fetch(
      `${protocol}://${host}/api/getIntroResData`
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
