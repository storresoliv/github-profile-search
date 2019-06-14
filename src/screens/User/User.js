import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

class User extends React.Component {
  render() {
    return (
      <Page>
        <p>user: {this.props.location.state.user}</p>
      </Page>
    );
  }
}

const Page = styled.main`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default withRouter(User);

