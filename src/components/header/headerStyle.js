import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BarIcon = styled(FontAwesomeIcon)`
  color: white;
  position: relative;
  top: 1px;
  right: 2px;
  font-size: 14px;
`;

export const Logo = styled.span`
  font-family: 'SCD-9';
  font-size: 29px;
  padding: 10px 4px;
  margin-right: 47px;
`;

export const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  margin: 0px 35px;
  z-index: 2;
`;

export const Background = styled.div`
  width: 1100px;
  height: 60px;
  background: white;
  display: flex;
  padding: 10px 0px;
`;

export const LoginButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    font-size: 12px;
    margin-left: 20px;
    border-radius: 0px;
    width: 80px;
    height: 38px;
  }
`;

export const ReviewButton = styled(LoginButton)`
  &&& {
    margin-left: 0px;
    width: 140px;
  }
`;
export const RegisterButton = styled(LoginButton)`
  &&& {
    margin-left: 26px;
    width: 100px;
  }
`;

export const Search = styled(Input)`
  width: 350px;
  margin-left: 210px;
  &&& > input {
    border-radius: 40px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
