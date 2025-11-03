import { type FC } from "react";
import styles from "./CardProject.module.css";
import { useNavigate } from "react-router";
import type { ICardProjectDTO } from "../../../types/Projects/ICardProjectDTO";

interface ICardProps {
  project: ICardProjectDTO;
}

export const CardProject: FC<ICardProps> = ({ project }) => {
  const navigate = useNavigate();
  const id = `card-${project.id}`;

  const handleClick = (titulo: string) => {
    const slug = titulo
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

    navigate(`/${slug}`);
  };

  return (
    <article
      id={id}
      onClick={() => handleClick(project.title)}
      className={styles.containerCard}
    >
      <div className={styles.contentTitle}>
        <h3>{project.title}</h3>
      </div>

      <figure className={styles.mainImageProject}>
        <div className={styles.techOverlay}>
          <ul className={styles.contentTech}>
            {project.mainTechnologies.map((tech, index) => (
              <li
                key={index}
                className={styles.iconWrapper}
                data-text={tech.name}
              >
                <img src={tech.icon} alt={tech.name} />
              </li>
            ))}
          </ul>
        </div>

        <img src={project.mainImage.url} alt={project.mainImage.alt} />

        <div className={styles.contentButton}>
          <button
            type="button"
            onClick={() => {
              handleClick(project.title);
            }}
          >
            Ver más
          </button>
        </div>
      </figure>
    </article>
  );
};
