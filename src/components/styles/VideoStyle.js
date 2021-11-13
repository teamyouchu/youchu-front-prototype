import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
  margin-top: 30px;
`;

export const VideoContainer = styled(FlexContainerColumn)`
  height: 250px;
`;

// TODO 송경석  임시 썸네일  나중에 바꿔야 함
export const VideoThumbnail = styled.div`
  width: 210px;
  height: 117px;
  border: 1px solid grey;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;
