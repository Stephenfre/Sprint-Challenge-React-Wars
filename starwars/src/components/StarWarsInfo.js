import React, { useState, useEffect } from "react";
import axios from "axios";
import FrontCard from "./FrontCard";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
`;

export default function StarWarsInfo(props) {
  const [starWars, setStarWars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const starWarsData = await axios.get("https://swapi.co/api/people/");
        console.log(starWarsData);
        setStarWars(starWarsData.data.results);
      } catch (err) {
        console.log("try again" + err);
      } //try block end
    } // end of fechData()

    fetchData();
  }, []);

  return (
    <MainContainer className="StarWars-Conatainer">
      {starWars.map((starWar, index) => {
        return (
          <FrontCard
            key={index}
            name={starWar.name}
            height={starWar.height}
            mass={starWar.mass}
            hair_color={starWar.hair_color}
            skin_color={starWar.skin_color}
            eye_color={starWar.eye_color}
            birth_year={starWar.birth_year}
            gender={starWar.gender}
          />
        );
      })}
    </MainContainer>
  );
}
// "name": "Luke Skywalker",
//     "height": "172",
//     "mass": "77",
//     "hair_color": "blond",
//     "skin_color": "fair",
//     "eye_color": "blue",
//     "birth_year": "19BBY",
//     "gender": "male",
