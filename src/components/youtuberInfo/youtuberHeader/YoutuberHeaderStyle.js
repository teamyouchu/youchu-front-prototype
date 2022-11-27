import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const YoutuberHeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  @media ${(props) => props.theme.tablet} {
    height: 188px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 12px;
    padding: 0 24px 30px 24px;
    border-bottom: 1px solid #dedede;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const YoutuberImg = styled.img`
  width: 130px;
  height: 130px;
  border: 1px solid #dedede;
  border-radius: 50%;
  margin-right: 20px;
  position: relative;
  @media ${(props) => props.theme.tablet} {
    width: 110px;
    height: 110px;
    margin: 0 0 15px 0;
  }
`;

export const InfoFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${(props) => props.theme.tablet} {
    align-items: center;
    width: 100%;
  }
`;

export const SpanFlex = styled.div`
  display: flex;
  flex-direction: row;
  @media ${(props) => props.theme.tablet} {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const YoutuberName = styled(Link)`
  font-family: 'SHSN-B';
  text-align: left;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 0px;
  color: #000000;
  :hover {
    color: #000000;
  }
  margin-bottom: 6px;
  @media ${(props) => props.theme.tablet} {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 5px;
  }
`;

export const Span = styled.span`
  font-family: 'SHSN-B';
  text-align: left;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 0px;
  color: #000000;
`;

export const OneStar = styled(Span)`
  font-family: 'SHSN-R';
  font-size: 16px;
  line-height: 18px;
  color: #f8d26a;
`;

export const YoutuberRating = styled(Span)`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  margin: 0 5px;
`;

export const ReviewCount = styled(YoutuberRating)`
  color: #94969b;
  margin: 0;
`;

export const ReviewButton = styled(Link)`
  width: 240px;
  height: 38px;
  border-radius: 5px;
  background-color: #5c7fdf;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ReviewButtonSpan = styled(ReviewCount)`
  font-family: 'SHSN-B';
  color: #ffffff;
`;
