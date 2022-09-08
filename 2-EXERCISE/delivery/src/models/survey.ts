export type Survey = {
  rating: number;
  name: string;
  commentary?: string;
};

export interface ISurveyToSaveProps extends Survey {
  id: string;
}
