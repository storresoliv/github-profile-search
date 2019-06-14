import parse from 'parse-link-header';
import sortBy from 'lodash.sortby';
import isNull from 'lodash.isnull';

const parseHeader = headers => parse(headers);

const hasNextPage = (headers) => {
  let next;
  const h = parseHeader(headers);
  if (isNull(h)) return false;

  if (h.next) {
    next = h.next.url;
  } else {
    next = false;
  }

  return next;
};

const parseUserProfile = user => ({
  image: user.avatar_url,
  name: user.name,
  username: !isNull(user.login) ? user.login : 'No Available',
  organization: !isNull(user.company) ? user.company.replace('@', '') : 'No Available',
  location: !isNull(user.location) ? user.location : 'No Available',
  repositoriesCount: user.public_repos,
  followersCount: user.followers,
  starCount: 0,
});

const parseUserRepositories = (data) => {
  const repos = data
    .map(({
      stargazers_count: stars,
      description,
      name: title,
      html_url: url,
    }) => ({
      title,
      stars,
      description,
      url,
    }));

  const sorted = sortBy(repos, 'stars').reverse();

  return sorted;
};

const parseProfileStarCount = repos =>
  repos.reduce((p, c) => ({ stargazers_count: p.stargazers_count + c.stargazers_count }));

export {
  parseHeader,
  hasNextPage,
  parseUserRepositories,
  parseUserProfile,
  parseProfileStarCount,
};

