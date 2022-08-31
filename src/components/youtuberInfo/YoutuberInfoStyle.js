import styled from 'styled-components';

export const YoutuberContainer = styled.div`
  padding: 80px 0 60px 0;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 125px 0 30px 0;
  }
`;

export const YoutuberBannerBox = styled.div`
  width: 100%;
  /* max-width: 1700px; */
  height: auto;
  overflow: hidden;
  @media ${(props) => props.theme.tablet} {
    position: relative;
    height: 195px;
  }
  @media ${(props) => props.theme.mobile} {
    height: 110px;
  }
`;

// TODO 서지수 배너 디자인 확인
export const YoutuberBanner = styled.img`
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    width: auto;
    position: relative;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

// TODO 서지수 배너 디자인 확인
export const GrayBar = styled.div`
  height: 320px;
  background-color: #75787a;
  @media ${(props) => props.theme.tablet} {
    height: 195px;
  }
  @media ${(props) => props.theme.mobile} {
    height: 110px;
  }
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
