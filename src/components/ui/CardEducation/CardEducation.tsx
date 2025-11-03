import type { IEducation } from "../../../types/Educations/IEducation";
import styles from "./CardEducation.module.css";
import { useEffect, useState } from "react";

export const CardEducation = () => {
  const [education, setEducations] = useState<IEducation[]>([]);

  useEffect(() => {
    fetch("/data/educations/education.json")
      .then((res) => res.json())
      .then((data) => setEducations(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {education.map((e) => (
        <article key={e.id} className={styles.containerCard}>
          <div className={styles.contentTitle}>
            <h4 className={styles.title}>{e.title}</h4>
          </div>

          <figure className={styles.contentImg}>
            <img src={e.image.url} alt={e.image.alt} />
          </figure>

          <section className={styles.contentData}>
            <p><span>Institución: </span>{e.institution}</p>
            <div className={styles.contentDates}>
              <p>Fecha Inicio: {e.startDate}</p>
              <p>Fecha Fin: {e.endDate}</p>
            </div>
          </section>
        </article>
      ))}
    </>
  );
};
