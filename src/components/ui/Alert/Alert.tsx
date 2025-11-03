import type { FC } from "react";
import styles from "./Alert.module.css";
import { HiOutlineInformationCircle } from "react-icons/hi";
import type { ITypeMessage } from "../../../types/Enums/ITypeMessage";

interface IProps {
  message: string;
  type: ITypeMessage;
}

export const Alert: FC<IProps> = ({ message, type }) => {
  const isSuccess = type === "success";

  return (
    <div
      role="alert"
      className={`${styles.alert} ${isSuccess ? styles.success : styles.error}`}
    >
      <HiOutlineInformationCircle className={styles.icon} />
      <p className={styles.text}>{message}</p>
    </div>
  );
};
