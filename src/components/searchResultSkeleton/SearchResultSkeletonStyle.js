import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

export const SearchResultBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ page }) => (page === 'search' ? '5px 16px' : '5px 20px')};
  :first-child {
    margin-top: 5px;
  }
  :last-child {
    margin-bottom: 5px;
  }
  /* &.item_over {
    background-color: #f9fafc;
    cursor: pointer;
    color: #000000;
  } */
`;

export const SkeletonSearchResultImg = styled(Skeleton)`
  && {
    width: 30px;
    height: 30px;
  }
  margin-right: 10px;
`;

export const SkeletonSearchResultName = styled(Skeleton)`
  margin-right: 5px;
  && {
    width: 100px;
    height: 18px;
  }
`;

export const SkeletonSearchResultSubscribers = styled(Skeleton)`
  && {
    width: 70px;
    height: 13px;
  }
`;
