import { type FC } from "react";
import type { ICardProjectDTO } from "../../../types/ICardProjectDTO";
import styles from "./CardProject.module.css";
import { useNavigate } from "react-router";

interface ICardProps {
  project: ICardProjectDTO;
}

export const CardProject: FC<ICardProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = (titulo: string) => {
    const slug = titulo
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

    navigate(`/${slug}`);
  };

  return (
    <div
    onClick={()=>{handleClick(project.title)}}
    className={styles.containerCard}>
      <div className={styles.contentTitle}>
        <h3>{project.title}</h3>
      </div>

      <div className={styles.mainImageProject}>
        <div className={styles.techOverlay}>
          <div className={styles.contentTech}>
            {project.mainTechnologies.map((tech, index) => (
              <div key={index} data-text={tech.name} className={styles.iconWrapper}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                />
              </div>
            ))}
          </div>
        </div>

        <img src={project.mainImage} alt="Imagen del proyecto" />
        <div className={styles.contentButton}>
          <button onClick={() => handleClick(project.title)}>Ver más</button>
        </div>
      </div>
    </div>
  );
};
