import { Difficulty } from "../models/difficultyModels";
import { Task } from "../models/taskModels";

export const tasks: Task[] = [
    {
        taskId: '23987sfgdbhnjk',
        difficulty: Difficulty.BASIC_1,
        mainStory: [
            {
               storyIndex: 0,
               videoCurl: 'Janiks.MP4',
               storyOptions: [
                   {
                      storyIndex: 0,
                      answerType: false,
                      videoCurl: 'Janiks1.MP4',
                      storyContent: 'Ik ben A',
                      character: 'Monkey'
                   },
                   {
                      storyIndex: 0,
                      answerType: true,
                      videoCurl: 'Janiks1.MP4',
                      storyContent: 'Ik ben B',
                      character: 'Mila'
                   },
                   {
                      storyIndex: 0,
                      answerType: false,
                      videoCurl: 'Janiks1.MP4',
                      storyContent: 'Ik ben C',
                      character: 'Mason'
                   }
               ],
               storyExplaination: 'B is het goede antwoord omdat A en C achterhaalde letters zijn.'
            },
            {
              storyIndex: 1,
              videoCurl: 'Janiks2.MP4',
              storyOptions: [
                  {
                     storyIndex: 0,
                     answerType: false,
                     videoCurl: 'Janiks1.MP4',
                     storyContent: 'Ik ben A',
                     character: 'Monkey'
                  },
                  {
                     storyIndex: 0,
                     answerType: true,
                     videoCurl: 'Janiks1.MP4',
                     storyContent: 'Ik ben B',
                     character: 'Mila'
                  },
                  {
                     storyIndex: 0,
                     answerType: true,
                     videoCurl: 'Janiks1.MP4',
                     storyContent: 'Ik ben C',
                     character: 'Mason'
                  }
              ],
              storyExplaination: 'B en C zijn het goede antwoord omdat A  een achterhaalde letters is.'
           }
        ],
        length: 'Kort'
      }
]