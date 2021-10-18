import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  width: 1100px;
  height: 350px;
  margin: 0 auto;
  margin-bottom: 50px;
  justify-content: space-between;
`;

export const TextField = styled.p`
  font-size: 45px;
  font-family: 'SHSN-B';
  height: auto;
  &&& {
    margin: 130px 0px;
  }
`;

export const RedSpan = styled.span`
  color: red;
`;

export const BannerImg = styled.img`
  width: 422px;
  height: 276px;
  margin: 49px;
`;
