import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 60px;
`;

export const Title = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ProfileBox = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
`;

export const PicBox = styled.div`
  width: 300px;
  height: 350px;
  background: #ffffff 0% 0% no-repeat;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 40px;
`;

export const UserPic = styled.img`
  width: 108px;
  height: 108px;
  border: 1px solid #dedede;
  border-radius: 50%;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const UserName = styled.div`
  text-align: center;
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
`;

export const UserEmail = styled.div`
  text-align: center;
  font-family: 'SHSN-L';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ModifyBtn = styled(Link)`
  text-align: center;
  text-decoration: underline;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #94969B;
  margin-bottom: 20px;
  &:hover {
    color: #94969B;
    text-decoration: underline;
  }
`;

export const CategoryBtn = styled(Link)`
  width: 250px;
  height: 40px;
  background: #F2F2F2 0% 0% no-repeat padding-box;
  border-radius: 10px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  &:hover {
    cursor: pointer;
    background: #DDDDDD;
  }
`;

export const CategoryTitle = styled.span`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
  margin-right: 10px;
`;

export const CategorysBox = styled.span`
  max-width: 155px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Categorycontents = styled.span`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
`;

export const ChevronIcon = styled.span`
  color: #000000;
  font-size: 12px;
  margin-left: 4px;
`;

export const ProfileContents = styled.div`
  width: 760px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DEDEDE;
`;

export const ProfileTitle = styled.div`
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
  bottom: 20px; right: 20px;
  cursor: pointer;
  &:hover {
    color: #757575;
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
