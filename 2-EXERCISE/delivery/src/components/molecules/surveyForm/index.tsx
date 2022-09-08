import React, { useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { v4 as uuidv4 } from 'uuid';

import { useToast } from '../../../context/toast';
import { surveySaveData } from '../../../services/survey/surveySaveData';

import { TextTitle, TextTitleInput, Loader } from '../..';
import IcoLogo from '../../../assets/images/serasa-logo-full.svg';

import { formSchema } from './rules/schema';
import { Survey } from '../../../models/survey';

import * as S from './style';

const SurveyForm = (): JSX.Element => {
  const RATING_DEFAULT_VALUE = [false, false, false, false, false];

  const { addToast } = useToast();

  const [rating, setRating] = useState(RATING_DEFAULT_VALUE);
  const [loading, setLoading] = useState(false);

  const handleSubmitConfirm = (): void => {
    setLoading(false);
    addToast({
      type: 'success',
      content: 'Obrigado por avaliar nossos serviços.',
    });
  };

  const formik = useFormik<Survey>({
    validationSchema: formSchema,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: { rating: 0, name: '', commentary: '' },

    onSubmit: async () => {
      if (formik.isValid) {
        try {
          setLoading(true);
          await surveySaveData({
            id: uuidv4(),
            name: formik.values.name,
            rating: formik.values.rating,
            commentary: formik.values.commentary,
          });
          // TODO: Remove timeout when integrate with backend
          setTimeout(handleSubmitConfirm, 1000);
        } catch (error) {
          addToast({
            type: 'error',
            content: 'Não foi possível enviar sua avaliação.',
          });
        }
      }
      setRating(RATING_DEFAULT_VALUE);
      formik.resetForm();
    },
  });

  const handleUpdateRate = (countStars: number): void => {
    const sumWithInitial = rating.map((rate, index) => {
      if (index === countStars) {
        return true;
      }
      formik.setFieldValue('rating', countStars + 1);
      return false;
    });
    setRating(sumWithInitial);
  };

  return (
    <S.ContainerSurvey>
      <S.LogoImg src={IcoLogo} alt="logoImg" />
      <Loader show={loading} />
      <TextTitle typeOfText="headingXs">
        Conte o quanto você está satisfeito com nossos serviços
      </TextTitle>
      <FormikProvider value={formik}>
        <S.FormBox onSubmit={formik.handleSubmit}>
          <TextTitleInput typeOfText="subheading" htmlFor="qa-name-input">
            Marque de 1 à 5 estrelas
          </TextTitleInput>
          <S.ContainerRating>
            <input
              type="radio"
              id="qa-star5-input"
              name="rating5"
              checked={!!rating[4]}
              onChange={() => handleUpdateRate(4)}
            />
            <TextTitleInput
              typeOfText="subheading"
              htmlFor="qa-star5-input"
              title="5 estrelas"
            />
            <input
              type="radio"
              id="qa-star4-input"
              name="rating4"
              checked={!!rating[3]}
              onChange={() => handleUpdateRate(3)}
            />
            <TextTitleInput
              typeOfText="subheading"
              htmlFor="qa-star4-input"
              title="4 estrelas"
            />
            <input
              type="radio"
              id="qa-star3-input"
              name="rating3"
              checked={!!rating[2]}
              onChange={() => handleUpdateRate(2)}
            />
            <TextTitleInput
              typeOfText="subheading"
              htmlFor="qa-star3-input"
              title="3 estrelas"
            />
            <input
              type="radio"
              id="qa-star2-input"
              name="rating2"
              checked={!!rating[1]}
              onChange={() => handleUpdateRate(1)}
            />
            <TextTitleInput
              typeOfText="subheading"
              htmlFor="qa-star2-input"
              title="2 estrelas"
            />

            <input
              type="radio"
              id="qa-star1-input"
              name="rating1"
              checked={!!rating[0]}
              onChange={() => handleUpdateRate(0)}
            />
            <TextTitleInput
              typeOfText="subheading"
              htmlFor="qa-star1-input"
              title="1 estrela"
            />
          </S.ContainerRating>
          <S.ContainerInput hasError={formik.errors.name}>
            <TextTitleInput typeOfText="subheading" htmlFor="qa-name-input">
              Nome
            </TextTitleInput>
            <input
              type="text"
              name="name"
              id="qa-name-input"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <S.ContainerError id="qa-name-input-error">
                {formik.errors.name}
              </S.ContainerError>
            )}
          </S.ContainerInput>
          <S.ContainerInput hasError={formik.errors.commentary}>
            <TextTitleInput
              typeOfText="subheading"
              htmlFor="qa-commentary-input"
            >
              Comentário (Opcional)
            </TextTitleInput>
            <textarea
              name="commentary"
              id="qa-commentary-input"
              value={formik.values.commentary}
              onChange={formik.handleChange}
            />
          </S.ContainerInput>
          <S.ButtonSubmit
            id="qa-submit-button"
            type="submit"
            disabled={!formik.isValid || formik.values.rating === 0}
          >
            Enviar avaliação
          </S.ButtonSubmit>
        </S.FormBox>
      </FormikProvider>
    </S.ContainerSurvey>
  );
};

export default SurveyForm;
