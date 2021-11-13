import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justify};
`;

export const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export const ReviewContainerHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  padding: 0px 40px;
  border-bottom: 1px solid #dedede;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const ReviewDetailInfo = styled(FlexContainer)`
  margin: 30px 0px 0px 0px;
`;

export const YoutuberSummartRankReviewCount = styled.span`
  margin-left: 2px;
  font-size: 14px;
  color: #94969b;
`;
