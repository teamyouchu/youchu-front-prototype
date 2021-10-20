import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

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
