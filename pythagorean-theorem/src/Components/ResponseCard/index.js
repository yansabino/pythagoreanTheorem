import React from "react";
import { CardContainer } from "../../style/card";

const ResponseCard = (props) => {
    console.log(props)
  const isPropsTrue = props && (
    <CardContainer>
      <ul>
        <li>Cateto Oposto(a) : {props.catOp}</li>
        <li>Cateto Adjacente(b): {props.catAdj}</li>
        <li>Hipotenusa(c): {props.hip}</li>
      </ul>
    </CardContainer>
  );
  return <div>{isPropsTrue}</div>;
};

export default ResponseCard;
