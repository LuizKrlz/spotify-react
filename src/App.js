import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/reactotron';

import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';
import Store from './store';

const App = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);
export default App;
