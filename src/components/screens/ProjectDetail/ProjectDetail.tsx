import styles from "./ProjectDetail.module.css";
import { useNavigate, useParams } from "react-router";
import data from "../../../data/projects.json";
import { MdKeyboardBackspace } from "react-icons/md";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = data.find(
    (p) =>
      p.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-") === slug
  );

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <section className={styles.containerDetail}>
      <div className={styles.contentButton}>
        <button
          className={styles.button}
          onClick={() => navigate(-1)}
          type="button"
        >
          <div className={styles.iconContainer}>
            <MdKeyboardBackspace size={30} />
          </div>
          <p className={styles.text}>Volver</p>
        </button>
      </div>

      <div className={styles.firstSection}>
        <div className={styles.contentMainImage}>
          <img className={styles.mainImage} src={project.mainImage} alt="" />
        </div>

        <div className={styles.contentAboutProyect}>
          <h3 className={styles.titleAboutProyect}>Sobre el proyecto</h3>
          <p className={styles.textAboutProyect}>
            Este proyecto consiste en un sistema para la administración integral
            de una bodega. Permite llevar el control de los productos
            almacenados, registrar ingresos y egresos de stock, organizar la
            información de proveedores y clientes, y generar reportes sobre el
            movimiento y estado de los productos. Está pensado para facilitar la
            gestión diaria y mejorar la eficiencia operativa dentro del entorno
            vitivinícola.
          </p>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.containerTechnologiesProject}>
          <div className={styles.contentTechnologiesProject}>
            <h3 className={styles.titleTechProyect}>Tecnologías utilizadas</h3>

            <p className={styles.textTechProyect}>
              El sistema fue desarrollado con una arquitectura web moderna. En
              el Front-End se utilizó React para crear una interfaz dinámica e
              intuitiva. El Back-End se construyó con Node.js y Express,
              permitiendo crear una API REST para manejar las operaciones del
              sistema. Para el almacenamiento de datos se implementó MongoDB,
              ideal para manejar información flexible y estructurada. Además, se
              utilizó Git y GitHub para el control de versiones y colaboración,
              asegurando un flujo de trabajo organizado y eficiente.
            </p>
          </div>
          <div className={styles.contentSecondImage}>
            <img
              className={styles.secondImage}
              src={project.images[0]}
              alt=""
            />
          </div>
        </div>

        <div className={styles.contentThree}>
          <div className={styles.contentThirdImage}>
            <img className={styles.thirdImage} src={project.images[1]} alt="" />
          </div>

          <div className={styles.containerLinks}>
            <h5>Enlaces de interés</h5>
            <p>
              <b>Repositorio Frontend: </b>
              <a
                href={project.repoFrontEnd}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.repoFrontEnd.split("/").pop()}
              </a>
            </p>

            {project.repoBackEnd !== "" && (
              <p>
                <b>Repositorio Backend: </b>
                <a
                  href={project.repoBackEnd}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.repoBackEnd.split("/").pop()}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
