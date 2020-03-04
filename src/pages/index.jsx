import React from 'react';
import * as colors from '../styles/colors';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContentBlock from '../components/ContentBlock';
import Letter from '../components/Letter';
import Signatures from '../components/Signatures';
import Link from '../components/Link';

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
