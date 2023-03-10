import axios from "axios";

export const addFavorites = (character) => {
  return async function (dispatch) {
    try {
      let result = await axios.post(
        `http://localhost:3001/rickandmorty/fav`,
        character
      );
      dispatch({
        type: "ADD_FAV",
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeFavorites = (id) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      console.log(result)
      dispatch({
        type: "REMOVE_FAV",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    try {
      let result = await axios.get(
        `http://localhost:3001/rickandmorty/fav`
      );
      dispatch({
        type: "GET_FAV",
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: "ORDER",
    payload: id,
  };
};
