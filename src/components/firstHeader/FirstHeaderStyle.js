import styled from 'styled-components';

export const FirstHeaderContainer = styled.div`
  width: 100%;
  z-index: 90;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const FirstHeaderBox = styled.div`
  width: 400px;
  height: 82px;
  margin: 0px auto;
  display: flex;
  padding: 24px 24px 18px 24px;
  justify-content: space-between;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const LogoImg = styled.img`
  width: 62px;
  height: 40px;
`;

export const LoginButton = styled.button`
  width: 60px;
  height: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;

  font-family: 'SHSN-M';
  text-align: center;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 0px;
  color: #000000;
  :hover {
    background-color: #ebebeb;
  }
`;

export const GoogleAvatarBox = styled.div`
  height: 30px;
  position: relative;
  z-index: 90;
`;

export const GoogleAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #dedede;
  cursor: pointer;
`;
