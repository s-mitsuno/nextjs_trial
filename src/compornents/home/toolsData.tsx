import Image from "next/image";
import styles from "../../styles/home/ToolsData.module.css";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useRouter } from "next/router";
import { AnimationOnScroll } from "react-animation-on-scroll";

type ToolsInfoData = {
  title: string;
  imagePath: string;
};

const ToolsData = () => {
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
    <div>
      <article className={styles.article}>
        <AnimationOnScroll animateIn="animate__pulse">
          <h2 className={styles.h22}>operational efficiency tools</h2>
        </AnimationOnScroll>
        <div className={styles.flex_article}>
          {toolsdata.map(({ title, imagePath }) => {
            return (
              <section key={title} className={styles.flex_item}>
                <AnimationOnScroll animateIn="animate__pulse">
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
                </AnimationOnScroll>
              </section>
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default ToolsData;
