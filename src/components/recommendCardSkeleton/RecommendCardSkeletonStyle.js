import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

export const RcmdContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: ${({ page }) => (page === 'youtuber' ? '100%' : '350px')};
  border: ${({ page }) => (page === 'youtuber' ? '0' : '1px solid #dedede')};
  border-radius: 10px;
  padding: ${({ page }) => (page === 'youtuber' ? '16px 24px' : '18px 20px')};
  color: #000000;
  &:hover {
    color: #000000;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const SkeletonImg = styled(Skeleton)`
  && {
    width: 72px;
    height: 72px;
  }
  margin-right: 20px;

  @media ${(props) => props.theme.mobile} {
    && {
      width: 36px;
      height: 36px;
    }
    margin-right: 16px;
  }
`;

export const GroupBox = styled.div`
  width: calc(100% - 92px);
  @media ${(props) => props.theme.mobile} {
    width: calc(100% - 52px);
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${({ marginB }) => marginB};
`;

export const SkeletonRcmdChannelName = styled(Skeleton)`
  && {
    width: 100px;
    height: 21px;
  }
`;

export const SkeletonRating = styled(Skeleton)`
  && {
    width: 200px;
    height: 18px;
  }
`;

export const SkeletonCategory = styled(Skeleton)`
  && {
    width: 80px;
    height: 25px;
  }
`;
