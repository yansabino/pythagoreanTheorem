import React, { useState } from "react";
import axios from "axios";
import {
  SectionContainer,
  StyledImage,
  FormContainer,
} from "../../style/Section";
import Triangle from "../../images/kisspng-right-triangle-hypotenuse-mathematics-trigonometry-5b39d436497ff0.4595208215305165343011.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ResponseCard  from '../ResponseCard'
const inputForm = [
  {
    name: "cat_op",
    type: "number",
    label: "Cateto Oposto (a)",
    required: true,
  },
  {
    name: "cat_adj",
    type: "number",
    label: "Cateto Adjacente (b)",
    required: true,
  },
];

const url = "https://atlas-231814.appspot.com/calcula";

const Section = () => {
  const [form, setForm] = useState({});
  const [hipotenusa, setHipotenusa] = useState("");
  const [catOp, setCatOp] = useState("");
  const [catAdj, setCatAdj] = useState("");

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value),
    }); 
  };

  const calculate = (e) => {
    e.preventDefault();
    
    if (form.cat_op <= 0 || form.cat_adj <= 0) {
      window.alert("Insira apenas números positivos");
    } else {
      const request = axios.post(url, form);

      request
        .then((response) => {
          setCatOp(response.data.cat_op)
          setCatAdj(response.data.cat_adj)
          setHipotenusa(response.data.hip.toFixed(1));
          window.alert("Calculo realizado com sucesso!");
        })
        .catch(() => {
          window.alert("Houve um erro na hora de enviar os dados");
        });
    }
    setForm({});
  };

  const renderedForm = inputForm.map((input) => (
    <TextField
      variant="outlined"
      margin="normal"
      autoFocus
      fullWidth
      onChange={handleInputChange}
      name={input.name}
      type={input.type}
      label={input.label}
      required={input.required}
      color="primary"
    />
  ));

  //  const responseObject = {
  //    catOp: catOp,
  //    catAdj: catAdj,
  //    hip: hipotenusa
  //  } 

  return (
    <SectionContainer>
      <StyledImage src={Triangle} alt="triangulo" />
      <FormContainer onSubmit={calculate}>
        {renderedForm}
        <Button color="secondary" type="submit">
          Calcular
        </Button>
        {/* { responseObject &&  <ResponseCard hip={hipotenusa} catOp={catOp} catAdj={catAdj}/>}   */}
        {catOp && <h1>Cateto Oposto (a): {catOp}</h1>}
        {catAdj && <h1>Cateto Adjacente (b): {catAdj}</h1>}
        {hipotenusa && <h1>Hipotenusa (c): {hipotenusa}</h1>}
      </FormContainer>
    </SectionContainer>
  );
};

export default Section;
