import styled from 'styled-components';

export const RegButton = styled.button`
  width: 380px;
  height: 55px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'SHSN-M';
  font-size: 19px;
  line-height: 23px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;
