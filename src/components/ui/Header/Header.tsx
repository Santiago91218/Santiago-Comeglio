import styles from "./Header.module.css";
import { LuChevronsLeftRight } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";

export const Header = () => {
  const [stateMenu, setStateMenu] = useState<boolean>(false);
  const [optionSelectedMenu, setOptionSelectedMenu] = useState<string>("");

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
        <nav className={styles.contentMenuOptions}>
          <div className={styles.content}>
            <div className={styles.containerOptions}>
              <div className={styles.cancelButton}>
                <ImCross size={24} onClick={() => setStateMenu(false)} />
              </div>
              <ul className={styles.list}>
                {["Sobre Mi", "Proyectos", "Tecnologías", "Contacto"].map(
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
                          option === "Proyectos"
                            ? "#Projects"
                            : option === "Sobre Mi"
                            ? "#AboutMe"
                            : option === "Tecnologías"
                            ? "#Technologies"
                            : option === "Contacto"
                            ? "#Contact"
                            : undefined
                        }
                        onClick={handleCloseMenu}
                      >
                        {option}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
