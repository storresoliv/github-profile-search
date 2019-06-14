import { hasNextPage, parseHeader } from '.';

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
});

