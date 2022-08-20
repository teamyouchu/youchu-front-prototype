import styled from 'styled-components';

export const SearchPageContainer = styled.div`
  margin: 16px 24px;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const SearchInputBox = styled.form`
  width: 100%;
`;

export const SearchInput = styled.input`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  letter-spacing: 0px;

  width: 100%;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  border-radius: 2px;
  padding: 11px 16px;
  &::placeholder {
    color: #94969b;
  }
  &:focus {
    outline: 1px solid #3ea6ff;
  }
`;

export const Xmark = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px 0 0 5px;
  :hover {
    cursor: pointer;
  }
`;
