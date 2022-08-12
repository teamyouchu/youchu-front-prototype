import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 검색 드랍 다운
export const SearchDropdownContainer = styled.div`
  position: absolute;
  top: 69px;
  width: 350px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000029;
  opacity: 1;
  padding: 10px 0;
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

export const SearchResult = styled(Link)`
  font-family: 'SHSN-R';
  display: block;
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  padding: 5px 20px;
  color: #000000;
  &:hover {
    background-color: #f9fafc;
    cursor: pointer;
    color: #000000;
  }
`;
