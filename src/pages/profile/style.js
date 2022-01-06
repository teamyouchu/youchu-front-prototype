import styled from 'styled-components';

export const profileContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding-top: 138px;
  padding-bottom: 100px;
  display: flex;
`;

export const picBox = styled.div`
  width: 298px;
  height: 317px;
  background: #ffffff 0% 0% no-repeat;
  border: 1px solid #dedede;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 80px;
`;

export const userPic = styled.img`
  width: 106px;
  height: 106px;
  border: 1px solid #dedede;
  border-radius: 50%;
  margin-top: 52px;
  margin-bottom: 20px;
`;

export const userName = styled.div`
  text-align: center;
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
`;

export const userEmail = styled.div`
  text-align: center;
  font-family: 'SHSN-L';
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 28px;
`;

export const categoryBtn = styled.button`
  width: 218px;
  height: 38px;
  text-align: center;
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  border-radius: 10px;
  border: 0;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #292929;
  }
`;

export const chevronIcon = styled.span`
  color: #ffffff;
  font-size: 12px;
  margin-left: 4px;
`;

export const profileContents = styled.div`
  width: 722px;
  display: flex;
  flex-direction: column;
`;

export const profileTitle = styled.div`
  width: 722px;
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #000000;
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
  margin-bottom: ${(props) => props.marginBottom || '5px'};
`;

export const profileSub = styled.div`
  width: 722px;
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0px;
  color: #94969b;
`;

export const userInfo = styled.div`
  width: 722px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  letter-spacing: 0px;
`;

export const userEmailInput = styled.input`
  width: 604px;
  height: 40px;
  background: #f2f2f2 0% 0% no-repeat;
  border: 1px solid #dedede;
  border-radius: 5px;
  opacity: 1;
  padding: 11px 20px;
  color: #808084;
`;

export const nickNameForm = styled.form`
  width: 604px;
  height: 40px;
`;

export const nickNameInput = styled.input`
  width: 456px;
  height: 40px;
  border: 1px solid #dedede;
  border-radius: 5px;
  opacity: 1;
  padding: 11px 20px;
  background-color: white;
  margin-right: 10px;
  color: #000000;
`;

export const userNickBtn = styled.button`
  width: 138px;
  height: 40px;
  border: 1px solid #5c7fdf;
  border-radius: 5px;
  opacity: 1;
  background-color: white;
  text-align: center;
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #5c7fdf;
  opacity: 1;
  &:hover {
    background: #dee5f8;
  }
`;
