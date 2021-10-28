import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 1170px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

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

export const RowContainer = styled.div`
  width: ${(props) => props.width || '1170px'};
  margin: 0 auto;
`;

export const RowTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 5px;
  margin-left: ${(props) => props.left || '0px'};
`;

export const RowDescription = styled.div`
  font-family: 'SHSN-L';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  margin-bottom: 20px;
  margin-left: ${(props) => props.left || '0px'};
`;

export const ReviewContainer = styled.div`
  margin: 0 auto;
  width: 1170px;
  display: flex;
`;

export const ArrowImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 15px;
  height: 15px;
`;

export const HandleBtn = styled.button`
  background: #ffffff;
  border: 0;
  cursor: pointer;
  position: relative;
  top: 49px;
  width: 35px;
  height: 30px;
`;

export const ReviewCardContainer = styled.div`
  display: grid;
  width: 1100px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow: hidden;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 20px;
  margin-bottom: 60px;
`;

export const RecommendCardContainer = styled(ReviewCardContainer)`
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  row-gap: 10px;
  margin-bottom: 0;
`;
