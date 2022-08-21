import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 350px;
  height: 38px;
  border: 1px solid #dedede;
  padding: 9px 20px;
  &:focus-within {
    border: 1px solid #3ea6ff;
  }
  @media ${(props) => props.theme.tablet} {
    border: none;
    width: 18px;
    height: 30px;
    padding: 0px;
  }
`;

export const SearchImg = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  height: 18px;
  margin-left: 20px;

  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  ::placeholder {
    color: #94969b;
  }
  :focus {
    outline: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;
