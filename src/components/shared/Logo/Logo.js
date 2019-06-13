import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import colors from '../../../setup/colors';

const Logo = props => (
  <Container {...props}>
    <span className="logo-github">Github</span>
    <span className="logo-search">Search</span>
  </Container>
);

const Container = styled.div`
  background: ${colors.white};
  width: 415px;
  height: 81px;
  font-size: 60px;

  ${props => props.headerMode && css`
    width: 280px;
    height: 50px;
    font-size: 40px;
  `}

  .logo-github {
    font-family: 'Monaco', sans-serif;
    margin-right: 5px;
  }

  .logo-search {
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    font-style: italic;
  }
`;

Logo.propTypes = {
  headerMode: PropTypes.bool,
};

Logo.defaultProps = {
  headerMode: false,
};

export default Logo;

