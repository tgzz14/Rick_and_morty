import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import d from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <>
      {character ? (
        <div className={d.container}>
          <div>
            <h1 className={d.name}>{character.name} </h1>
            <h3>Status  : {character.status}</h3>
            <h3>Species : {character.specie}</h3>
            <h3>Gender  : {character.gender}</h3>
            <h3>Origin  : {character.origin}</h3>
          </div>
          <div>
            <img src={character.image} alt={character.name} className={d.img} />
          </div>
        </div>
      ) : (
        ""
      )}
      <button className={d.button} onClick={() => navigate("/home")}>
      Click here to go Home!!
      </button>
    </>
  );
}
