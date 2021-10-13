import styled from 'styled-components';

export const RowContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

export const RowTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 5px;
`;

export const RowDescription = styled.div`
  font-family: 'SHSN-L';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  margin-bottom: 20px;
`;

export const ArrowImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 15px;
  height: 15px;
`;

export const HandlePrev = styled.button`
  background: #ffffff;
  border: 0;
  cursor: pointer;
  position: relative;
  top: 75px;
  left: -35px;
  width: 35px;
`;

export const HandleNext = styled.button`
  background: #ffffff;
  border: 0;
  cursor: pointer;
  position: relative;
  top: -302px;
  left: 1100px;
  width: 35px;
`;

export const CardContainer = styled.div`
  display: grid;
`;

export const ReviewCardContainer = styled(CardContainer)`
  white-space: nowrap;
  overflow-x: scroll;
  overflow: hidden;
  grid-template-columns: repeat(10, 1fr);
  column-gap: 20px;
  margin-bottom: 60px;
`;

export const RecommendCardContainer = styled(CardContainer)`
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  row-gap: 10px;
`;
