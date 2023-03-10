import c from "./styleCard.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, removeFavorites } from "../../redux/actions";
import {  useState, useEffect } from "react";


function Card({name, id, image, gender, specie, addFavorites, removeFavorites, myFavorites, onClose}) {

  const character = {
    id,
    name,
    gender,
    image
  }
  
const [isFav, setIsFav] = useState(false);

  var handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFavorites(id);
    } else {
      setIsFav(true);
      addFavorites(character)
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
          //changeIsFav(true)
       }
    });
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [myFavorites]);



  return (
    <div className={c.containerTwo}>
      {
   isFav ? (<button className={c.buttonFav} onClick={handleFavorite}>❤️</button>) : (<button  className={c.buttonFav} onClick={handleFavorite}>🤍</button>)
      }
      <button className={c.button} onClick={onClose}>
        <span className={c.x}>X</span>
        <span className={c.close}>close</span>
      </button>
      <img className={c.img} src={image} alt={name} />
      <Link to={`/detail/${id}`}>
        <h2 className={c.name}>{name}</h2>
      </Link>
      <h3 className={c.nameSpecies}>
        {" "}
        {specie} {gender}
      </h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: function (character) {
      dispatch(addFavorites(character))
    },
    removeFavorites: function (id) {
      dispatch(removeFavorites(id))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);

