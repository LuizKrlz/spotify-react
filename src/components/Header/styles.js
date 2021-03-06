import styled from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  height: 24px;
  width: 185px;
  padding: 6px 7px 6px 26px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;
  input {
    flex: 1;
    font-size: 13px;
    color: #121212;
    border: 0;
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &:-moz-placeholder {
      color: #121212;
      opacity: 1;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #fff;
  img {
    border-radius: 50%;
    width: 27px;
    height: 27px;
    margin-right: 5px;
  }
`;
