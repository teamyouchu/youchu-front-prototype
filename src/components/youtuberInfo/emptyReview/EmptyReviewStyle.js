import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NoBestReviewHeader = styled.div`
  padding: 30px 40px;
  @media ${(props) => props.theme.tablet} {
    padding: 20px 24px;
  }
`;

export const Span = styled.span`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #000000;
`;

export const InfoTitle = styled(Span)`
  margin-bottom: ${({ margin_B }) => margin_B || '25px'};
  ::before {
    content: '유튜버';
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 20px;
  }
`;

export const NoBestReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0 132px 0;
  @media ${(props) => props.theme.tablet} {
    margin: 15px 0 65px 0;
  }
`;

export const NoBestReviewTitle = styled(Span)`
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 2px;
`;

export const NoBestReviewSub = styled(Span)`
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  margin-bottom: 20px;
`;

export const ReviewWriteBtn = styled(Link)`
  width: 240px;
  height: 38px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #5c7fdf;
  border-radius: 5px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'SHSN-B';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #5c7fdf;
`;
