import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  @media ${(props) => props.theme.tablet} {
    margin-top: 113px;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const Modal = styled.div`
  width: 500px;
  height: 386px;
  padding: 70px 60px;
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
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0;
    padding: 60px 24px;
  }
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
  color: ${(props) => props.color || '#000000;'};
  margin: ${(props) => props.margins};
`;

export const ModalXIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

export const RediretInfo = styled(Span)`
  cursor: pointer;
  margin: 5px 0px;
`;
