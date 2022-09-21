import Image from "next/image";
import styles from "../../styles/home/IntroductResData.module.css";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default HomeHeader;
