import React from 'react';
import { PageDefaultProps } from './types';

import * as S from './style';

const PageDefault = ({ children }: PageDefaultProps): JSX.Element => {
  return (
    <S.Container>
      <S.MainContent>
        <main>{children}</main>
      </S.MainContent>
    </S.Container>
  );
};

export default PageDefault;
