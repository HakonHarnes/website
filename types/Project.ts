import { Feedback } from "./Feedback";

export type Project = {
  slug: string;
  media: string;
  title: string;
  technologies: string[];
  description: string[];
  abstract: string;
  github: string;
  youtube?: string;
  twitter?: string;
  feedback?: Feedback[];
};
