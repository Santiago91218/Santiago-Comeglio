import type { IImagen } from "../Images/IImagen";

export interface IEducation {
  id: number;
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  image: IImagen;
}
