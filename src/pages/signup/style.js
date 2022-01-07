import styled from 'styled-components';

export const SignupContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 60px;
`;

export const SignupBox = styled.div`
  width: 500px;
  height: 532px;
  padding: 60px;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

export const Title = styled.div`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 25px;
  line-height: 31px;
  color: #000000;
  letter-spacing: 0px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
`;

export const NicknameInput = styled.input`
  width: 380px;
  height: 40px;
  border: 1px solid #dedede;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 11px 20px;

  text-align: left;
  font-family: 'SHSN-L';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  &:focus {
    outline: 1px solid #3ea6ff;
  }
`;

export const SubTitle = styled.div`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const CategoryBox = styled.button`
  height: 30px;
  background: ${({ active }) => (active ? '#000000' : '#FFFFFF')};
  border: 1px solid ${({ active }) => (active ? '#000000' : '#DEDEDE')};
  border-radius: 5px;
  padding: 8px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  text-align: left;
  font-family: 'SHSN-R';
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0px;
  color: ${({ active }) => (active ? '#FFFFFF' : '#94969B')};
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const SetBtn = styled.button`
  width: 380px;
  height: 55px;
  background: #000000 0% 0% no-repeat padding-box;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  text-align: center;
  font-family: 'SHSN-M';
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #ffffff;
  &:hover {
    background-color: #1f1e1e;
  }
`;
