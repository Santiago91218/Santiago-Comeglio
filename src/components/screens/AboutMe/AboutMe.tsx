import styles from "./AboutMe.module.css";
import SantiagoComeglio from "/images/logos/FotoPersonal.jpg";
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
              Soy Santiago, Técnico Superior en Programación y desarrollador con
              experiencia en la construcción de aplicaciones web y de
              escritorio. Trabajo principalmente con Java y Spring Boot en el
              backend, y React con TypeScript en el frontend, desarrollando
              soluciones escalables, seguras y orientadas a buenas prácticas.
              Tengo experiencia en el diseño de APIs REST, integración de bases
              de datos relacionales, autenticación y autorización, así como en
              la implementación de interfaces modernas y funcionales. Me enfoco
              en escribir código claro y mantenible, y en mejorar de forma
              continua mediante el aprendizaje de nuevas tecnologías y
              herramientas.
            </p>
          </div>

          <div className={styles.experience}>
            <div className={styles.contentTitleExperience}>
              <h3>Experiencia y Habilidades</h3>
            </div>

            <div className={styles.textAboutMe}>
              <p>
                A lo largo de mi formación y experiencia, he participado en el
                desarrollo de diversos proyectos, fortaleciendo mis
                conocimientos en distintas áreas del desarrollo de software:
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
              Mi objetivo es continuar creciendo como desarrollador,
              profundizando mi especialización y aportando valor en proyectos
              que requieran soluciones robustas y bien diseñadas, aplicando mis
              conocimientos para contribuir al desarrollo de productos de
              calidad.
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
