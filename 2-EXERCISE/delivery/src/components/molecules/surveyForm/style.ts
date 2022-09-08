import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

import { color } from '../../../assets/css/color';
import { sizes } from '../../../assets/css/devices';
import { typography } from '../../../assets/css/typography';

import { TextTitle } from '../..';

import { InputProps } from './types';

const customMedia = generateMedia({
  ...sizes,
});

export const ContainerRating = styled.div`
  float: left;
  height: 36px;
  padding: 0 10px;
`;

export const ContainerSurvey = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid ${color.darkMedium};
  border-radius: 5px;
  max-width: 500px;
  margin: 40px auto;
  ${customMedia.lessThan('mobile')`
       width: 80%;
  `}
  ${TextTitle} {
    font-size: ${typography.size.bodyL};
    text-align: center;
  }
`;

export const LogoImg = styled.img`
  width: 230px;
  height: 150px;
  margin-bottom: 10px;
  ${customMedia.lessThan('mobile')`
      width: 180px;
      height: 100px;
  `}
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  max-width: 400px;
  margin: 30px 0px 60px 0px;
  width: 50%;

  ${ContainerRating}:not(:checked) > input {
    position: absolute;
    top: -9999px;
  }
  ${ContainerRating}:not(:checked) > label {
    float: right;
    width: 1em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.headingS};
    color: ${color.lightGray};
  }
  ${ContainerRating}:not(:checked) > label:before {
    content: '★ ';
  }
  ${ContainerRating} > input:checked ~ label {
    color: ${color.gold};
  }
  ${ContainerRating}():not(:checked) > label:hover,
  ${ContainerRating}:not(:checked) > label:hover ~ label {
    color: ${color.gold};
  }
  ${ContainerRating} > input:checked + label:hover,
  ${ContainerRating} > input:checked + label:hover ~ label,
  ${ContainerRating} > input:checked ~ label:hover,
  ${ContainerRating} > input:checked ~ label:hover ~ label,
  ${ContainerRating} > label:hover ~ input:checked ~ label {
    color: ${color.gold};
  }

  textarea {
    height: 100px;
    resize: none;
    appearance: none;
    outline: none;
    border: 1px solid ${color.darkHigh};
    border-radius: 5px;
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.body};
    padding: 0px 5px;
    &:focus {
      border: 1px solid ${color.darkLow};
    }
  }
`;

export const ContainerInput = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  margin: 10px 0px;
  label {
    align-self: start;
    margin-bottom: 5px;
    color: ${color.darkHigh};
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.bold};
    font-size: ${typography.size.body};
  }

  input {
    cursor: pointer;
    display: inline-block;
    height: 50px;
    border: ${({ hasError }) =>
      hasError ? `1px solid ${color.red}` : `1px solid ${color.darkHigh}`};
    background: ${color.lightSolid};
    appearance: none;
    outline: none;
    border-radius: 5px;
    font-family: ${typography.type.primary};
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.body};
    padding: 0px 5px;
    &:focus {
      border: 1px solid ${color.darkLow};
    }
  }
`;

export const ButtonSubmit = styled.button`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: ${color.lightSolid};
  background-color: ${color.magenta};
  border: none;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.bodyL};
  border-radius: 5px;
  cursor: pointer;
  :disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  :hover {
    opacity: 0.8;
  }
`;

export const ContainerError = styled.div`
  margin-top: 5px;
  color: ${color.red};
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.regular};
  font-size: ${typography.size.bodySm};
`;
