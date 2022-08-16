import styled from 'styled-components';

export const SearchDropdownContainer = styled.div`
  position: ${({ page }) => (page === 'search' ? 'relative' : 'absolute')};
  top: ${({ page }) =>
    page === 'header' ? '69px' : page === 'search' ? '10px' : '43px'};
  width: ${({ page }) =>
    page === 'header' ? '350px' : page === 'search' ? '100%' : '380px'};
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: ${({ page }) =>
    page === 'search' ? 0 : '0px 0px 15px #00000029'};
  opacity: 1;
  padding: 5px 0;
`;

export const RelatedSearch = styled.div`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  padding: 5px 20px;
  color: #eb3323;
`;

export const SearchResultBox = styled.div`
  display: flex;
  align-items: center;
  &:hover {
  padding: ${({ page }) => (page === 'search' ? '5px 16px' : '5px 20px')};
    background-color: #f9fafc;
    cursor: pointer;
    color: #000000;
  }
`;

export const SearchResultImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SearchResultName = styled.div`
  font-family: 'SHSN-R';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  margin-right: 5px;

  max-width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SearchResultSubscribers = styled.div`
  font-family: 'SHSN-R';
  text-align: left;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0px;
  color: #94969b;
`;
