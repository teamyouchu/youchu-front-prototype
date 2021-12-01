import styled from 'styled-components';
import * as style from './ModalStyle';

export const ModalContainer = style.ModalContainer;
export const Modal = style.Modal;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const RediretInfo = styled(Span)`
  cursor: pointer;
  margin: 5px 0px;
`;

export const LinkInput = styled.input`
  border: 1px solid #dedede;
  width: 380px;
  height: 40px;
  border-radius: 5px;
  padding: 11px 20px;
  margin-bottom: 30px;
  font-family: 'SHSN-L';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;

  &:focus {
    outline: none;
  }
`;

export const CompleteButton = styled.button`
  width: 380px;
  height: 55px;
  background-color: #000000;
  color: #ffffff;
  font-family: 'SHSN-M';
  font-size: 19px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
