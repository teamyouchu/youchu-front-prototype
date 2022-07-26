import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  @media ${(props) => props.theme.tablet} {
    padding-top: 124px;
  }
`;

export const LoginBox = styled.div`
  width: 500px;
  height: 400px;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 60px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 40px;
    border: 0;
    border-radius: 0;
    padding: 0 24px;
  }
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

  @media ${(props) => props.theme.tablet} {
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

export const LoginBtn = styled.button`
  width: 380px;
  height: 55px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  &:hover {
    background-color: #dedede;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
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
  width: 15px;
  height: 15px;
  position: absolute;
  left: -106px;
  top: 2px;

  @media ${(props) => props.theme.tablet} {
    top: 2px;
    left: -30px;
  }
`;
