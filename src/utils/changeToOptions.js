export function changeToOptions(arr) {
  return arr?.map((item) => ({
    name: item,
    value: item,
  }));
}
