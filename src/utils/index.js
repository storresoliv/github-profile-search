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

export {
  parseHeader,
  hasNextPage,
  parseUserRepositories,
};

