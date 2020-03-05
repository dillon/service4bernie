import React from 'react';
import styled from '@emotion/styled';
import * as colors from '../../styles/colors';

import SEO from '../../components/SEO';
import ContentBlock from '../../components/ContentBlock';
import LetterSpanish from '../../components/LetterSpanish';
import Signatures from '../../components/Signatures';
import Link from '../../components/Link';


const CollapsingRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:370px) {
    flex-direction: column;
  }
`;

const IndexPageEs = () => (
  <>
    <SEO lang="es" />
    <div
      style={{
        background: colors.blue,
        color: colors.black,
        fontSize: '1.5rem',
      }}
    >
      <ContentBlock>
        <div>
          <Link style={{ fontSize: '.75em', textDecoration: 'none' }} internal to="/">English</Link>
          {' '}
          <b>/</b>
          {' '}
          <Link style={{ fontSize: '.75em', textDecoration: 'none', borderBottomColor: colors.black }} internal to="/es">Español</Link>
        </div>
        <LetterSpanish short />
      </ContentBlock>
      <ContentBlock noWrapperPadding>
        <CollapsingRow>
          <div>
            <Link internal to="/es/letter">Lee más</Link>
          </div>
          <div>
            <Link external to="https://berniesanders.com/volunteer/">Voluntario</Link>
          </div>
          <div>
            <Link external to="mailto:service4bernie@gmail.com">Contacto</Link>
          </div>
        </CollapsingRow>
      </ContentBlock>
      <ContentBlock>
        <div style={{ display: 'flex' }}>
          <Link style={{ flex: 1 }} button external to="https://docs.google.com/forms/d/e/1FAIpQLScLnCwB99uTtfoF5arewMXdsaX6nLrRzg4ErxTg6aY2E6zqxw/viewform?usp=sf_link">
            Firma tu nombre
          </Link>
        </div>
      </ContentBlock>
      <ContentBlock>
        <Signatures spanish />
      </ContentBlock>

    </div>
  </>
);

export default IndexPageEs;
