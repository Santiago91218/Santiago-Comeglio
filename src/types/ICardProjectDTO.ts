import type { ITechnologies } from "./ITechnologies";

export interface ICardProjectDTO {
  id: number;
  title: string;
  mainImage: string;
  mainTechnologies: ITechnologies[];
}
