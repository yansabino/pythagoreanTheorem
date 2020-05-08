import React, {useState} from 'react';
import axios from "axios"
import {SectionContainer, StyledImage, FormContainer} from '../../style/Section'
import Triangle from '../../images/kisspng-right-triangle-hypotenuse-mathematics-trigonometry-5b39d436497ff0.4595208215305165343011.png'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const inputForm = [
  {
    name: "cat_op",
    type: "number",
    label: "Cateto Oposto (a)",
    required: true
  },
  {
    name: "cat_adj",
    type: "number",
    label: "Cateto Adjacente (b)",
    required: true
  }
]

const url = "https://atlas-231814.appspot.com/calcula"

const Section = () => {
  const [form, setForm] = useState({})

  const handleInputChange = (e) => setForm({
    ...form,
    [e.target.name]: e.target.value
  })

  const calculate = () => {
    const inputData = {
      catetos: form.name
    }

    if(inputData.catetos === "cat_op"){
      const co = 
    }
    
    const request = axios.post(url, inputData)

    request.then((response) => {
      
      window.alert("Dados inputados com sucesso")
    }).catch((err) => {
      console.log(err)
      window.alert("Houve um erro na hora de enviar os dados")
    })
  }

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
  ))

  return (
    <SectionContainer>
        <StyledImage src={Triangle} alt="triangulo"  />
        <FormContainer>
            {formRender}
            <Button color="secondary" onClick={calculate} >Calcular</Button>
        </FormContainer>
    </SectionContainer>
  );
}

export default Section;
