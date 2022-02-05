export const fetchdata = (url) => {
  return fetch(url).then((response) => response.json());
};
