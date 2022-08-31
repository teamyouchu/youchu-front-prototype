import styled from 'styled-components';

export const Contents = styled.div`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;

  &.hidden {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

export const ViewMore = styled.span`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #5c7fdf;
  cursor: pointer;
  margin-bottom: 5px;
`;
