import React from 'react';
import * as style from './VideoStyle.js';
// TODO 송경석 하드 코딩 된 부분 고쳐야 함
export default function VideoDisplay() {
  return (
    <style.VideoContainer>
      <style.VideoThumbnail></style.VideoThumbnail>
      <style.Span font="SHSN-M" size="14px" margins="10px 0px">
        [MV] 2021 월간 윤종신 Repair...
      </style.Span>
      <style.FlexContainer>
        <style.PlayImg src={require('assets/images/play.png').default} />
        <style.Span
          font="SHSN-M"
          size="12px"
          color="#94969B"
          margins="0px 10px 0px 5px"
        >
          32,590
        </style.Span>
        <style.Span font="SHSN-M" size="12px" color="#94969B">
          2021-09-23
        </style.Span>
      </style.FlexContainer>
    </style.VideoContainer>
  );
}
