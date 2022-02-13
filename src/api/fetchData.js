import { API_BASE_URL } from '../utils/constants';

export const fetchdata = (url) => {
  return fetch(url).then((response) => response.json());
};

export const getCategories = async (apiRef) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "category")]]'
      )}&lang=en-us&pageSize=30`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
