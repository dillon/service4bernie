import React from 'react';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import { Textfit } from 'react-textfit';
import * as colors from '../styles/colors';
import ContentBlock from './ContentBlock';
import Image from './Image';

const GatsbyLinkStyled = styled(GatsbyLink)`
  color: inherit;
  font-size: inherit;
  background-color: inherit;
  text-decoration: none;
`;

const H1 = styled.h1`
  margin: 0;
  margin-top: 1.5rem;
  text-align: center;
  user-select: none;

  span.container {
    border-bottom: .1em solid ${colors.red};
    border-bottom-right-radius: 15%;
    border-bottom-left-radius: 15%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  max-height: 50vh;
`;

const Header = () => (
  <header
    style={{
      background: colors.blue,
      color: colors.white,
    }}
  >
    <ImageContainer>
      <Image />
    </ImageContainer>
    <ContentBlock>
      <GatsbyLinkStyled to="/">
        <H1>
          <Textfit mode="single">
            <span className="container">
              SERVICE
              <span style={{ color: colors.red }}>4</span>
              BERNIE
            </span>
          </Textfit>
        </H1>
      </GatsbyLinkStyled>
    </ContentBlock>
  </header>
);

export default Header;
