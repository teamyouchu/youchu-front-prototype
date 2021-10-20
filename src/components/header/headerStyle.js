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

export const Logo = styled.button`
  font-family: 'SCD-9';
  font-size: 29px;
  margin-right: 47px;
  background-color: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Positioner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 0px;
  margin: 0px 35px;
  z-index: 2;
`;

export const Background = styled.div`
  width: 1100px;
  height: 60px;
  margin: 0px auto;
  background: white;
  display: flex;
  padding: 10px 0px;
`;

export const HeaderButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    font-size: 12px;
    margin-left: 20px;
    border-radius: 0px;
    width: 80px;
    height: 38px;
  }
`;

export const LoginButton = styled(HeaderButton)`
  &&& {
    background-color: white;
    border: 1px solid #efefef;
    font-weight: 600;
  }
`;

export const ReviewButton = styled(HeaderButton)`
  &&& {
    margin-left: 0px;
    width: 140px;
  }
`;
export const RegisterButton = styled(HeaderButton)`
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
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const BottomBorderBar = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  /* height: 1px; */
  width: 100%;
  top: 60px;
  /* background-color: tomato; */
  position: fixed;
`;
