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
        <div className={styles.header_contents}>
          <h1 className={styles.h1}>
            <a className={styles.nav_link} href="">
              <Image
                height="40px"
                width="150px"
                className={styles.img}
                src="/images/teamlogo2.png"
                alt="ロゴ"
              />
            </a>
          </h1>
          <div className={styles.responsive_btn}>
            <div className={styles.menu_line}></div>
            <div className={styles.menu_line}></div>
            <div className={styles.menu_line}></div>
          </div>
          <nav className={styles.header_nav}>
            <ul className={styles.header_nav_lists}>
              <li className={styles.li}>
                <a className={styles.nav_link} href="">
                  チーム沿革
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.nav_link} href="">
                  課長挨拶
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.nav_link} href="">
                  イベント
                </a>
              </li>
              <li className={styles.li}>
                <a className={styles.nav_link} href="">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.parent_hero}>
          <div id="vantael" className={styles.imgv} />
          <div className={styles.hero_text}>
            {/* <AnimationOnScroll animateIn="animate__jello"> */}
            <div className={styles.hero_main_text}>Evolving with ICT</div>
            {/* </AnimationOnScroll> */}
            <div className={styles.hero_sub_text}>
              Enjoy system engineer life !!
            </div>
            <button className={styles.hero_button}>ご相談・お問い合わせ</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
