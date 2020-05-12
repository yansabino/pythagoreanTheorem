import React from "react";
import { HeaderContainer, StyledTitle, StyledImage } from "../../style/Header";

const Header = () => {
  return (
    <HeaderContainer>
      <StyledImage
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1024px-Flag_of_Greece.svg.png"
        alt="Pitagoras"
      />
      <StyledTitle>Teorema de Pitagoras</StyledTitle>
      <StyledImage
        src="https://static.todamateria.com.br/upload/pi/ta/pitagoras-cke.jpg"
        alt="Pitagoras"
      />
    </HeaderContainer>
  );
};

export default Header;
