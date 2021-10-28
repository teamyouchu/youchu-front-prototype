import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HeaderContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 2;
  background-color: #ffffff;

  box-shadow: 0;
  transition: box-shadow 0.5s;
  &.scrolled {
    box-shadow: 0 0 15px #dedede;
    /* border: 1px solid #dedede; */
  }
`;

export const Background = styled.div`
  width: 1100px;
  height: 80px;
  margin: 0px auto;
  display: flex;
  padding: 28px 0 14px 0;
`;

export const Logo = styled.button`
  font-family: 'SCD-9';
  font-size: 29px;
  margin-right: 51px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

export const HeaderButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    font-size: 14px;
    text-align: center;
    border-radius: 0px;
    width: 80px;
    height: 38px;
    padding: 0;
    margin: 0;
  }
`;

export const ReviewButton = styled(HeaderButton)`
  &&& {
    width: 140px;
  }
`;

export const BarIcon = styled(FontAwesomeIcon)`
  color: white;
  margin-right: 7px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 38px;
  margin-left: 240px;
  border: 1px solid #707070;
  border-radius: 30px;
  &:hover {
    border: 1px solid #3ea6ff;
  }
`;

export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 30px;
`;

export const InputYoutuber = styled.input`
  border: none;
  width: 270px;
  height: 18px;
  margin-left: 20px;

  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  &:focus {
    outline: none;
  }
`;

export const RegisterButton = styled(HeaderButton)`
  &&& {
    margin-left: 10px;
    width: 100px;
  }
`;

export const LoginButton = styled(HeaderButton)`
  &&& {
    margin-left: 20px;
    background-color: white;
    border: 1px solid #dedede;
  }
`;
