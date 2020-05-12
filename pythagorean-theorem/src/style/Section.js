import styled from "styled-components";
import { device } from "./Responsive/devices";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto 0;
  padding: 0;
  height: auto;
  width: 100%;
  z-index: 0;
`;

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.mobileM} {
    width: 200px;
    height: 200px;
  }
  @media ${device.mobileL} {
    width: 200px;
    height: 200px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 0 auto;

  @media ${device.mobileS} {
    width: 80%;
  }
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.mobileL} {
    width: 375px;
  }
`;

export const StyledUnorderedList = styled.ul`
  text-align: start;
  width: 400px;
  padding: 10px;
  list-style-position: inside;
  border: 1px solid #0961b2;

  @media ${device.mobileS} {
    width: 270px;
  }
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.mobileL} {
    width: 375px;
  }
`;

export const StyledListItem = styled.li`
  padding: 5px 0;
  font-size: 30px;
  color: #0961b2;

  @media ${device.mobileS} {
    font-size: 20px;
  }
  @media ${device.mobileM} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: 20px;
  }
`;
