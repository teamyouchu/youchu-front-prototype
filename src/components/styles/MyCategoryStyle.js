import styled from 'styled-components';

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