import styled from 'styled-components';

export const SearchForm = styled.form`
  position: ${({ page }) => (page === 'registration' ? 'relative' : '')};
  display: flex;
  align-items: center;
  width: ${({ page }) =>
    page === 'header' ? '350px' : page === 'registration' ? '380px' : '100%'};
  height: ${({ page }) => (page === 'header' ? '38px' : '40px')};
  border: 1px solid #dedede;
  border-radius: ${({ page }) =>
    page === 'header' ? '0' : page === 'registration' ? '5px' : '2px'};
  padding: ${({ page }) =>
    page === 'header'
      ? '9px 20px'
      : page === 'registration'
      ? '11px 20px'
      : '11px 16px'};
  margin-bottom: ${({ page }) => (page === 'registration' ? '30px' : 0)};
  &:focus-within {
    border: 1px solid #3ea6ff;
  }
  @media ${(props) => props.theme.tablet} {
    border: ${({ page }) => (page === 'header' ? 'none' : '')};
    width: ${({ page }) => (page === 'header' ? '18px' : '')};
    height: ${({ page }) => (page === 'header' ? '30px' : '')};
    padding: ${({ page }) => (page === 'header' ? '0' : '')};
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
  margin-left: ${({ page }) => (page === 'header' ? '20px' : '0')};

  text-align: left;
  font-family: ${({ page }) => (page === 'registration' ? 'SHSN-L' : 'SHSN-M')};
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  letter-spacing: 0px;
  ::placeholder {
    color: #94969b;
  }
  :focus {
    outline: none;
  }
  @media ${(props) => props.theme.tablet} {
    display: ${({ page }) => (page === 'header' ? 'none' : '')};
  }
`;
