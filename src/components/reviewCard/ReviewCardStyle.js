import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RvContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  color: #000000;
  &:hover {
    color: #000000;
  }

  @media ${(props) => props.theme.tablet} {
    width: 27vw;
  }
  @media ${(props) => props.theme.mobile} {
    width: 35vw;
  }
`;

export const Img = styled.img`
  border: 1px solid #dedede;
  border-radius: 50%;
  width: 130px;
  height: 130px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.tablet} {
    width: 50%;
    height: auto;
  }
`;

export const RvInfoContainer = styled.div`
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const RvCategory = styled.div`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 6px 8px;
  margin-bottom: 10px;

  @media ${(props) => props.theme.tablet} {
    background: #ffffff 0% 0% no-repeat padding-box;
    padding: 0;
    margin-bottom: 5px;
  }
`;

export const RvCategoryText = styled.div`
  font-family: 'SHSN-M';
  font-size: 11px;
  line-height: 14px;
  color: #808084;
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

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
    line-height: 18px;
    padding: 0 5px 5px 0;
    max-width: 50%;
  }
`;

export const SubscriberCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  padding-bottom: 8px;
  @media ${(props) => props.theme.tablet} {
    font-size: 11px;
    line-height: 14px;
    padding-bottom: 5px;
  }
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  padding: 0 5px 15px 0;

  @media ${(props) => props.theme.tablet} {
    font-size: 11px;
    line-height: 14px;
    padding: 0 5px 0 0;
  }
`;

export const ReviewCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  padding-bottom: 15px;

  @media ${(props) => props.theme.tablet} {
    font-size: 11px;
    line-height: 14px;
    padding-bottom: 0;
  }
`;

export const BestReviewTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 12px;
  line-height: 15px;
  padding-bottom: 5px;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
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

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;
