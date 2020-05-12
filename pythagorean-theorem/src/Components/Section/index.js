import React, { useState } from "react";
import axios from "axios";
import {
  SectionContainer,
  StyledImage,
  FormContainer,
  StyledUnorderedList,
  StyledListItem,
} from "../../style/Section";
import Triangle from "../../images/kisspng-right-triangle-hypotenuse-mathematics-trigonometry-5b39d436497ff0.4595208215305165343011.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from "../Loader/index";

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
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const request = axios.post(url, form);

      request
        .then((response) => {
          setCatOp(response.data.cat_op);
          setCatAdj(response.data.cat_adj);
          setHipotenusa(response.data.hip.toFixed(1));
          setLoading(false);
        })
        .catch(() => {
          window.alert("Houve um erro na hora de enviar os dados");
          setLoading(false);
        });
    }
    setForm({ cat_op: "", cat_adj: "" });
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
      value={form[input.name]}
      color="primary"
    />
  ));

  const responseList =
    catOp && catAdj && hipotenusa ? (
      <StyledUnorderedList>
        {catOp && <StyledListItem>Cateto Oposto (a): {catOp}</StyledListItem>}
        {catAdj && (
          <StyledListItem>Cateto Adjacente (b): {catAdj}</StyledListItem>
        )}
        {hipotenusa && (
          <StyledListItem>Hipotenusa (c): {hipotenusa}</StyledListItem>
        )}
      </StyledUnorderedList>
    ) : (
      loading && <Loader />
    );

  return (
    <SectionContainer>
      <StyledImage src={Triangle} alt="triangulo" />
      <FormContainer onSubmit={calculate}>
        {renderedForm}
        <Button
          color="primary"
          type="submit"
          variant="outlined"
          style={{ margin: 20 }}
        >
          Calcular
        </Button>
      </FormContainer>
      {responseList}
    </SectionContainer>
  );
};

export default Section;
