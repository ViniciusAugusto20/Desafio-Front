import styled from 'styled-components';
import { color } from '../../../assets/css/color';

import { LoaderProps } from './types';

export const Container = styled.div<LoaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${color.darkLow};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ show }) => (show ? '1' : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  svg {
    height: 150px;
    width: 150px;
  }
`;
