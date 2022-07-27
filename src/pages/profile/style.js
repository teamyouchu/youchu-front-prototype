import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 60px;
`;

export const ProfileTitle = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 20px;
`;

export const ProfileBox = styled.div`
  width: 1140px;
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

export const UserEmail = styled(UserName)`
  font-family: 'SHSN-L';
  margin-bottom: 20px;
`;

export const ModifyBtn = styled(Link)`
  text-align: center;
  text-decoration: underline;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #94969b;
  margin-bottom: 20px;
  &:hover {
    color: #94969b;
    text-decoration: underline;
  }
`;

export const CategoryBtn = styled(Link)`
  width: 250px;
  height: 40px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 10px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  &:hover {
    cursor: pointer;
    background: #dddddd;
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
  color: #000000;
`;

export const Categorycontents = styled.span`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
`;

export const ChevronIcon = styled.span`
  color: #000000;
  font-size: 12px;
  margin-left: 4px;
`;
