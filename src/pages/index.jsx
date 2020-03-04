import React from 'react';
import styled from '@emotion/styled';
import * as colors from '../styles/colors';

import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';
import Letter from '../components/Letter';
import Signatures from '../components/Signatures';
import Link from '../components/Link';


const CollapsingRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width:370px) {
    flex-direction: column;
  }
`;

const IndexPage = () => (
  <>
    <SEO />
    <div
      style={{
        background: colors.blue,
        color: colors.black,
        fontSize: '1.5rem',
      }}
    >
      <ContentBlock>
        <Letter short />
      </ContentBlock>
      <ContentBlock noWrapperPadding>
        <CollapsingRow>
          <div>
            <Link internal to="/letter">Read More</Link>
          </div>
          <div>
            <Link external to="https://berniesanders.com/volunteer/">Volunteer</Link>
          </div>
          <div>
            <Link external to="mailto:service4bernie@gmail.com">Contact</Link>
          </div>
        </CollapsingRow>
      </ContentBlock>
      <ContentBlock>
        <div style={{ display: 'flex' }}>
          <Link style={{ flex: 1 }} button external to="https://docs.google.com/forms/d/e/1FAIpQLScLnCwB99uTtfoF5arewMXdsaX6nLrRzg4ErxTg6aY2E6zqxw/viewform?usp=sf_link">
            Sign your name
          </Link>
        </div>
      </ContentBlock>
      <ContentBlock>
        <Signatures />
      </ContentBlock>

    </div>
  </>
);

export default IndexPage;
