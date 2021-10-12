import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

export const List = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const FilterDropdown = styled(Dropdown)`
  font-family: 'SHSN-M';
  &&& {
    display: inline-block;
    white-space: nowrap;
    font-size: 13px;
    line-height: 17px;
    padding-top: 10.6px;
    border: 1px solid #dedede;
    border-radius: 2px;
    width: 127px;
    height: 40px;
    margin-right: 12px;
    margin-bottom: 60px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  row-gap: 60px;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;
