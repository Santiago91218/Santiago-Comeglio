import { useState } from "react";
import styles from "./Contact.module.css";
import type { ContactForm } from "../../../types/ContactForm";
import { LuSendHorizontal } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Contact = () => {
  const intialValues: ContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState<ContactForm>(intialValues);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormValues(intialValues);
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.containerContact}>
      <h2>
        Conta<span>cto</span>
      </h2>

      <div className={styles.contentForm}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>
              Nombre Completo <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Ej: Juan Pérez"
              value={formValues.name}
              onChange={handleOnChange}
              required
            />
            <span className={styles.line}></span>
          </div>

          <div className={styles.inputGroup}>
            <label>
              Email <span>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Ej: juan.perez@email.com"
              value={formValues.email}
              onChange={handleOnChange}
              required
            />
            <span className={styles.line}></span>
          </div>

          <div className={styles.inputGroup}>
            <label>
              Asunto <span>*</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Ej: Solicitud de información"
              value={formValues.subject}
              onChange={handleOnChange}
              required
            />
            <span className={styles.line}></span>
          </div>

          <div className={styles.textareaGroup}>
            <label>
              Mensaje <span>*</span>
            </label>
            <textarea
              name="message"
              placeholder="Ej: ¡Excelente portfolio! Me gustaría colaborar contigo."
              value={formValues.message}
              onChange={handleOnChange}
              required
            />
            <span className={styles.line}></span>
          </div>

          <button type="submit" className={styles.buttonSend}>
            Enviar <LuSendHorizontal />
          </button>
        </form>

        <div className={styles.contentMoreInfo}>
          <h4>Más información</h4>

          <div className={styles.contentItems}>
            <div className={styles.contentIcons}>
              <FaPhoneAlt size={20} />
              <p>+54 2634 717286</p>
            </div>

            <div className={styles.contentIcons}>
              <IoIosMail size={26} />
              <p>santicome05@gmail.com</p>
            </div>
          </div>

          <div className={styles.contentText}>
            <p>
              Puedes contactarte conmigo vía WhatsApp o mediante el formulario
              de contacto.
            </p>
            <p>
              <b>Santiago Comeglio</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
