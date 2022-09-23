import Script from "next/script";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/home/HomeHeader.module.css";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <div>
      <Script
        id="three"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="vanta"
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        strategy="beforeInteractive"
      />
      <Script
        id="vantael"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            VANTA.NET({
              el: "#vantael",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x3db698,
              points: 16.00,
              maxDistance: 28.00,
              spacing: 18.00
            })
          `,
        }}
      ></Script>

      <header className={styles.header}>
        <h1 className={styles.h1}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="#" className={styles.btn2}>
                Home
              </a>
              {/* <Image
                height="30px"
                width="30px"
                className={styles.btn2}
                src="/images/freeImage/logoparams.png"
                alt="ロゴ"
              /> */}
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.btn4}>
                チーム沿革
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.btn4}>
                課長挨拶
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.btn4}>
                イベント
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.btn4}>
                関連リンク
              </a>
            </li>
            <li className={styles.li}>
              <a href="#" className={styles.btn4}>
                お問い合わせ
              </a>
            </li>
          </ul>
        </h1>

        <div className={styles.parent_hero}>
          <div id="vantael" className={styles.imgv} />
          <div className={styles.hero_text}>
            {/* <AnimationOnScroll animateIn="animate__jello"> */}
            <div className={styles.hero_main_text}>NaiSei Ka Tanoshi</div>
            {/* </AnimationOnScroll> */}
            <div className={styles.hero_sub_text}>
              enjoy system engineer life !!
            </div>
            <button className={styles.hero_button}>ご相談・お問い合わせ</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
