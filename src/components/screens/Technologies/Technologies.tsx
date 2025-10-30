import styles from "./Technologies.module.css";
import frontend from "../../../data/technologies/frontend.json";
import backend from "../../../data/technologies/backend.json";
import databases from "../../../data/technologies/databases.json";
import tools from "../../../data/technologies/tools.json";

export const Technologies = () => {
  const renderGroup = (title: string, cards: any[], reverse = false) => (
    <div className={styles.techSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.wrapper}>
        <div
          className={`${styles.inner} ${reverse ? styles.reverse : ""}`}
          style={{ ["--quantity" as any]: cards.length }}
        >
          {cards.map((card) => (
            <div
              key={card.index}
              className={styles.card}
              style={{
                ["--index" as any]: card.index,
                ["--color-card" as any]: card.color,
              }}
            >
              <div
                className={styles.img}
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <span className={styles.techName}>{card.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div className={styles.containerTechnologies}>
      <div className={styles.contentTittle}>
        <h3>Tecnologías</h3>
      </div>
      {renderGroup("Frontend", frontend)}
      {renderGroup("Backend", backend, true)}
      {renderGroup("Bases de Datos", databases)}
      {renderGroup("Herramientas", tools, true)}
    </div>
  );
};
