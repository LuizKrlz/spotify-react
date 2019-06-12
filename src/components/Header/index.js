import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/16242020?v=4" alt="Usuario" />
      Luiz Carlos
    </User>
  </Container>
);

export default Header;
