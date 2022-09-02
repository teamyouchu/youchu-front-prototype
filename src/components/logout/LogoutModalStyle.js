import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoutModal = styled.div`
  width: 192px;
  height: 106px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000029;
  opacity: 1;
  position: absolute;
  right: 0px;
`;

export const MyInfoBtn = styled.div`
  padding: 16px;
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  cursor: pointer;
  :hover {
    color: #000000;
    background-color: #f9f9f9;
  }
`;

export const LogoutBtn = styled(MyInfoBtn)`
  color: #94969b;
  :hover {
    color: #94969b;
  }
`;
