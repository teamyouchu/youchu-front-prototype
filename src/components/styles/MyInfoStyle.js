import styled from 'styled-components';

export const MyInfoContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 60px;
`;

export const MyInfoBox = styled.div`
  width: 500px;
  padding: 60px;
  margin: 0 auto;
  margin-top: 60px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

export const Title = styled.div`
  text-align: left;
  font-family: ${({titleFont}) => titleFont || 'SHSN-B'};
  font-size: 25px;
  line-height: 31px;
  color: #000000;
  letter-spacing: 0px;
  margin-top: 10px;
  margin-bottom: 30px;
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
