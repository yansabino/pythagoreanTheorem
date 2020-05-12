import styled from "styled-components";
import { device } from "./Responsive/devices";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  background-color: #0961b2;
  color: white;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1;

  @media ${device.mobileS} {
    flex-wrap: wrap;
  }
  @media ${device.mobileM} {
    flex-wrap: wrap;
  }
  @media ${device.mobileL} {
    flex-wrap: wrap;
  }
`;
