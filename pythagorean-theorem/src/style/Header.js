import styled from "styled-components";
import { device } from "./Responsive/devices";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: white;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const StyledTitle = styled.h1`
  font-size: 60px;
  margin: 0 40px;
  color: #0961b2;

  @media ${device.mobileS} {
    font-size: 15px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
  @media ${device.tablet} {
    font-size: 35px;
  }
`;

export const StyledImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media ${device.mobileS} {
    width: 40px;
    height: 40px;
  }
  @media ${device.mobileM} {
    width: 40px;
    height: 40px;
  }
  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
  }
  @media ${device.tablet} {
    width: 50px;
    height: 50px;
  }
`;
