import styles from "./ProjectDetail.module.css";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import data from "../../../data/projects.json";

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
    <motion.div
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={styles.motionDiv}
    >
      <button
        onClick={() => {
          navigate(-1);
        }}
        className={styles.buttonBack}
      >
        ← Volver
      </button>

      <h2 className={styles.title}>{project.title}</h2>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.contentImages}>
        {project.images.map((img, i) => (
          <img key={i} src={img} alt={`${project.title}-${i}`} />
        ))}
      </div>

      <div className={styles.contentLinks}>
        {project.repoFrontEnd && (
          <a href={project.repoFrontEnd} target="_blank">
            Repo Frontend
          </a>
        )}
        {project.repoBackEnd && (
          <a href={project.repoBackEnd} target="_blank">
            Repo Backend
          </a>
        )}
      </div>
    </motion.div>
  );
};
