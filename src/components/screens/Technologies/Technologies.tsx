import styles from "./Technologies.module.css";
import { useEffect, useState } from "react";
import type { IElementTech } from "../../../types/Technologies/IElementTech";

export const Technologies = () => {
  const [frontend, setFrontend] = useState<IElementTech[]>([]);
  const [backend, setBackend] = useState<IElementTech[]>([]);
  const [databases, setDatabases] = useState<IElementTech[]>([]);
  const [tools, setTools] = useState<IElementTech[]>([]);

  useEffect(() => {
    fetch("/data/technologies/frontend.json")
      .then((res) => res.json())
      .then((data) => setFrontend(data))
      .catch((err) => console.error(err));

    fetch("/data/technologies/backend.json")
      .then((res) => res.json())
      .then((data) => setBackend(data))
      .catch((err) => console.error(err));

    fetch("/data/technologies/databases.json")
      .then((res) => res.json())
      .then((data) => setDatabases(data))
      .catch((err) => console.error(err));

    fetch("/data/technologies/tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch((err) => console.error(err));
  }, []);

  const renderGroup = (
    title: string,
    cards: IElementTech[],
    reverse = false
  ) => (
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
    <section className={styles.containerTechnologies}>
      <div className={styles.contentTittle}>
        <h2>Tecnologías</h2>
      </div>
      {renderGroup("Frontend", frontend)}
      {renderGroup("Backend", backend, true)}
      {renderGroup("Bases de Datos", databases)}
      {renderGroup("Herramientas", tools, true)}
    </section>
  );
};
