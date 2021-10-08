import styled from 'styled-components';

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
  // overflow: hidden;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 15px;
  height: 25px;
`;

export const HandlePrev = styled.button`
  background: rgba(255, 255, 255, 0.5);
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4%;
  z-index: 2;
`;

export const HandleNext = styled.button`
  background: rgba(255, 255, 255, 0.5);
  border: 0;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4%;
  z-index: 2;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
