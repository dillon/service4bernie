import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const InnerWrapper = styled.div`
  max-width: 70ch;
  padding: 25px;
  margin: auto;
`;

const ContentBlock = ({ children }) => (
  <Wrapper>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </Wrapper>
);


export default ContentBlock;
