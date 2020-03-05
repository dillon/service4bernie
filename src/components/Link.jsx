import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as colors from '../styles/colors';

const FakeLink = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  cursor: pointer;
  background: inherit;
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: .9em;
  color: currentColor;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom-color: ${colors.red};
  }
`;

const InternalLink = styled(Link)`
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: .9em;
  color: currentColor;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom-color: ${colors.red};
  }
`;

const ExternalLink = styled.a`
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: .9em;
  color: currentColor;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom-color: ${colors.red};
  }
`;

const InternalButton = styled(InternalLink)`
  text-align: center;
  text-decoration: none;
  padding: 18px 30px;
  font-size: .7em;
  background: ${colors.red};
  &:hover {
    background: ${colors.redDark};
    border-bottom-color: transparent;
  }
`;

const ExternalButton = styled(ExternalLink)`
  text-align: center;
  text-decoration: none;
  padding: 18px 30px;
  font-size: .7em;
  background: ${colors.red};
  &:hover {
    background: ${colors.redDark};
    border-bottom-color: transparent;
  }
`;

const LinkComponent = ({
  to, button, fake, external, internal, ...props
}) => {
  if (fake) {
    return (
      <FakeLink
        {...props}
      />
    );
  }
  if (button) {
    if (internal && !external) {
      return (
        <InternalButton
          to={to}
          {...props}
        />
      );
    }
    if (external && !internal) {
      return (
        <ExternalButton
          href={to}
          {...props}
          target="_blank"
          rel="noopener noreferrer"
        />
      );
    }
    return <b>----MUST SPECIFY LINK INTERNAL/EXTERNAL----</b>;
  }
  if (internal && !external) {
    return (
      <InternalLink
        to={to}
        {...props}
      />
    );
  }
  if (external && !internal) {
    return (
      <ExternalLink
        href={to}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      />
    );
  }
  return <b>----MUST SPECIFY LINK INTERNAL/EXTERNAL----</b>;
};

export default LinkComponent;
