import styles from "../../styles/home/HomeFooter.module.css";

type Props = {};

const HomeFooter = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default HomeFooter;
