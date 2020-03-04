import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import * as colors from '../styles/colors';

const InternalLink = styled(Link)`
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: .9em;
  color: currentColor;
  &:hover {
    border-bottom: 1px solid ${colors.red};
  }
`;

const ExternalLink = styled.a`
  font-family: Inter, Helvetica, Arial, sans-serif;
  font-size: .9em;
  color: currentColor;
  &:hover {
    border-bottom: 1px solid ${colors.red};
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
    border-bottom: none;
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
    border-bottom: none;
  }
`;

const LinkComponent = ({
  to, button, external, internal, ...props
}) => {
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
