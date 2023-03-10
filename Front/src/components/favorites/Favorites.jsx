import { connect, useDispatch  } from "react-redux";
import {
  
  filterCards,
  orderCards,
  removeFavorites,
} from "../../redux/actions";
import f from "./favorites.module.css";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={f.cont}>
        <select
          onChange={(e) => dispatch(orderCards(e.target.value))}
          className={f.select}
        >
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>

        <select
          onChange={(e) => dispatch(filterCards(e.target.value))}
          className={f.select}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={f.container1}>
        {myFavorites.map((c) => (
          <div key={c.id} className={f.container}>
            { (
              <button
                className={f.buttonFav}
                onClick={ () => dispatch(removeFavorites(c.id)) 
                }
              >
                ❤️
              </button>
            ) }
            <img src={c.image} alt={c.name} className={c.img} />
            <h1 className={f.name}>
              {c.name} {c.id}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
