import { Feedback } from "./Feedback";

export type Project = {
  slug: string;
  media: string;
  title: string;
  technologies: string[];
  abstract: string;
  github: string;
  feedback?: Feedback[];
};
