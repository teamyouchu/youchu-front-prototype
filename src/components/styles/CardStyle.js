import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RvContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  height: 288px;
  color: #000000;
  &:hover{
    color: #000000; 
  }
`;

export const RcmdContainer = styled(RvContainer)`
  flex-direction: row;
  border: 1px solid #dedede;
  border-radius: 10px;
  width: 350px;
  height: 108px;
`;

export const Img = styled.img`
  border: 1px solid #dedede;
  border-radius: 50%;
  width: ${(props) => props.width || '130px'};
  height: ${(props) => props.height || '130px'};
  margin: ${(props) => props.margin || '0 0 10px 0'};
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const Category = styled.div`
  font-family: 'SHSN-M';
  font-size: 11px;
  line-height: 14px;
  color: #808084;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 6px 8px;
`;

export const RvCategory = styled(Category)`
  margin-bottom: 10px;
`;

export const RvChannelName = styled.div`
  font-family: 'SHSN-M';
  font-size: 18px;
  line-height: 22px;
  padding: 0 5px 8px 0;

  max-width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const RcmdChannelName = styled(RvChannelName)`
  font-size: 16px;
  line-height: 21px;
  padding: 0 0 3px 0;

  max-width: 184px;
`;

export const SubscriberCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  padding-bottom: 8px;
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  padding: ${(props) => props.padding || '0 5px 15px 0'};
`;

export const ReviewCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  padding-bottom: 15px;
  padding-bottom: ${(props) => props.padding_B || '15px'};
`;

export const BestReviewTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 12px;
  line-height: 15px;
  padding-bottom: 5px;
`;

export const BestReview = styled.div`
  font-family: 'SHSN-L';
  font-size: 12px;
  line-height: 15px;
  color: #808084;

  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;
