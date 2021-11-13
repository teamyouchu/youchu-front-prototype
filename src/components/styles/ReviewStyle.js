import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
  margin-top: 30px;
`;

export const ReviewContainer = styled(FlexContainer)`
  height: 400px;
  width: 100%;
  padding: 20px 0px 20px 40px;
  position: relative;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const BestSpan = styled(Span)`
  position: absolute;
  left: 135px;
`;

export const UtilContainer = styled(FlexContainer)`
  align-items: center;
`;

export const LikeButton = styled.div`
  width: 67px;
  height: 32px;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 13px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LikeImg = styled.img`
  width: 14px;
  height: 13px;
  margin-right: 11px;
`;

export const ReportButton = styled.span`
  font-family: 'SHSN-R';
  color: #94969b;
  &:hover {
    cursor: pointer;
  }
`;
