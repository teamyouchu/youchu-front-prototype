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
    width: ${({ page }) => (page === 'home' ? '28vw' : '100%')};
  }
  @media ${(props) => props.theme.mobile} {
    width: ${({ page }) => (page === 'home' ? '38vw' : '100%')};
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
  align-items: ${({ alignItems }) => alignItems || 'flex-end'};
  margin-bottom: ${({ marginB }) => marginB};

  @media ${(props) => props.theme.tablet} {
    margin-bottom: ${({ marginB_M }) => marginB_M || '0px'};
  }
`;

export const RvCategory = styled.div`
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 6px 8px;

  @media ${(props) => props.theme.tablet} {
    background: #ffffff 0% 0% no-repeat padding-box;
    padding: 0;
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
  margin-right: 5px;

  max-width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
    line-height: 18px;
    max-width: 55%;
  }
  @media ${(props) => props.theme.mobile} {
    max-width: 35%;
  }
`;

export const SubscriberCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  @media ${(props) => props.theme.tablet} {
    font-size: 11px;
    line-height: 14px;
  }
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  margin: 0 5px 0 5px;

  @media ${(props) => props.theme.tablet} {
    font-size: 11px;
    line-height: 14px;
  }
`;

export const ReviewCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;

  @media ${(props) => props.theme.tablet} {
    font-size: 11px;
    line-height: 14px;
  }
`;

export const BestReviewTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 12px;
  line-height: 15px;

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
