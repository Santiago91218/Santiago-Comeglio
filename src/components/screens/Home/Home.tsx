import styles from "./Home.module.css";
import { FiGithub } from "react-icons/fi";
import { FaDownload, FaLinkedinIn } from "react-icons/fa";

export const Home = () => {
  return (
    <div className={styles.containerHome}>
      <div className={styles.contentHome}>
        <div className={styles.contentTitle}>
          <div className={styles.contentNames}>
            <h1 className={styles.titleName}>Santiago</h1>
            <h3 className={styles.titleLastName}>Comeglio</h3>
          </div>
          <h3 className={styles.subTitle}>Técnico Superior en Programación</h3>
        </div>

        <div className={styles.contentActions}>
          <div className={styles.contentIcons}>
            <div className={styles.contentIcon}>
              <a
                href="https://www.linkedin.com/in/santiago-comeglio-935539306/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconWrapper} ${styles.linkedin}`}
              >
                <FaLinkedinIn className={styles.icon} />
              </a>
              <FaLinkedinIn color="#0056b3" className={styles.reflection} />
            </div>

            <div className={styles.contentIcon}>
              <a
                href="https://github.com/Santiago91218"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.iconWrapper} ${styles.github}`}
              >
                <FiGithub className={styles.icon} />
              </a>
              <FiGithub color="#7a007a" className={styles.reflection} />
            </div>
          </div>

          <div className={styles.contentButton}>
            <a
              href="/CV_Santiago_Comeglio.pdf"
              download
              className={styles.buttonDownload}
            >
              Descarga mi CV
              <span>
                <FaDownload />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
