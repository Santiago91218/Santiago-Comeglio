import type { IImagen } from "../Images/IImagen";
import type { ICardTechnologies } from "../Technologies/ICardTechnologies";

export interface ICardProjectDTO {
  id: number;
  title: string;
  mainImage: IImagen;
  mainTechnologies: ICardTechnologies[];
}
