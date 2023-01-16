import styled from 'styled-components';

export const RecsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid #dedede;
  padding: 16px 0;
  :first-child {
    padding: 30px 0 16px 0;
  }
  :last-child {
    padding: 16px 0 30px 0;
    border-bottom: 0;
  }
`;

export const Thumbnail = styled.img`
  border: 1px solid #dedede;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-right: 16px;
`;

export const GroupBox = styled.div`
  width: calc(100% - 100px);
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${({ marginB }) => marginB};
`;

export const Span = styled.span`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #000000;
`;

export const RecsChannelName = styled(Span)`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Rating = styled(Span)`
  font-size: 14px;
  line-height: 18px;
  margin-right: 5px;
`;

export const ReviewCount = styled(Span)`
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
`;

export const Category = styled.div`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0px;
  color: #808084;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 6px 8px;
`;
