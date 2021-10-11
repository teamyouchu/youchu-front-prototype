import styled from 'styled-components';

export const RowContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

export const RowTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 20px;
  margin-bottom: 5px;
`;

export const RowDescription = styled.div`
  font-family: 'SHSN-L';
  font-size: 14px;
  color: #94969b;
  margin-bottom: 20px;
`;

export const Slider = styled.div`
  position: relative;
  margin-bottom: 60px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow: hidden;
`;

export const Img = styled.img.attrs((props) => ({
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
