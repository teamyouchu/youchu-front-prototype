import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

export const Logo = styled.span`
  font-family: 'SCD-9';
  font-size: 30px;
  padding: 5px;
  margin-right: 30px;
`;

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

export const Background = styled.div`
  background: white;
  display: flex;
  height: auto;
  padding: 10px 0px;
`;

export const HeaderButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    font-size: 10px;
    margin-left: 20px;
  }
`;

export const Search = styled(Input)`
  width: 30%;
  margin-left: 100px;
  &&& > input {
    border-radius: 40px;
  }
`;
