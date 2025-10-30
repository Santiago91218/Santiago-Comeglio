import styles from "./AboutMe.module.css";
import img from "../../../assets/foto.jpg";
import { CardEducation } from "../../ui/CardEducation/CardEducation";

export const AboutMe = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerAboutMe}>
        <div className={styles.contentAboutMe}>
          <div className={styles.aboutMe}>
            <div className={styles.contentTitleAboutMe}>
              <h3>Sobre Mi</h3>
            </div>

            <p className={styles.textAboutMe}>
              Soy Santiago, Técnico Superior en Programación con experiencia
              práctica en proyectos Full Stack. Trabajo con Java, Spring Boot,
              React y TypeScript, integrando bases de datos relacionales (MySQL)
              y desarrollando APIs RESTful seguras. Mi enfoque se centra en
              claridad, consistencia y buenas prácticas, aplicando arquitectura
              limpia y diseño sólido en cada proyecto.
            </p>
          </div>

          <div className={styles.experience}>
            <div className={styles.contentTitleExperience}>
              <h4>Experiencia y Habilidades</h4>
            </div>
            <div className={styles.textAboutMe}>
              <p>A lo largo de mi formación como Técnico Superior en Programación y
              mi experiencia práctica en desarrollo web, he adquirido
              conocimientos sólidos en varias áreas:
                </p>
              <ul className={styles.list}>
                <li>
                  <b>Desarrollo Front-End y Back-End: </b>Experiencia con
                  React.js, Java, Spring Boot, HTML, CSS y JavaScript.
                </li>
                <li>
                  <b>Bases de Datos y APIs:</b> Manejo de MySQL, PostgreSQL y
                  MongoDB integración de servicios externos y optimización de
                  consultas.
                </li>
                <li>
                  <b>Trabajo en equipo:</b> Capacidad para colaborar con equipos
                  multidisciplinarios, coordinando tareas y cumpliendo objetivos
                  en tiempo y forma.
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.professionalGoals}>
            <div className={styles.contentTitleGoals}>
              <h4>Objetivos Profesionales</h4>
            </div>
            <p className={styles.textAboutMe}>
              Mi objetivo es seguir creciendo como desarrollador Full Stack,
              profundizando en nuevas tecnologías y contribuyendo a proyectos
              que generen valor real. Busco desarrollar soluciones eficientes y
              escalables, combinando creatividad y lógica para enfrentar
              desafíos complejos.
            </p>
          </div>
        </div>
        <div className={styles.contentImgAboutMe}>
          <img src={img} alt="Imagen de perfil" />
        </div>
      </div>

      <div id="Education" className={styles.containerEducation}>
        <div className={styles.contentEducation}>
          <div className={styles.contentTitleEducation}>
            <h2>Educación</h2>
          </div>

          <div className={styles.contentCardEducation}>
            <CardEducation />
          </div>
        </div>
      </div>
    </div>
  );
};
