import React from 'react';
import StarRating from './StarRating';
import * as style from './styles/ReviewStyle';

export default function DetailReviewInfo({ IsBest, Blur }) {
  const per = '3.5';
  return (
    <style.ReviewContainer>
      {IsBest && (
        <style.BestSpan size="14px" color="#5C7FDF" font="SHSN-B">
          Best Review
        </style.BestSpan>
      )}
      <style.FlexContainerColumn>
        <style.Span font="SHSN-B" size="14px">
          3.5
        </style.Span>
        <StarRating ratings={per} margins="7px 0px 0px 0px" />
      </style.FlexContainerColumn>
      <style.FlexContainerColumn style={{ padding: '0px 40px 0px 15px' }}>
        <style.Span font="SHSN-B" size="18px">
          “제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는
          잔잔하지만 지금은 좋습니다.”
        </style.Span>
        <style.DetailContainer Blur={Blur}>
          <style.Span color="#94969b" size="12px" font="SHSN-M" margins="5px 0px 20px">
            2021.09.22
          </style.Span>
          <style.Span font="SHSN-B" size="14px">
            장점
          </style.Span>
          <style.Span font="SHSN-R" size="14px" margins="0px 0px 20px">
            좋은 음악이 많아서 참 좋아요.
          </style.Span>
          <style.Span font="SHSN-B" size="14px">
            단점
          </style.Span>
          <style.Span font="SHSN-R" size="14px" margins="0px 0px 20px">
            가오를 너무 잡아요.
          </style.Span>
          <style.UtilContainer>
            <style.LikeButton>
              <style.LikeImg alt="like" src="/images/heart.svg" />
              <style.Span font="SHSN-B" size="14px">
                32
              </style.Span>
            </style.LikeButton>
            <style.ReportButton>신고하기</style.ReportButton>
          </style.UtilContainer>
        </style.DetailContainer>
      </style.FlexContainerColumn>
    </style.ReviewContainer>
  );
}
