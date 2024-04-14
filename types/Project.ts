import { Feedback } from "./Feedback";

export type Project = {
  slug: string;
  media: string;
  thumbnail: string;
  title: string;
  technologies: string[];
  description: string[];
  abstract: string;
  github?: string;
  youtube?: string;
  twitter?: string;
  website?: string;
  feedback?: Feedback[];
};
