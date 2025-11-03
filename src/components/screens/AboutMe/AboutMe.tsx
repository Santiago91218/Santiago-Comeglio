import styles from "./AboutMe.module.css";
import SantiagoComeglio from "/images/FotoPersonal.jpg";
import { CardEducation } from "../../ui/CardEducation/CardEducation";

export const AboutMe = () => {
  return (
    <section className={styles.containerMain}>
      <div className={styles.containerAboutMe}>
        <div className={styles.contentAboutMe}>
          <div className={styles.aboutMe}>
            <div className={styles.contentTitleAboutMe}>
              <h2>Sobre Mi</h2>
            </div>

            <p className={styles.textAboutMe}>
              Soy Santiago, Técnico Superior en Programación, especializado en
              el desarrollo de soluciones Full Stack. Trabajo principalmente con
              Java/Spring Boot en el backend y React/TypeScript en el frontend.
              Tengo experiencia integrando bases de datos relacionales (MySQL) y
              creando APIs RESTful seguras, priorizando la claridad, la
              consistencia y las buenas prácticas de desarrollo.
            </p>
          </div>

          <div className={styles.experience}>
            <div className={styles.contentTitleExperience}>
              <h3>Experiencia y Habilidades</h3>
            </div>

            <div className={styles.textAboutMe}>
              <p>
                Durante mi formación y experiencia práctica en desarrollo web,
                he adquirido conocimientos sólidos en varias áreas:
              </p>

              <ul className={styles.list}>
                <li>
                  <b>Desarrollo Front-End y Back-End:</b> Experiencia con
                  React.js, HTML, CSS, Java, Spring Boot, Node.js, Express.js y
                  JavaScript/TypeScript, entre otras tecnologías.
                </li>
                <li>
                  <b>Bases de datos y APIs:</b> Manejo de MySQL, PostgreSQL y
                  MongoDB, integración de servicios externos y optimización de
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
              <h3>Objetivos Profesionales</h3>
            </div>

            <p className={styles.textAboutMe}>
              Mi objetivo es seguir creciendo como desarrollador, ampliando mis
              conocimientos en nuevas tecnologías y contribuyendo a proyectos
              que generen valor real. Busco crear soluciones eficientes y
              escalables, combinando creatividad y lógica para enfrentar
              desafíos complejos.
            </p>
          </div>
        </div>

        <div className={styles.contentImgAboutMe}>
          <img
            src={SantiagoComeglio}
            alt="Foto de perfil de Santiago Comeglio"
          />
        </div>
      </div>

      <section id="Education" className={styles.containerEducation}>
        <div className={styles.contentEducation}>
          <div className={styles.contentTitleEducation}>
            <h2>Educación</h2>
          </div>

          <div className={styles.contentCardEducation}>
            <CardEducation />
          </div>
        </div>
      </section>
    </section>
  );
};
