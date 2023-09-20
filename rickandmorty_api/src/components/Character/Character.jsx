import { useEffect, useState } from "react";
import "./character.css";

export function Character() {
  //useEfect y useState hooks
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, [setCharacter]);

  //useEfect recibe una funcion callback, es decir el codigo a ejecutar
  //recibe cuando se va a ejecutar

  return (
    <ul>
      {character.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <img src={item.image} alt="" />
          <p>{item.species}</p>
          <h4>First seen in:</h4>
          <p>{item.location["name"]}</p>
        </li>
      ))}
    </ul>
  );
}
