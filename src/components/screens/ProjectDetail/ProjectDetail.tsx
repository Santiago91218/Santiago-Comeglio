import styles from "./ProjectDetail.module.css";
import { useNavigate, useParams } from "react-router";
import { MdKeyboardBackspace } from "react-icons/md";
import { useEffect, useState } from "react";
import type { IProject } from "../../../types/Projects/IProject";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [projectsData, setProjectsData] = useState<IProject[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    fetch("/data/projects/projects.json")
      .then((res) => res.json())
      .then((data) => setProjectsData(data))
      .catch(console.error);
  }, []);

  const project = projectsData.find(
    (p) =>
      p.title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-") === slug
  );

  if (!project) return <p>Proyecto no encontrado</p>;

  const handleBack = () => {
    navigate(`/#card-${project.id}`);
  };

  return (
    <section className={styles.containerDetail}>
      <div className={styles.contentButton}>
        <button
          className={styles.button}
          onClick={handleBack}
          type="button"
          aria-label="Volver al listado de proyectos"
        >
          <div className={styles.iconContainer}>
            <MdKeyboardBackspace size={30} />
          </div>
          <p className={styles.text}>Volver</p>
        </button>
      </div>

      <div className={styles.firstSection}>
        <div className={styles.contentMainImage}>
          <img
            className={styles.mainImage}
            src={project.mainImage.url}
            alt={project.mainImage.alt}
          />
        </div>

        <div className={styles.contentAboutProyect}>
          <h3 className={styles.titleAboutProyect}>Sobre el proyecto</h3>
          <p className={styles.textAboutProyect}>{project.description}</p>
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.containerTechnologiesProject}>
          <div className={styles.contentTechnologiesProject}>
            <h3 className={styles.titleTechProyect}>Tecnologías utilizadas</h3>

            <div className={styles.contentTextTechProyect}>
              {project.technologies.frontend.length > 0 && (
                <p>
                  <b>Frontend:</b> {project.technologies.frontend.join(", ")}
                </p>
              )}

              {project.technologies.backend.length > 0 && (
                <p>
                  <b>Backend:</b> {project.technologies.backend.join(", ")}
                </p>
              )}

              {project.technologies.database.length > 0 && (
                <p>
                  <b>Base de Datos:</b>{" "}
                  {project.technologies.database.join(", ")}
                </p>
              )}

              {project.technologies.tools.length > 0 && (
                <p>
                  <b>Herramientas/Implementaciones:</b>{" "}
                  {project.technologies.tools.join(", ")}
                </p>
              )}
            </div>
          </div>
          <div className={styles.contentSecondImage}>
            <img
              className={styles.secondImage}
              src={project.images[0].url}
              alt={project.images[0].alt}
            />
          </div>
        </div>

        <div className={styles.contentThree}>
          <div className={styles.contentThirdImage}>
            <img
              className={styles.thirdImage}
              src={project.images[1].url}
              alt={project.images[1].alt}
            />
          </div>

          <div className={styles.containerLinks}>
            <h4>Enlaces de interés</h4>
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
