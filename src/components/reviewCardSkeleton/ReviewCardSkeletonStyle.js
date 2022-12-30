import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

export const RvContainer = styled.div`
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
    width: ${({ page }) => (page === 'home' ? '38vw' : '40vw')};
  }
`;

export const SkeletonImg = styled(Skeleton)`
  && {
    width: 130px;
    height: 130px;
  }
  margin-bottom: 10px;

  @media ${(props) => props.theme.tablet} {
    && {
      width: 84px;
      height: 84px;
    }
  }
`;

export const RvInfoContainer = styled.div`
  width: 100%;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ marginB }) => marginB};

  @media ${(props) => props.theme.tablet} {
    margin-bottom: ${({ marginB_M }) => marginB_M || '5px'};
    display: ${({ page }) => page === 'home' && 'none'};
  }
`;

export const SkeletonRvCategory = styled(Skeleton)`
  && {
    width: 70px;
    height: 25px;
  }

  @media ${(props) => props.theme.tablet} {
    && {
      width: 30px;
      height: 14px;
    }
  }
`;

export const SkeletonRvChannelName = styled(Skeleton)`
  margin-right: 5px;
  && {
    width: 130px;
    height: 22px;
  }

  @media ${(props) => props.theme.tablet} {
    && {
      width: 55px;
      height: 18px;
    }
  }
`;

export const SkeletonSubscriberCount = styled(Skeleton)`
  && {
    width: 100px;
    height: 18px;
  }
  @media ${(props) => props.theme.tablet} {
    && {
      width: 76px;
      height: 14px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    ::before {
      content: '';
    }
    && {
      width: 30px;
    }
  }
`;

export const SkeletonRatings = styled(Skeleton)`
  && {
    width: 200px;
    height: 18px;
  }

  @media ${(props) => props.theme.tablet} {
    && {
      width: 90px;
      height: 14px;
    }
  }
`;

export const SkeletonBestReviewTitle = styled(Skeleton)`
  && {
    width: 71px;
    height: 15px;
  }

  @media ${(props) => props.theme.tablet} {
    && {
      width: 59px;
      height: 13px;
    }
  }
`;

export const SkeletonBestReview = styled(Skeleton)`
  && {
    width: 250px;
    height: 15px;
  }

  @media ${(props) => props.theme.tablet} {
    && {
      width: 90px;
      height: 13px;
    }
  }
`;
