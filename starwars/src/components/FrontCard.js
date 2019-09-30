import React from "react";
import styled from "styled-components";

// CARD STYLING STARTS //
const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  width: 40%;
  background: rgba(255, 255, 255);
  margin-bottom: 30px;
  border-radius: 10px;
`;

const NameH1 = styled.h1`
  font-size: 40px;
  color: red;
`;

const PeopleInfoP = styled.p`
  font-size: 20px;
`;

const CardsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-center: center;
  align-items: center;
  width: 100%;
`;

// CARD STYLING END //

export default function FrontCard(props) {
  return (
    <CardsContainer className="Front card-container">
      <CardsContent className="card-content" key={props.id}>
        <NameH1>{props.name}</NameH1>
        <PeopleInfoP>
          <strong>Height: </strong> {props.height}
        </PeopleInfoP>
        <PeopleInfoP>
          <strong>Mass: </strong> {props.mass}
        </PeopleInfoP>
        <PeopleInfoP>
          <strong>Hair Color: </strong> {props.hair_color}
        </PeopleInfoP>
        <PeopleInfoP>
          <strong>Skin Color: </strong>
          {props.skin_color}
        </PeopleInfoP>
        <PeopleInfoP>
          <strong>Eye Color: </strong> {props.eye_color}
        </PeopleInfoP>
        <PeopleInfoP>
          <strong>Birth Year: </strong> {props.birth_year}
        </PeopleInfoP>
        <PeopleInfoP>
          <strong>Gender: </strong> {props.gender}
        </PeopleInfoP>
      </CardsContent>
    </CardsContainer>
  );
}

//     "name": "Luke Skywalker",
//     "height": "172",
//     "mass": "77",
//     "hair_color": "blond",
//     "skin_color": "fair",
//     "eye_color": "blue",
//     "birth_year": "19BBY",
//     "gender": "male",
