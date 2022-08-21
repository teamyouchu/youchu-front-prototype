import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 2;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;

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
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 100%;
    padding: 24px 24px 10px 24px;
    align-items: flex-start;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    align-items: flex-start;
    flex-direction: ${({ M_direction }) => M_direction || 'row'};
  }
`;

export const LogoLink = styled(Link)`
  height: 40px;
  margin-right: 80px;
  @media ${(props) => props.theme.tablet} {
    margin: 0 0 40px 0;
  }
`;

export const LogoImg = styled.img`
  width: 62px;
  height: 40px;
`;

export const HeaderNavBox = styled.div`
  @media ${(props) => props.theme.tablet} {
    position: absolute;
    top: 80px;
  }
`;

export const HeaderNav = styled(NavLink)`
  font-family: 'SHSN-R';
  text-align: center;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-left: 40px;
  :hover {
    color: #000000;
  }
  &.active {
    font-family: 'SHSN-B';
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
    line-height: 21px;
    margin: 0 20px 0 0;
    :last-child {
      margin: 0;
    }
  }
`;

export const SearchNav = styled(NavLink)`
  &.active {
    display: none;
  }
  cursor: default;
`;

export const RegisterBtn = styled.button`
  width: 100px;
  height: 38px;
  background: #eb3323 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-left: 20px;
  border: 0;

  font-family: 'SHSN-M';
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  :hover {
    background-color: #e02514;
    cursor: pointer;
  }
  @media ${(props) => props.theme.tablet} {
    width: 80px;
    height: 30px;
    margin-left: 14px;
    font-size: 13px;
    line-height: 17px;
  }
`;

export const HeaderLink = styled(Link)`
  height: 38px;
  @media ${(props) => props.theme.tablet} {
    height: 30px;
  }
`;

export const LoginButton = styled(RegisterBtn)`
  width: 80px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  margin-left: 10px;
  color: #000000;
  :hover {
    background-color: #ebebeb;
  }
  @media ${(props) => props.theme.tablet} {
    margin-left: 8px;
    width: 60px;
  }
`;

export const GoogleAvatar = styled.img`
  width: 38px;
  height: 38px;
  margin-left: 10px;
  border-radius: 50%;
  border: 1px solid #dedede;
  @media ${(props) => props.theme.tablet} {
    width: 30px;
    height: 30px;
  }
`;
