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

const repositories = [
  {title: 'Death Star', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'Vader’s Armour', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'How to kill Obi-Wan', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'lorem pixel one', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'Vader’s Armour', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'Vader’s Armour', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'Vader’s Armour', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'Vader’s Armour', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'Vader’s Armour', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'How to kill Obi-Wan', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'lorem pixel one', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'How to kill Obi-Wan', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'lorem pixel one', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'How to kill Obi-Wan', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'lorem pixel one', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'How to kill Obi-Wan', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'lorem pixel one', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'How to kill Obi-Wan', description: 'lorem pixel dolor amet alid.', stars: 123},
  {title: 'lorem pixel one', description: 'lorem pixel dolor amet alid.', stars: 123},
];

class User extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        user: PropTypes.string,
      }),
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.location.state.user,
      loading: false,
    };
  }

  renderHeader = () => (
    <Header>
      <Logo
        headerMode
        style={{ marginRight: '40px' }}
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

  renderContent = () => (
    <List>
      { repositories.map(repository => <RepositoryCard {...repository} />) }
    </List>
  );

  renderNotFound = () => <UserNotFound />;

  renderLoader = () => <Loader />;

  render() {
    return (
      <Page>
        {this.renderHeader()}
        <Container>
          {this.renderSidebar()}
          {this.renderContent()}
        </Container>
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

const List = styled.div``;

export default withRouter(User);

