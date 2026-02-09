export type IdeaType = "music" | "video";

export interface Idea {
  id: number;
  type: IdeaType;
  title: string;
  description: string;
  tags: string[];
  createdAt: Date;
}

export interface GeneratorState {
  ideaType: IdeaType;
  ideas: Idea[];
  loading: boolean;
}
