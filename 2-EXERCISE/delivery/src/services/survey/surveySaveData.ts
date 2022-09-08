import { BASE_URL } from '../../config/env';

import { postData } from '../defaultServices';

import { ISurveyToSaveProps } from '../../models/survey';

export const surveySaveData = async (
  data: ISurveyToSaveProps,
): Promise<ISurveyToSaveProps> => {
  const response = await postData(`${BASE_URL}/surveys`, data);
  return response;
};
