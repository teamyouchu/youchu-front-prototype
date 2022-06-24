import styled from 'styled-components';

export const SearchPageContainer = styled.div`
    margin: 16px 24px;
`;

export const HeaderBox = styled.div`
    display: flex;
    align-items: center;
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
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DEDEDE;
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
  margin-left: 5px;
`;

