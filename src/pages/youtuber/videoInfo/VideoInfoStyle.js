import styled from 'styled-components';

export const VideoBox = styled.div`
  width: 210px;
  display: flex;
  flex-direction: column;
`;

export const VideoThumbnail = styled.img`
  width: 210px;
  height: auto;
  margin-bottom: 15px;
`;

export const Span = styled.span`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
`;

export const VideoTitle = styled(Span)`
  margin-bottom: 10px;

  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SpanFlex = styled.div`
  display: flex;
`;

export const PlayIcon = styled.img`
  width: 13px;
  height: 15px;
  margin-right: 5px;
`;

export const InfoSpan = styled(Span)`
  font-size: 12px;
  line-height: 15px;
  color: #94969b;
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
`;
