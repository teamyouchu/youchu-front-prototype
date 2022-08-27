import styled from 'styled-components';

export const YoutuberContainer = styled.div`
  padding: 80px 0 60px 0;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 125px 0 30px 0;
  }
`;

// TODO 서지수 배너 디자인 확인
export const YoutuberBanner = styled.img`
  width: 100%;
  height: auto;
  @media ${(props) => props.theme.mobile} {
    width: auto;
    height: 110px;
  }
`;

// TODO 서지수 배너 디자인 확인
export const GrayBar = styled.div`
  height: 110px;
  background-color: #75787a;
`;

export const InfoContatiner = styled.div`
  width: 1140px;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const MainInfoContainer = styled.div`
  display: flex;
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }
`;

export const LeftInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 42px;
  @media ${(props) => props.theme.tablet} {
    margin-right: 0;
  }
`;

export const RightInfoContainer = styled(LeftInfoContainer)`
  margin-right: 0;
`;
