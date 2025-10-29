import styles from "./CardEducation.module.css";
import data from "../../../data/education.json";

export const CardEducation = () => {
  return (
    <>
      {data.map((e) => (
        <div key={e.id} className={styles.containerCard}>
          <div className={styles.contentTitle}>
            <h4 className={styles.title}>{e.title}</h4>
          </div>

          <div className={styles.contentImg}>
            <img src={e.logo} alt="Logo institución" />
          </div>

          <div className={styles.contentData}>
            <p>Institucion: {e.institution}</p>
            <div className={styles.contentDates}>
              <p>Fecha Inicio: {e.startDate}</p>
              <p>Fecha Fin: {e.endDate}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
