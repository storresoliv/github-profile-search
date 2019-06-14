import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import OrganizationIcon from '../../../assets/images/organization-icon.svg';
import LocationIcon from '../../../assets/images/location-icon.svg';
import FollowersIcon from '../../../assets/images/followers-icon.svg';
import RepositoriesIcon from '../../../assets/images/repositorie-icon.svg';
import StarIcon from '../../../assets/images/star-icon.svg';

import colors from '../../../setup/colors';

const Profile = ({
  image,
  name,
  username,
  organization,
  location,
  starCount,
  repositoriesCount,
  followersCount,
}) => (
  <Container>
    <Header>
      <Image src={image} alt="profile user" />
      <Name>{name}</Name>
      <UserName username>{username}</UserName>
    </Header>
    <Infors>
      <Group>
        <img src={OrganizationIcon} alt="Organization Icon" />
        <GroupLabel>{organization}</GroupLabel>
      </Group>
      <Group>
        <img src={LocationIcon} alt="Location Icon" />
        <GroupLabel>{location}</GroupLabel>
      </Group>
      <Group>
        <img src={StarIcon} alt="Star Icon" />
        <GroupLabel>{starCount}</GroupLabel>
      </Group>
      <Group>
        <img src={RepositoriesIcon} alt="Repositories Icon" />
        <GroupLabel>{repositoriesCount}</GroupLabel>
      </Group>
      <Group>
        <img src={FollowersIcon} alt="Followers Icon" />
        <GroupLabel>{followersCount}</GroupLabel>
      </Group>
    </Infors>
  </Container>
);

const Container = styled.section`
  width: 280px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const Header = styled.div``;

const Infors = styled.div`
  margin-top: 10px;
`;

const Image = styled.img`
  width: 280px;
  height: 280px;
`;

const Name = styled.p`
  margin: 5px 0px;
  font-family: Raleway;
  font-size: 35px;
  font-weight: 300;
  color: ${colors.black};
`;

const Group = styled.div`
  width: 240px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin: 15px 0px;
`;

const GroupLabel = styled.span`
  font-family: Raleway;
  font-size: 20px;
  font-weight: 300;
  margin-left: 7px;
  color: ${colors.gray}

  ${props => props.username && css`
    margin-left: 0px;
  `}
`;

const UserName = GroupLabel;

Profile.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  starCount: PropTypes.number.isRequired,
  repositoriesCount: PropTypes.number.isRequired,
  followersCount: PropTypes.number.isRequired,
};

export default Profile;

