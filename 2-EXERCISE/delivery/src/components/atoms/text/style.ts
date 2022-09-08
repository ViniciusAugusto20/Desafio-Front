import styled, { css } from 'styled-components';
import { generateMedia } from 'styled-media-query';

import { color } from '../../../assets/css/color';
import { sizes } from '../../../assets/css/devices';
import { typography } from '../../../assets/css/typography';

import { TitlePropsMutations } from './types';

const customMedia = generateMedia({
  ...sizes,
});

const containerTypeOfTextModifiers = {
  display: () => css`
    color: ${color.darkHigh};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.display};
    font-weight: ${typography.weight.bold};
    letter-spacing: -1.2px;
    ${customMedia.lessThan('mobile')`
      font-size: ${typography.size.headingL};
    `}
  `,
  headingL: () => css`
    color: ${color.darkHigh};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.headingL};
    font-weight: ${typography.weight.bold};
    letter-spacing: -1px;
    ${customMedia.lessThan('mobile')`
      font-size: ${typography.size.headingM};
    `}
  `,
  headingM: () => css`
    color: ${color.darkHigh};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.headingM};
    font-weight: ${typography.weight.bold};
    letter-spacing: -0.8px;
    ${customMedia.lessThan('mobile')`
      font-size: ${typography.size.headingS};
    `}
  `,
  headingS: () => css`
    color: ${color.darkHigh};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.headingS};
    font-weight: ${typography.weight.bold};
    letter-spacing: -0.6px;
    ${customMedia.lessThan('mobile')`
      font-size: ${typography.size.headingXs};
    `}
  `,
  headingXs: () => css`
    color: ${color.darkHigh};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.headingXs};
    font-weight: ${typography.weight.bold};
    ${customMedia.lessThan('mobile')`
      font-size: ${typography.size.bodyL};
    `}
  `,

  subheading: () => css`
    color: ${color.darkHigh};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.body};
    font-weight: ${typography.weight.bold};
  `,

  body: () => css`
    color: ${color.darkMedium};
    font-family: ${typography.type.primary};
    font-size: ${typography.size.body};
    font-weight: ${typography.weight.regular};
  `,
};

export const TextTitleInput = styled.label<TitlePropsMutations>`
  ${({ typeOfText }) => css`
    ${!!typeOfText && containerTypeOfTextModifiers[typeOfText]}
  `}
`;

export const TextTitle = styled.span<TitlePropsMutations>`
  ${({ typeOfText }) => css`
    ${!!typeOfText && containerTypeOfTextModifiers[typeOfText]}
  `}
`;
