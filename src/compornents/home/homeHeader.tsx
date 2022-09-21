import Image from "next/image";
// import styles from "../../styles/home/HomeHeader.module.css";
import * as THREE from "three";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

type Props = {};

const HomeHeader = (props: Props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef}>Foreground content goes here</div>
    // <div>
    //   <header className={styles.header}>
    //     <h1 className={styles.h1}>
    //       <Image
    //         height="60px"
    //         width="300px"
    //         className={styles.img}
    //         src="/images/freeImage/logo2.png"
    //         alt="ロゴ"
    //       />
    //     </h1>
    //     <div className={styles.parent_hero}>
    //       <Image
    //         height="640px"
    //         width="1280px"
    //         className={styles.img}
    //         src="/images/freeimage/hero_2.jpg"
    //         alt="ヒーローイメージ"
    //       />
    //     </div>
    //   </header>
    // </div>
  );
};

export default HomeHeader;
