export interface MainStory {
    storyIndex: number;
    videoUri: string;
    storyOptions: ChoiceStory[];
    storyExplaination: string;
}

export interface ChoiceStory {
    storyIndex: number;
    points: number;
    videoUri: string;
    storyContent: string;
    character: string;
}