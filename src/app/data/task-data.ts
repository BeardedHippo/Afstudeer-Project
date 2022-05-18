import { Difficulty } from "../models/difficultyModels";
import { Task } from "../models/taskModels";

export const tasks: Task[] = [
    {
        taskId: 'noorswiped',
        difficulty: Difficulty.BASIC_1,
        mainStory: [
            {
               storyIndex: 0,
               videoUri: 'noorswiped/NS1-0.MP4',
               storyOptions: [
                   {
                      storyIndex: 0,
                      points: 1,
                      videoUri: 'noorswiped/NS1-1.MP4',
                      storyContent: "Ik wil deze persoon wel leren kennen!",
                      character: 'myla'
                   },
                   {
                      storyIndex: 0,
                      points: 3,
                      videoUri: 'noorswiped/NS1-2.MP4',
                      storyContent: 'Je weet nooit wie er achter zit. Mooi wegklikken',
                      character: 'monkey'
                   },
               ],
               storyExplaination: "Online weet je nooit zeker of mensen zeggen wie ze zijn. Je weet niet wat iemand van plan is. Wanneer een onbekende contact met je zoekt is het daarom veiliger om hier niet op in te gaan."
            },
            {
              storyIndex: 1,
              videoUri: 'noorswiped/NS2-0.MP4',
              storyOptions: [
                  {
                     storyIndex: 0,
                     points: 3,
                     videoUri: 'noorswiped/NS2-1.MP4',
                     storyContent: 'Ik wil een volwassene vragen hoe je dit oplost',
                     character: 'maki'
                  },
                  {
                     storyIndex: 0,
                     points: 1,
                     videoUri: 'noorswiped/NS2-2.MP4',
                     storyContent: 'Dit is niet meer leuk, ik zorg dat dit direct stopt',
                     character: 'monkey'
                  },
              ],
              storyExplaination: 'Stoppen kan een goede keuze zijn. Alleen het is nóg verstandiger om iemand te vragen je te helpen zodat je het in het vervolg ook kan voorkomen.'
           }
        ],
        length: 'Kort'
      }
]