const API = "https://rickandmortyapi.com/api";

export const getCharacters = async (pageNumber, search) => {
  try {
    const response = await fetch(
      `${API}/character?page=${pageNumber}&name=${search}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCharactersById = async (id) => {
  try {
    const response = await fetch(`${API}/character/${id}`);
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
