import styled from 'styled-components';

export const ConfirmReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: auto;
  position: absolute;
  top: 50px;
  left: 45px;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const ReviewButton = styled.div`
  width: 170px;
  height: 40px;
  border-radius: 5px;
  background-color: #5c7fdf;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;
