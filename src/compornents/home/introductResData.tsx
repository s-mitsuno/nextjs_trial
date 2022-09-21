import Image from "next/image";
import styles from "../../styles/home/IntroductResData.module.css";

type IntroductResultData = {
  title?: string;
  imagePath?: string;
  description?: string;
};

const IntroductResData = (props: any) => {
  const resultdata: IntroductResultData[] = props.data;
  return (
    <div>
      <section className={styles.section}>
        <h2 className={styles.h2}>導入実績</h2>
        <ol className={styles.ol}>
          {resultdata.map((value) => {
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
                <p className={styles.section_ol_li_p}>{value.description}</p>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
};

export default IntroductResData;
