import { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { LuSendHorizontal } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Alert } from "../../ui/Alert/Alert";
import { ITypeMessage } from "../../../types/Enums/ITypeMessage"; // objeto
import type { ITypeMessage as ITypeMessageType } from "../../../types/Enums/ITypeMessage"; // tipo
import type { ContactForm } from "../../../types/Forms/ContactForm";

export const Contact = () => {
  const intialValues: ContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState<ContactForm>(intialValues);
  const [alert, setAlert] = useState<ITypeMessageType | null>(null);

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setFormValues(intialValues);

      setAlert(ITypeMessage.Success);
    } catch (error) {
      setAlert(ITypeMessage.Error);
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.containerContact}>
      <h2>Contacto</h2>

      <div className={styles.contentForm}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">
              Nombre Completo <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ej: Juan Pérez"
              value={formValues.name}
              onChange={handleOnChange}
              required
            />
            <span className={styles.line}></span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej: juan.perez@email.com"
              value={formValues.email}
              onChange={handleOnChange}
              required
            />
            <span className={styles.line}></span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject">
              Asunto <span>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Ej: Solicitud de información"
              value={formValues.subject}
              onChange={handleOnChange}
              required
            />
            <span className={styles.line}></span>
          </div>

          <div className={styles.textareaGroup}>
            <label htmlFor="message">
              Mensaje <span>*</span>
            </label>
            <textarea
              id="message"
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

        <aside className={styles.contentMoreInfo}>
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
        </aside>
      </div>

      {alert && (
        <Alert
          message={
            alert === ITypeMessage.Success
              ? "Éxito - Se ha enviado el mensaje"
              : "Error - Ha ocurrido un error al enviar el mensaje"
          }
          type={alert}
        />
      )}
    </section>
  );
};
