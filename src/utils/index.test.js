import {
  parseProfileStarCount,
  hasNextPage,
  parseHeader,
  parseUserProfile,
  parseUserRepositories,
  parseStars,
} from '.';

describe('Utils', () => {
  it('should return the next URL link', () => {
    const header = `
      <https://api.github.com/user/9919/repos?per_page=100&page=2>; rel="prev", <https://api.github.com/user/9919/repos?per_page=100&page=4>; rel="next", <https://api.github.com/user/9919/repos?per_page=100&page=4>; rel="last", <https://api.github.com/user/9919/repos?per_page=100&page=1>; rel="first"
    `;

    const result = {
      first: {
        page: '1',
        per_page: '100',
        rel: 'first',
        url: 'https://api.github.com/user/9919/repos?per_page=100&page=1',
      },
      last: {
        page: '4',
        per_page: '100',
        rel: 'last',
        url: 'https://api.github.com/user/9919/repos?per_page=100&page=4',
      },
      next: {
        page: '4',
        per_page: '100',
        rel: 'next',
        url: 'https://api.github.com/user/9919/repos?per_page=100&page=4',
      },
      prev: {
        page: '2',
        per_page: '100',
        rel: 'prev',
        url: `
      <https://api.github.com/user/9919/repos?per_page=100&page=2`,
      },
    };

    expect((parseHeader(header))).toEqual(result);
  });

  it('should return false if Headers is null', () => {
    const header = null;
    expect(hasNextPage(header)).toBeFalsy();
  });

  it('should sum the repositories stars', () => {
    const repos = [
      { stargazers_count: 10 },
      { stargazers_count: 23 },
      { stargazers_count: 4 },
      { stargazers_count: 9 },
    ];

    expect(parseProfileStarCount(repos)).toEqual("46");
  });

  it('should parse the user repositories', () => {
    const repos = [
      {
        stargazers_count: 10,
        description: 'lorem impsun dolor',
        name: 'Lorem Impsum',
        html_url: 'https://lorem.impsum',
      },
      {
        stargazers_count: 10,
        description: 'lorem impsun dolor',
        name: 'Lorem Impsum',
        html_url: 'https://lorem.impsum',
      },
    ];

    expect(parseUserRepositories(repos)).toEqual([
      {
        stars: 10,
        description: 'lorem impsun dolor',
        title: 'Lorem Impsum',
        url: 'https://lorem.impsum',
      },
      {
        stars: 10,
        description: 'lorem impsun dolor',
        title: 'Lorem Impsum',
        url: 'https://lorem.impsum',
      },
    ]);
  });

  it('should parse profile user', () => {
    const user = {
      avatar_url: 'https://lorem.ipsum',
      name: 'Jonh Doe',
      username: 'jonhdoe',
      company: '@Jonh Company',
      location: 'Brazil',
      public_repos: 12,
      followers: 12,
    };

    expect(parseUserProfile(user)).toEqual({
      image: user.avatar_url,
      name: user.name,
      username: user.login,
      organization: user.company.replace('@', ''),
      location: user.location,
      repositoriesCount: user.public_repos,
      followersCount: user.followers,
      starCount: 0,
    });
  });

  it('should parse profile user with null values', () => {
    const user = {
      avatar_url: 'https://lorem.ipsum',
      name: 'Jonh Doe',
      username: 'jonhdoe',
      company: null,
      location: null,
      public_repos: 12,
      followers: 12,
    };

    expect(parseUserProfile(user)).toEqual({
      image: user.avatar_url,
      name: user.name,
      username: user.login,
      organization: 'No Available',
      location: 'No Available',
      repositoriesCount: user.public_repos,
      followersCount: user.followers,
      starCount: 0,
    });
  });

  it('should format starCount', () => {
    const starCount = 298371;
    expect(parseStars(starCount)).toEqual('298.371');
  });
});

