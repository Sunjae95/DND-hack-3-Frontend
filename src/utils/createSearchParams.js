export function createSearchParams(params) {
  if (params == null) {
    return '';
  }

  return Object.keys(params).reduce((prev, cur) => {
    if (params[cur] == null) {
      return prev;
    }

    if (prev === '') {
      return cur + '=' + params[cur];
    }

    return prev + '&' + cur + '=' + params[cur];
  }, '');
}
