import styled from 'styled-components';
import { Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Modal = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.hegiht};
  padding: ${(props) => props.padding};
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  border-radius: 5px;
  opacity: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const ModalTitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size || '14px'};
  line-height: ${(props) => props.lineHeight || '18px'};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const ModalXIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const RediretInfo = styled(Span)`
  cursor: pointer;
  margin: 5px 0px;
`;

export const InputContainer = styled.div`
  position: relative;
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
    outline: 1px solid #3ea6ff;
  }
`;

export const CompleteButton = styled.button`
  width: 380px;
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

export const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
`;

export const YoutuberContainer = styled.div`
  display: flex;
  align-items: center;
  & > img {
    border: 1px solid #dedede;
    border-radius: 50%;
    width: ${(props) => props.width || '50px'};
    height: ${(props) => props.height || '50px'};
    margin: ${(props) => props.margin || '0 0 10px 0'};
  }
  &:hover {
    background-color: #f9fafc;
    cursor: pointer;
    color: #000000;
  }
`;

export const Tag = styled(Label)`
  border-radius: 2rem !important;
  margin: 0.5rem !important;
`;

export const SearchDropdownContainer = styled.div`
  position: absolute;
  top: -30px;
  width: 380px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 15px #00000029;
  opacity: 1;
  padding: 20px 0px 0px 10px;
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
