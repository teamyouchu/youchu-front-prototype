import styled from 'styled-components';

export const StarRatings = styled.div`
  position: relative;
  padding-bottom: ${(props) => props.paddingB};
`;

export const StarBase = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 18px;
  color: #d8d8d8;
  z-index: 0;
`;

export const StarFill = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 18px;
  color: #f8d26a;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  width: ${(props) => props.ratings + '%'};
`;
