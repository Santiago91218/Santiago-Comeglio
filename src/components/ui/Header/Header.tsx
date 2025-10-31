import styles from "./Header.module.css";
import { LuChevronsLeftRight } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import data from "../../../data/projects.json";
import { useNavigate } from "react-router";
import { ImCross } from "react-icons/im";

export const Header = () => {
  const [stateMenu, setStateMenu] = useState(false);
  const [optionSelectedMenu, setOptionSelectedMenu] = useState("Proyectos");
  const navigate = useNavigate();

  const handleClick = (titulo: string) => {
    const slug = titulo
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");

    navigate(`/${slug}`);
  };

  const handleCloseMenu = () => {
    setStateMenu(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.contentIcons}>
        <span className={styles.icon}>
          <a href="#Home">
            <LuChevronsLeftRight size={50} />
          </a>
        </span>
        <span onClick={() => setStateMenu(true)} className={styles.icon}>
          <GiHamburgerMenu size={40} />
        </span>
      </div>

      {stateMenu && (
        <div className={styles.contentMenuOptions}>
          <div className={styles.content}>
            <div className={styles.contentLogo}>
              <LuChevronsLeftRight size={360}
              color="#f9fafb"
              />
            </div>

            <div className={styles.containerOptions}>
              <div className={styles.cancelButton}>
                <ImCross 
                  size={24}
                  onClick={() => setStateMenu(false)}
                />
              </div>
              <ul className={styles.list}>
                {["Proyectos", "Sobre Mi", "Tecnologías", "Contacto"].map(
                  (option) => (
                    <li
                      key={option}
                      onClick={() => setOptionSelectedMenu(option)}
                      className={
                        optionSelectedMenu === option
                          ? styles.selected
                          : styles.option
                      }
                    >
                      <a
                        href={
                          option === "Tecnologías"
                            ? "#Technologies"
                            : option === "Contacto"
                            ? "#Contact"
                            : undefined
                        }
                        onClick={() => {
                          if (option === "Tecnologías" || option === "Contacto")
                            handleCloseMenu();
                        }}
                      >
                        {option}
                      </a>
                      {option === "Proyectos" &&
                        optionSelectedMenu === "Proyectos" && (
                          <ul className={styles.submenu}>
                            {data.map((t, i) => (
                              <li onClick={() => handleClick(t.title)} key={i}>
                                {t.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      {option === "Sobre Mi" &&
                        optionSelectedMenu === "Sobre Mi" && (
                          <ul className={styles.submenu}>
                            <li>
                              <a href="#AboutMe" onClick={handleCloseMenu}>
                                Biografía
                              </a>
                            </li>
                            <li>
                              <a href="#Education" onClick={handleCloseMenu}>
                                Educación
                              </a>
                            </li>
                          </ul>
                        )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
