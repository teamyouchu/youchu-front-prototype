import styled from 'styled-components';

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
    height: 120px;
  }
`;

export const YoutuberBanner = styled.img`
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    width: auto;
    position: relative;
    height: 100%;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

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
