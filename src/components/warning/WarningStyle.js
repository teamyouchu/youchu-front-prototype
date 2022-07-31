import styled from 'styled-components';

export const Warning = styled.div`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: ${({ isSuccess }) => (isSuccess ? '#3ea6ff' : '#ed706b')};
  margin: ${({ margin }) => margin || '0'};
`;
