import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
  background-color: #ffffff;

  box-shadow: 0;
  transition: box-shadow 0.5s;
  &.scrolled {
    box-shadow: 0 0 15px #dedede;
    border: 1px solid #dedede;
  }
`;

export const HeaderBox = styled.div`
  width: 1100px;
  height: 80px;
  margin: 0px auto;
  display: flex;
  padding: 27px 0 13px 0;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  height: 40px;
  margin-right: 80px;
  /* font-family: 'SCD-9';
  text-align: left;
  font-size: 29px;
  line-height: 34px;
  letter-spacing: 0px;
  color: #000000;
  &:hover {
    color: #000000;
  } */
`;

export const LogoImg = styled.img`
  width: 62px;
  height: 40px;
`;

export const HeaderNav = styled(NavLink)`
  font-family: 'SHSN-R';
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-left: 40px;
  &:hover {
    color: #000000;
  }
  &.active {
    font-family: 'SHSN-B';
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 350px;
  height: 38px;
  border: 1px solid #dedede;
  padding: 9px 20px;
  &:focus-within {
    border: 1px solid #3ea6ff;
  }
`;

export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.input`
  border: none;
  width: 248px;
  height: 18px;
  margin: 0 20px;

  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  &::placeholder {
    color: #94969b;
  }
  &:focus {
    outline: none;
  }
`;

export const HeaderButton = styled(Button)`
  font-family: 'SHSN-M';
  &&& {
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0px;
    border-radius: 0px;
    width: 80px;
    height: 38px;
    padding: 0;
    margin: 0;
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
    background-color: #ffffff;
    border: 1px solid #dedede;
    color: #000000;
  }
`;
