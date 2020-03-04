import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 1rem 0;
  ${({ noWrapperPadding }) => (noWrapperPadding ? 'padding-top: 0; padding-bottom: 0; ' : '')}
`;

const InnerWrapper = styled.div`
  max-width: 70ch;
  padding: 25px;
  margin: auto;
  @media only screen and (max-width:600px) {
      padding-top: 10px;
      padding-bottom: 10px;
    }

`;

const ContentBlock = ({ children, noWrapperPadding }) => (
  <Wrapper noWrapperPadding={noWrapperPadding}>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </Wrapper>
);


export default ContentBlock;
