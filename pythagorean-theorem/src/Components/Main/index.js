import React from 'react';
import {MainContainer} from '../../style/Main'
import Header from '../Header'
import Section from '../Section/index'
import Footer from '../Footer'

const Main = () => {
  return (
    <MainContainer>
        <Header/>
        <Section/>
        <Footer/>
    </MainContainer>
  );
}

export default Main;
