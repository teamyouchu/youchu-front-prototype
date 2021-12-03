import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageContainer = styled.div`
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-left: 5px;
`;

export const LeftButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-right: 20px;
`;

export const NumberSpan = styled.span`
  cursor: pointer;
  margin: 0px 20px 0px 5px;
`;
