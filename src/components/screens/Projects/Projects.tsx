import styles from "./Projects.module.css";
import data from "../../../data/projects.json";
import { CardProject } from "../../ui/CardProject/CardProject";

export const Projects = () => {
  return (
    <div className={styles.containerProjects}>
      <div className={styles.contentTitle}>
        <h2>Proyectos</h2>
      </div>

      <div className={styles.contentCard}>
        {data.map((p) => (
          <CardProject project={p} />
        ))}
      </div>
    </div>
  );
};
