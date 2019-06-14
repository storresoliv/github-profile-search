import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../../components/shared/Logo';
import Loader from '../../components/shared/Loader';
import SearchBar from '../../components/shared/SearchBar';
import RepositoryCard from '../../components/shared/RepositoryCard';
import Profile from '../../components/shared/Profile';
import UserNotFound from '../../components/shared/UserNotFound';

import * as utils from '../../utils';

const profileProps = {
  image: 'https://picsum.photos/id/1/280/280',
  user: {
    name: 'Felipe Sousa',
    username: 'felipesousa',
    organization: 'felipzsousa',
    location: 'Tatooine',
    starCount: 800,
    repositoriesCount: 92,
    followersCount: 342,
  },
};

class User extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        user: PropTypes.string,
      }),
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: props.location.state.user,
      loading: false,
      fetching: false,
      error: null,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  onChange = value => this.setState({ value });

  onSearch = (value) => {
    this.props.history.replace(`/users/${value}/repos`, { user: value });
    this.setState({ data: [] });
    this.getUserData();
  }

  getUserData = async (nextUrl) => {
    try {
      const { value, loading } = this.state;
      this.setState({ fetching: true });

      if (!loading) this.addLoader();
      if (nextUrl) this.setState({ error: false });

      const url = nextUrl || `https://api.github.com/users/${value}/repos?per_page=100`;

      const response = await fetch(url);
      const hasNext = utils.hasNextPage(response.headers.get('Link'));
      const responseData = await response.json();

      if (responseData.message) {
        this.setState({ error: true, data: this.state.data });
        this.removeLoader();
      } else {
        const data = this.state.data.concat(responseData);

        this.setState({ data, error: false });
        this.removeLoader();
      }

      if (hasNext) {
        this.setState({ error: false });
        await this.getUserData(hasNext);
      } else if (hasNext && !responseData.message) {
        this.setState({ data: this.state.data.concat(responseData) });
        this.removeLoader();
      }

      this.setState({ fetching: false });
    } catch (e) {
      this.setState({ error: true });
      this.removeLoader();
      throw new Error(e.toString());
    }
  }

  addLoader = () => this.setState({ loading: true });

  removeLoader = () => setTimeout(() => this.setState({ loading: false }), 1000);

  renderHeader = () => (
    <Header>
      <Logo
        headerMode
        style={{ marginRight: '40px' }}
        onClick={() => this.props.history.push('/')}
      />
      <SearchBar
        style={{ marginTop: '0px' }}
        value={this.state.value}
        onSearch={this.onSearch}
        onChange={this.onChange}
        disabled={this.state.loading}
      />
    </Header>
  );

  renderSidebar = () => (
    <Profile {...profileProps} />
  );

  renderRepositories = () => (
    <List>
      {
        utils.parseUserRepositories(this.state.data).map(repo => (
          <RepositoryCard {...repo} key={repo.title} />
        ))
      }
    </List>
  );

  renderContainer = () => (
    <Container>
      {this.renderSidebar()}
      {this.renderRepositories()}
    </Container>
  );

  renderError = () => (
    <ContainerError>
      <UserNotFound />
    </ContainerError>
  )

  renderLoader = () => <Loader />;

  renderContentPage = error => // eslint-disable-line
    error
      ? this.renderError()
      : this.renderContainer()

  render() {
    const {
      fetching,
      error,
      loading,
      data,
    } = this.state;

    return (
      <Page>
        {this.renderHeader()}
        {
          loading || fetching
            ? this.renderLoader()
            : this.renderContentPage(error)
        }
      </Page>
    );
  }
}

const Page = styled.div`
  background: white;
  display: block;
  margin: 0 auto;
  width: 1120px;
  max-width: 95%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 20px 0px 50px;
`;

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;

const ContainerError = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const List = styled.div``;

export default withRouter(User);

