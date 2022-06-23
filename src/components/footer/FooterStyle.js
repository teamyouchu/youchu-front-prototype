import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  width: 100%;
  height: 88px;
  border-top: 1px solid #dedede;
  opacity: 1;
`;

export const FooterBox = styled.div`
  width: 1100px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 0 24px;
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterSpan = styled(Link)`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #94969b;
  padding: 0 15px 0 15px;
  margin-bottom: 10px;
  border-right: 1px solid #DEDEDE;
  &:hover {
    color: #94969b;
    text-decoration: underline;
  }
  &:first-child {
    padding: 0 15px 0 0;
  }
  &:last-child{
    border-right: 0;
  }
`;

export const FootermailTitle = styled.span`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #94969b;
  margin-bottom: 10px;
`;

export const Footermail = styled(FootermailTitle)`
  font-family: 'SHSN-L';
`;
