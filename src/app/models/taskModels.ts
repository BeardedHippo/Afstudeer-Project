import { GroupOfChildren } from './classOfChildrenModel';
import { Difficulty, ValidDifficulty } from'./difficultyModels'
import { MainStory } from './storyModels'

type TaskLength = "Kort" | "Middel" |  "Lang";

export interface Task {
  taskId: string;
  difficulty: Difficulty;
  mainStory: MainStory[];
  length: TaskLength;
}

interface FinishedTask {
    difficulty: Difficulty;
    taskId: string;
  }
  
export type FinishedTasksPerDifficulty = {
    [difficulty in ValidDifficulty]?: FinishedTask[]
}

export type nameChangeToggleType = {
  windowToggle: boolean;
  newGroups?: GroupOfChildren[];
}
export type TaskType = 'main-story' | 'story-options' | 'choice-story' | 'final-mainstory' | 'finish-scores';
