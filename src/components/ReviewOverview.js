import React from 'react';
import * as style from './styles/ReviewOverviewStyle';
import StarRating from './StarRating';

// TODO 송경석 하드 코딩 된 부분 고쳐야 함
export default function ReviewOverview({ data }) {
  return (
    <style.ReviewContainerHeader>
      <style.Span font="SHSN-M" size="26px" margins="30px 0px 10px 0px">
        {data.channelName} 리뷰
      </style.Span>
      <style.ReviewDetailInfo>
        <style.Span size="25px" font="SHSN-B">
          {data.ratings}
        </style.Span>
        <StarRating ratings={data.ratings} margins={'0px 5px 0px 10px'} />
        <style.Span size="14px" color="#94969b">
          {data.reviewCount}개 리뷰
        </style.Span>
      </style.ReviewDetailInfo>
    </style.ReviewContainerHeader>
  );
}
