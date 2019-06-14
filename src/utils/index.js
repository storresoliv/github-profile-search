import parse from 'parse-link-header';
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

export {
  parseHeader,
  hasNextPage,
};

