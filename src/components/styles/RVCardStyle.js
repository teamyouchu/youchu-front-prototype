import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 260px;
  height: 288px;
  margin-right: 20px;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  title: props.title,
}))`
  display: block;
  width: 130px;
  height: 130px;
  border: 1px solid #dedede;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  margin: 5px;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const Category = styled.div`
  font-family: 'SHSN-M';
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: #808084;
  font-size: 11px;
  padding: 6px 8px;
  margin-bottom: 5px;
`;

export const ChannelName = styled.div`
  font-family: 'SHSN-M';
  font-size: 18px;
  padding: 5px 5px 5px 0;

  width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SubscriberCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  color: #94969b;
  padding-bottom: 5px;
`;

export const StarRatings = styled.div`
  position: relative;
  padding: 0px 5px 15px 0;
`;

export const StarBase = styled.div`
  color: #d8d8d8;
  z-index: 0;
`;

export const StarFill = styled.div`
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
  padding: 0px 5px 15px 0;
`;

export const ReviewCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  color: #94969b;
  padding-bottom: 15px;
`;

export const BestReviewTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 12px;
  padding-bottom: 5px;
`;

export const BestReview = styled.div`
  font-family: 'SHSN-L';
  font-size: 12px;
  width: 250px;
  color: #808084;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
