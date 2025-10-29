import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FiGithub } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstSection}>
        <div className={styles.contentInformation}>
          <h4>Santiago Comeglio</h4>
          <p>
            Tecnico universitario en programacion, con stack en tecnologias como
            Java/SpringBoot y React/Ts
          </p>
        </div>

        <div className={styles.contentLinks}>
          <h4>Links</h4>
          <ul className={styles.listLinks}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#AboutMe">Sobre Mí</a>
            </li>
            <li>
              <a href="#Projects">Proyectos</a>
            </li>
            <li>
              <a href="#Technologies">Tecnologías</a>
            </li>
          </ul>
        </div>

        <div className={styles.contentNetworks}>
          <h4>Redes</h4>
          <div className={styles.contentIcons}>
            <a
              href="https://www.linkedin.com/in/santiago-comeglio-935539306/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={22} className={styles.icon} />
            </a>
            <a
              href="https://github.com/Santiago91218"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={22} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.content}>
          <p>
            © {new Date().getFullYear()} <span>Santiago Comeglio</span>
          </p>

          <div className={styles.contentBuild}>
            <p>Construido con</p>
            <img
              className={styles.iconBuildReact}
              src="react.svg"
              alt="Logo react"
            />

            <img
              className={styles.iconBuildVite}
              src="vitejs.svg"
              alt="Logo vite"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
