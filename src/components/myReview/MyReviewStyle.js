import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Pagination } from 'semantic-ui-react';

export const MyReviewContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
`;

export const ReviewTitle = styled.div`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #000000;
  padding: 30px 40px 20px 40px;
  border-bottom: 1px solid #dedede;
  position: relative;
`;

export const ProfileSub = styled.div`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #94969b;
  margin-top: 5px;
`;

export const ReviewDropdown = styled.div`
  padding: 30px 40px 0 40px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const PaginationItem = styled(Pagination)`
  &.ui.secondary.pointing.menu {
    border-bottom: 0;
  }
  &.ui.secondary.pointing.menu .active.item {
    border-bottom-width: 2px;
    border-color: transparent;
  }
`;

export const MoreBtn = styled(Link)`
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  &:hover {
    color: #000000;
  }
`;

export const MoreBtnSpan = styled.span`
  font-family: ${({ font }) => font || 'SHSN-R'};
`;
