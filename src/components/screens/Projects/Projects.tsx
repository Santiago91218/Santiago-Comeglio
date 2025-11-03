import styles from "./Projects.module.css";
import { CardProject } from "../../ui/CardProject/CardProject";
import { useEffect, useState } from "react";
import type { ICardProjectDTO } from "../../../types/Projects/ICardProjectDTO";

export const Projects = () => {
  const [projects, setProjects] = useState<ICardProjectDTO[]>([]);

  useEffect(() => {
    fetch("/data/projects/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (location.hash && projects.length > 0) {
      const element = document.querySelector(location.hash) as HTMLElement;
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [location, projects]);

  return (
    <section className={styles.containerProjects}>
      <div className={styles.contentTitle}>
        <h2>Proyectos</h2>
      </div>

      <div className={styles.contentCard}>
        {projects.map((p) => (
          <CardProject key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};
