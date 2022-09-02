import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 60px;
  @media ${(props) => props.theme.tablet} {
    padding-top: 125px;
    padding-bottom: 30px;
    width: 100%;
  }
`;

export const ProfileTitle = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 20px;
  @media ${(props) => props.theme.tablet} {
    padding: 0 24px;
  }
`;

export const ProfileBox = styled.div`
  width: 1140px;
  margin: 0 auto;
  display: flex;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

export const PicBox = styled.div`
  padding: 30px 25px;
  width: 300px;
  height: 310px;
  background: #ffffff 0% 0% no-repeat;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 40px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 100%;
    border: 0;
    border-bottom: 1px solid #dedede;
    padding: 0 24px;
    align-items: flex-start;
    margin-right: 0;
  }
`;

export const flexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 30px;
  }
`;

export const UserPic = styled.img`
  width: 108px;
  height: 108px;
  border: 1px solid #dedede;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
  @media ${(props) => props.theme.tablet} {
    width: 60px;
    height: 60px;
    margin: 0;
    margin-right: 10px;
  }
`;

export const ModifyBtn = styled(Link)`
  text-align: center;
  &:hover {
    color: #000000;
    text-decoration: underline;
  }
  @media ${(props) => props.theme.tablet} {
    text-align: left;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const UserName = styled.div`
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
  @media ${(props) => props.theme.tablet} {
    :after {
      content: ' >';
    }
  }
`;

export const UserEmail = styled(UserName)`
  font-family: 'SHSN-L';
  margin-bottom: 20px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 0;
    :after {
      content: '';
    }
  }
`;

export const CategoryBtn = styled(Link)`
  width: 250px;
  height: 40px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 16px;
  :hover {
    cursor: pointer;
    background: #dddddd;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
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
  width: 155px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000000;
  @media ${(props) => props.theme.tablet} {
    width: calc(100% - 64px);
  }
`;

export const Categorycontents = styled.span`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  :after {
    content: ', ';
  }
  :last-child:after {
    content: '';
  }
`;

export const ChevronIcon = styled.span`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
  margin-left: 4px;
`;
