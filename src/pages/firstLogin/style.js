import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding-top: 82px;
  padding-bottom: 100px;
  @media (max-width: 400px) {
  }
`;

export const LoginBox = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 81px;
  padding: 0 24px;
  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 25px;
  line-height: 35px;
  color: #000000;
  letter-spacing: 0px;
  margin-bottom: 40px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 55px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #dedede;
  }
`;

export const LoginLetter = styled.div`
  position: relative;
  text-align: center;
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  color: #000000;
`;

export const GoogleLogo = styled.img.attrs(() => ({
  src: require('assets/images/googleLogo.png').default,
}))`
  width: 18px;
  height: 18px;
  position: absolute;
  left: -32px;
  top: 0.5px;
`;
