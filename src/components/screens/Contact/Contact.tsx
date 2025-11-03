import { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { LuSendHorizontal } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { Alert } from "../../ui/Alert/Alert";
import { ITypeMessage } from "../../../types/Enums/ITypeMessage"; // objeto
import type { ITypeMessage as ITypeMessageType } from "../../../types/Enums/ITypeMessage"; // tipo
import type { ContactForm } from "../../../types/Forms/ContactForm";
import { SiWhatsapp } from "react-icons/si";

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

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const form = e.target as HTMLFormElement;
//   const formData = new FormData(form);

//   try {
//     await fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData as any).toString(),
//     });

//     setFormValues(intialValues);
//     setAlert(ITypeMessage.Success);
//   } catch (error) {
//     console.error(error);
//     setAlert(ITypeMessage.Error);
//   }
// };

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
        <form
         className={styles.form}
          data-netlify="true"
          name="contacto"
        >
          <input type="hidden" name="contacto" value="contact" />
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
              <SiWhatsapp size={22} />
              <p>
                <a
                  href="https://wa.me/542634717286"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 2634 717286
                </a>
              </p>
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
