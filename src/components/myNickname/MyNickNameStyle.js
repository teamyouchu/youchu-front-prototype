import styled from 'styled-components';

export const NickNameContainer = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.div`
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
  margin-bottom: 5px;
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
  &.warnig {
    outline: 1px solid #ed706b;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;
