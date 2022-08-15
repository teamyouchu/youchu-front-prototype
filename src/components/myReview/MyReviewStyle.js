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

export const MoreBtn = styled(Link)`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #757575;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  &:hover {
    color: #757575;
  }
`;

export const ReviewDropdown = styled.div`
  padding: 30px 40px 0 40px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 59px;
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

// export const UserInfo = styled.div`
//   width: 722px;
//   height: 40px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 14px 0;
//   margin-bottom: ${(props) => props.marginBottom};
// `;

// export const Label = styled.label`
//   display: block;
//   text-align: left;
//   font-family: 'SHSN-R';
//   font-size: 14px;
//   line-height: 18px;
//   color: #000000;
//   letter-spacing: 0px;
// `;

// export const UserEmailInput = styled.input`
//   width: 604px;
//   height: 40px;
//   background: #f2f2f2 0% 0% no-repeat;
//   border: 1px solid #dedede;
//   border-radius: 5px;
//   opacity: 1;
//   padding: 11px 20px;
//   color: #808084;
// `;

// export const NickNameForm = styled.form`
//   width: 604px;
//   height: 40px;
// `;

// export const NickNameInput = styled.input`
//   width: 456px;
//   height: 40px;
//   border: 1px solid #dedede;
//   border-radius: 5px;
//   opacity: 1;
//   padding: 11px 20px;
//   background-color: white;
//   margin-right: 10px;
//   color: #000000;
// `;

// export const UserNickBtn = styled.button`
//   width: 138px;
//   height: 40px;
//   border: 1px solid #5c7fdf;
//   border-radius: 5px;
//   opacity: 1;
//   background-color: white;
//   text-align: center;
//   font-family: 'SHSN-M';
//   font-size: 14px;
//   line-height: 18px;
//   letter-spacing: 0px;
//   color: #5c7fdf;
//   opacity: 1;
//   &:hover {
//     background: #dee5f8;
//   }
// `;
