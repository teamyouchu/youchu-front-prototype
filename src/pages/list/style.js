import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 80px 0 60px 0;
`;

export const Title = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin: 60px 0 20px 0;
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 350px;
  height: 40px;
  border: 1px solid #dedede;
  border-radius: 2px;
  padding: 10px 30px;
  &:focus-within {
    border: 1px solid #3ea6ff;
  }
`;

export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
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
  &::placeholder {
    color: #94969b;
  }
  &:focus {
    outline: none;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  row-gap: 60px;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;
