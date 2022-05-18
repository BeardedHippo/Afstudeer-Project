export class Difficulty {
  static readonly BASIC_1 = new Difficulty('Basis 1', 0, 'BASIC_1');
  static readonly BASIC_2 = new Difficulty('Basis 2', 1, 'BASIC_2');
  static readonly BASIC_3 = new Difficulty('Basis 3', 2, 'BASIC_3');
  static readonly ADVANCED_1 = new Difficulty('Gevorderd 1', 3, 'ADVANCED_1');
  static readonly ADVANCED_2 = new Difficulty('Gevorderd 2', 4, 'ADVANCED_2');
  static readonly ADVANCED_3 = new Difficulty('Gevorderd 3', 5, 'ADVANCED_3');
  static readonly EXPERT_1 = new Difficulty('Expert 1', 6, 'EXPERT_1');
  static readonly EXPERT_2 = new Difficulty('Expert 2', 7, 'EXPERT_2');

  private constructor(
    public readonly label: string,
    public readonly level: number,
    public readonly id: string,
  ) {
  }
  
  static allDifficulties() {
    let allDifficulties: Difficulty[] = [];
    
    allDifficultyIds.forEach((difficultyId) => {
      let label = difficultyId as ValidDifficulty;
      allDifficulties.push(Difficulty[label]);
    });

    return allDifficulties;
  }
}

export type ValidDifficulty = 'BASIC_1' | 'BASIC_2' | 'BASIC_3' | 'ADVANCED_1' | 'ADVANCED_2' | 'ADVANCED_3' | 'EXPERT_1' | 'EXPERT_2';

const allDifficultyIds = [
  'BASIC_1', 
  'BASIC_2', 
  'BASIC_3', 
  'ADVANCED_1', 
  'ADVANCED_2', 
  'ADVANCED_3', 
  'EXPERT_1', 
  'EXPERT_2'
];