import styled from 'styled-components';

export const YoutuberHeaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  @media ${(props) => props.theme.tablet} {
    height: 188px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 0 24px 30px 24px;
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

export const Span = styled.span`
  font-family: 'SHSN-B';
  text-align: left;
  font-size: 28px;
  line-height: 35px;
  letter-spacing: 0px;
  color: #000000;
`;

export const YoutuberName = styled(Span)`
  margin-bottom: 6px;
  @media ${(props) => props.theme.tablet} {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 5px;
  }
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

export const ReviewButton = styled.div`
  width: 240px;
  height: 38px;
  border-radius: 5px;
  background-color: #5c7fdf;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ReviewButtonSpan = styled(ReviewCount)`
  font-family: 'SHSN-B';
  color: #ffffff;
`;
