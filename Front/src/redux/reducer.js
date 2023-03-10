const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: state.myFavorites.filter((c) => c.id !== action.payload),
        allCharacters:state.allCharacters.filter((c) => c.id !== action.payload),
      };
    case "FILTER":
    
      const filter = state.allCharacters.filter(
        (c) => c.gender === action.payload
      );
      return {
        ...state,
        myFavorites: [...filter],
      };
    case "ORDER":
      const orderC = state.allCharacters.sort((a, b) => {
        if (action.payload === "ascendente") {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });

      return {
        ...state,
        myFavorites: [...orderC],
      };

      case 'GET_FAV':
        return {
          ...state,
        myFavorites: action.payload,
        }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
