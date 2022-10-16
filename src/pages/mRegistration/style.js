import styled from 'styled-components';

export const MRegiContainer = styled.div`
  width: 100%;
  padding: 174px 24px 100px 24px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size || '14px'};
  line-height: ${(props) => props.lineHeight || '18px'};
  color: ${(props) => props.color || '#000000;'};
  margin: ${(props) => props.margins};
`;

export const CompleteButton = styled.button`
  width: 100%;
  height: 55px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'SHSN-M';
  font-size: 19px;
  line-height: 23px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
