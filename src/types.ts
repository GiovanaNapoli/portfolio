export enum CoursesStatus {
  IN_PROGRESS = "Em andamento",
  COMPLETED = "Completo",
}

export type CoursesType = {
  name: string;
  school: string;
  link?: string;
  status: CoursesStatus;
};
