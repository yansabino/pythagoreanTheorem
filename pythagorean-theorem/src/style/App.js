import styled from 'styled-components'
import { device } from './Responsive/devices'

export const AppContainer = styled.body`
  margin: auto;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  z-index: 0;

  @media ${device.mobileS}{
    max-width: 374px;
  }
  @media ${device.mobileM}{
    max-width: 424px;
  }
  @media ${device.mobileL}{
    max-width: 767px;
  }
  @media ${device.tablet}{
    max-width: 1023px;
  }
  @media ${device.laptop}{
    max-width: 1687px;
  }
  @media ${device.laptopL}{
    max-width: 2559px;
  }
  @media ${device.desktop}{
    max-width: 3500px;
  }
`
