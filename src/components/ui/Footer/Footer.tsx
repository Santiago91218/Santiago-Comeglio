import { FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FiGithub } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.firstSection}>
        <div className={styles.contentInformation}>
          <div className={styles.contentLogo}>
            <img
              className={styles.logo}
              src="/images/logos/Logo.png"
              alt="Logo Web"
            />
            <h4>Santiago Comeglio</h4>
          </div>
          <p>
            Técnico Universitario en Programación, especializado en el
            desarrollo de aplicaciones con Java/Spring Boot y React/TS.
          </p>
        </div>

        <nav className={styles.contentLinks} aria-label="Enlaces del sitio">
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
        </nav>

        <section className={styles.contentNetworks} aria-label="Redes sociales">
          <h4>Redes</h4>
          <ul className={styles.contentIcons}>
            <li>
              <a
                href="https://www.linkedin.com/in/santiago-comeglio-935539306/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={22} className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Santiago91218"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={22} className={styles.icon} />
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className={styles.secondSection}>
        <div className={styles.content}>
          <p>
            © {new Date().getFullYear()} <span>Santiago Comeglio</span>.
          </p>

          <div className={styles.contentBuild}>
            <p>Construido con</p>
            <img
              className={styles.iconBuildReact}
              src="icons/react.svg"
              alt="Logo React"
            />
            <img
              className={styles.iconBuildVite}
              src="icons/vitejs.svg"
              alt="Logo Vite"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};
