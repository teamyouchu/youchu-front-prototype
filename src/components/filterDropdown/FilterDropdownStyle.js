import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

export const FilterDropdown = styled(Dropdown)`
  font-family: 'SHSN-M';
  &&& {
    font-size: 13px;
    line-height: 17px;
    border: 1px solid #dedede;
    border-radius: 2px;
    width: 150px;
    height: 40px;
    margin-right: 12px;
  }
`;
