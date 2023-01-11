import styled from 'styled-components';

export const FirstEvalYoutuberContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid #dedede;
  padding: 18px 0;
  &:last-child {
    border-bottom: 0;
  }
`;

export const Thumbnail = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const GroupBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${({ marginB }) => marginB};
`;

export const Category = styled.div`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  padding: 5px 9px;

  font-family: 'SHSN-M';
  text-align: center;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0px;
  color: #808084;
`;

export const CategorySpan = styled.span`
  font-family: 'SHSN-M';
  text-align: center;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0px;
  color: #808084;
`;

export const FirstEvalYoutuberName = styled(CategorySpan)`
  font-family: 'SHSN-M';
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #000000;
`;

export const Star = styled.span`
  font-family: 'SHSN-M';
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0px;
  color: #f8d26a;
`;

export const Ratings = styled(FirstEvalYoutuberName)`
  font-size: 11px;
  line-height: 14px;
  margin: 0 5px 0 5.6px;
`;

export const ReviewCount = styled(Ratings)`
  margin: 0;
  color: #94969b;
`;
