import type { ITechnologies } from "./ITechnologies";

export interface IProject {
  id: number;
  title: string;
  mainImage: string;
  images: string[];
  description: string;
  repoFrontEnd: string;
  repoBackEnd: string;
  technologies: ITechnologies[];
}
