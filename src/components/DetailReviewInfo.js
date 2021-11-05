import React from 'react';
import * as style from './styles/ReviewStyle';

export default function DetailReviewInfo({ IsBest }) {
  const per = '3.5' * 20;
  return (
    <style.ReviewContainer>
      <style.FlexContainerColumn>
        <style.BoldSpan>3.5</style.BoldSpan>
        <style.StarRatings>
          <style.StarBase>★★★★★</style.StarBase>
          <style.StarFill ratings={per}>★★★★★</style.StarFill>
        </style.StarRatings>
      </style.FlexContainerColumn>
      <style.FlexContainerColumn style={{ padding: '0px 40px 0px 15px' }}>
        <style.ReviewContent>
          “제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는
          잔잔하지만 지금은 좋습니다.”
        </style.ReviewContent>
        <style.DateSpan>2021.09.22</style.DateSpan>
        <style.BoldSpan>장점</style.BoldSpan>
        <style.RegularSpan>좋은 음악이 많아서 참 좋아요.</style.RegularSpan>
        <style.BoldSpan>단점</style.BoldSpan>
        <style.RegularSpan>가오를 너무 잡아요.</style.RegularSpan>
      </style.FlexContainerColumn>
    </style.ReviewContainer>
  );
}
