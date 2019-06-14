import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Logo from '../../components/shared/Logo';
import SearchBar from '../../components/shared/SearchBar';

import colors from '../../setup/colors';

export class Search extends React.Component {
  static propTypes = {
    history: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onSearch = () => {
    const { value: user } = this.state;
    const { history } = this.props;
    history.push(`/users/${user}/repos`, { user });
  }

  onChange = value => this.setState({ value });

  render() {
    return (
      <Page>
        <Logo />
        <SearchBar
          value={this.state.value}
          onSearch={this.onSearch}
          onChange={this.onChange}
        />
      </Page>
    );
  }
}

const Page = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default withRouter(Search);

