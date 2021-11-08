import styled from 'styled-components';

export const RvContainer = styled.div`
  display: inline-block;
  width: 260px;
  height: 288px;
  cursor: pointer;
`;

export const RcmdContainer = styled.div`
  width: 350px;
  height: 108px;
  border: 1px solid #dedede;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Img = styled.img`
  border: 1px solid #dedede;
  border-radius: 50%;
`;

export const RvImg = styled(Img)`
  display: block;
  width: 130px;
  height: 130px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const RcmdImg = styled(Img)`
  width: 72px;
  height: 72px;
  margin: 0 20px;
`;

export const Info = styled.div``;

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

export const RcmdChannelName = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 21px;
  padding-bottom: 3px;
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
  padding: 0px 5px 15px 5px;
`;

export const RcmdRatings = styled(Ratings)`
  padding: 0px 2px 5px 5px;
`;

export const ReviewCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  padding-bottom: 15px;
`;

export const RcmdReviewCount = styled(ReviewCount)`
  padding-bottom: 5px;
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
