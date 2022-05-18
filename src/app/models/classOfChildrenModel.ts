import { FinishedTasksPerDifficulty } from "./taskModels"
import { Difficulty } from "./difficultyModels";

export interface ClassOfChildren {
  classId: string;
  className: string;
  finishedTasks: FinishedTasksPerDifficulty;
  groups: GroupOfChildren[];
  difficulty?: Difficulty;
}

export interface GroupOfChildren {
  name: string;
  points: number;
}

export type CreationStep = "classname" | "groups" | "difficulty";