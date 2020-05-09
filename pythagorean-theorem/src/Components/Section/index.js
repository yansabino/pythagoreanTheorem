import React, {useState} from "react";
import axios from "axios";
import {
  SectionContainer,
  StyledImage,
  FormContainer,
} from "../../style/Section";
import Triangle from "../../images/kisspng-right-triangle-hypotenuse-mathematics-trigonometry-5b39d436497ff0.4595208215305165343011.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


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
  const [response, setResponse] = useState({})

  const handleInputChange = (e) =>
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });

  const calculate = (e) => {
    e.preventDefault()

    const request = axios.post(url, form);
    
    
    request
      .then(() => {
        setResponse(response)
        window.alert("Dados inputados com sucesso");
        
        console.log(response)
        
      })
      .catch((err) => {
        console.log(err);
        window.alert("Houve um erro na hora de enviar os dados");
      });

      setForm({})
  };

  const formRender = inputForm.map((input) => (
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

  return (
    <SectionContainer>
      <StyledImage src={Triangle} alt="triangulo" />
      <FormContainer onSubmit={calculate}>
        {formRender}
        <Button color="secondary" type="submit">
          Calcular
        </Button>
      </FormContainer>
    </SectionContainer>
  );
};

export default Section;
