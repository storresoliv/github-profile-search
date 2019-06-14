import React from 'react';
import styled from 'styled-components';

import colors from '../../../setup/colors';

const Message = styled.p`
  font-family: 'Raleway';
  font-size: 40px;
  color: ${colors.purple};
`;

export default () => <Message>User Not Found :(</Message>;

