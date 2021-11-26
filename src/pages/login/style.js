import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
`;

export const LoginBox = styled.div`
  width: 500px;
  height: 400px;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 60px;
`;

export const Title = styled.div`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 25px;
  line-height: 35px;
  color: #000000;
  letter-spacing: 0px;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const LoginBtn = styled.button`
  width: 380px;
  height: 55px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  cursor: pointer;
  position: relative;
  margin-bottom: 60px;
  &:hover {
    background-color: #dedede;
  }
`;

export const GoogleLogo = styled.img.attrs((props) => ({
  src: '/images/googleLogo.png',
}))`
  width: 15px;
  height: 15px;
  position: absolute;
  left: 40px;
  top: 19px;
`;

export const LoginLetter = styled.span`
  text-align: center;
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  color: #000000;
`;
