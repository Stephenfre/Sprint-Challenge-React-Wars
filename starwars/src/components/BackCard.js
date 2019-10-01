// import React from "react";
// import styled from "styled-components";

// const CardsContainerBack = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-content: center;
//   align-items: center;
//   width: 40%;
//   background: rgba(255, 255, 255);
//   margin-bottom: 30px;
//   border-radius: 10px;
// `;

// const NameH1 = styled.h1`
//   font-size: 40px;
//   color: red;
// `;

// const PeopleInfoP = styled.p`
//   font-size: 20px;
// `;

// const CardsContentBack = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-center: center;
//   align-items: center;
//   width: 100%;
// `;

// // CARD STYLING END //

// export default function BackCard(props) {
//   return (
//     <CardsContainerBack className="backcard-container">
//       <CardsContentBack className="card-content" key={props.id}>
//         <NameH1>{props.name}</NameH1>
//         <PeopleInfoP>
//           <strong>HeightBack: </strong> {props.height}
//         </PeopleInfoP>
//         <PeopleInfoP>
//           <strong>MassBack: </strong> {props.mass}
//         </PeopleInfoP>
//         <PeopleInfoP>
//           <strong>Hair ColorBack: </strong> {props.hair_color}
//         </PeopleInfoP>
//         <PeopleInfoP>
//           <strong>Skin ColorBack: </strong>
//           {props.skin_color}
//         </PeopleInfoP>
//         <PeopleInfoP>
//           <strong>Eye ColorBack: </strong> {props.eye_color}
//         </PeopleInfoP>
//         <PeopleInfoP>
//           <strong>Birth YearBack: </strong> {props.birth_year}
//         </PeopleInfoP>
//         <PeopleInfoP>
//           <strong>GenderBack: </strong> {props.gender}
//         </PeopleInfoP>
//       </CardsContentBack>
//     </CardsContainerBack>
//   );
// }
