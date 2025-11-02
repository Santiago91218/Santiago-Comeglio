import type { IImagen } from "../Images/IImagen";
import type { ITechnologies } from "../Technologies/ITechnologies";

export interface IProject {
  id: number;
  title: string;
  mainImage: IImagen;
  images: IImagen[];
  description: string;
  repoFrontEnd: string;
  repoBackEnd: string;
  technologies: ITechnologies;
}
