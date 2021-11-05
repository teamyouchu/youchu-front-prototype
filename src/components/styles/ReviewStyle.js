import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
  margin-top: 30px;
`;

export const ReviewContainer = styled(FlexContainer)`
  height: 400px;
  width: 100%;
  padding: 20px 0px 20px 40px;
`;

export const BoldSpan = styled.span`
  font-family: 'SHSN-B';
  font-size: 14px;
`;

export const RegularSpan = styled.span`
  font-size: 14px;
  font-family: 'SHSN-R';
  margin-bottom: 20px;
`;

export const DateSpan = styled.span`
  color: #94969b;
  font-size: 12px;
  font-family: 'SHSN-M';
  margin: 5px 0px 20px;
`;

export const ReviewContent = styled(BoldSpan)`
  font-size: 18px;
`;

export const StarBase = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 18px;
  color: #d8d8d8;
  z-index: 0;
`;

export const StarRatings = styled.div`
  position: relative;
  margin-top: 5px;
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
  width: ${(props) => props.ratings + '%'};
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  padding: 0px 5px 15px 0;
`;
