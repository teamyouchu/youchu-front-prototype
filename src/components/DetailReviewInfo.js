import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';
import * as style from './styles/ReviewStyle';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function DetailReviewInfo({ isBest, blur, page, reviewInfo }) {
  const [isReview, setIsReview] = useState(true);
  useEffect(() => {
    if (page === 'mypage') {
      setIsReview(!isReview);
    }
  }, [isReview, page]);

  return (
    <style.FlexContainerColumn>
      {isBest && (
        <style.BestSpan size="12px" color="#5C7FDF" font="SHSN-B">
          Best Review
        </style.BestSpan>
      )}
      <style.ReviewContainer
        className={`${isBest ? 'BestReviewContainer ' : ''} ${isReview ? '' : 'MypageContainer'}`}
      >
        {!isReview && (
          <style.FlexContainer>
            <style.Span font="SHSN-B" size="14px">
              월간 윤종신
            </style.Span>
            <style.RightButton icon={faChevronRight} />
          </style.FlexContainer>
        )}

        <style.DetailContainer Blur={blur}>
          <style.FlexContainer>
            {isReview && <style.ProfileImg src="/images/profile.png" />}
            <style.FlexContainerColumn>
              <style.FlexContainer>
                <StarRating
                  ratings={reviewInfo ? reviewInfo.rating : 3.5}
                  margins="7px 0px 0px 0px"
                />
                {!isReview ? (
                  //TODO 송경석 며칠전인지 계산 하는 로직 필요
                  <style.Span font="SHSN-R" size="10px" color="#94969B" margins="5px 0px 0px 5px">
                    2일전
                  </style.Span>
                ) : (
                  <style.Span font="SHSN-B" size="14px" margins="5px 0px 0px 5px">
                    {reviewInfo ? reviewInfo.rating : 3.5}
                  </style.Span>
                )}
              </style.FlexContainer>
              {isReview && (
                <style.Span font="SHSN-R" size="13px" color="#94969B">
                  {reviewInfo ? reviewInfo.author : '병팔이'}
                </style.Span>
              )}
            </style.FlexContainerColumn>
          </style.FlexContainer>
          <style.MainContainer className={!isReview ? 'Mypage' : ''}>
            <style.ReviewSpan font="SHSN-R" size="15px">
              {reviewInfo
                ? reviewInfo.content
                : '제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다.'}
            </style.ReviewSpan>

            <style.Span color="#94969b" size="12px" font="SHSN-M" margins="5px 0px 20px">
              {/* {reviewInfo.createdDatetime} */}
              {reviewInfo ? reviewInfo.createdDatetime : '2021.09.22'}
            </style.Span>
            <style.UtilContainer>
              <style.LikeButton>
                <style.LikeImg alt="like" src="/images/heart.svg" />
                <style.Span font="SHSN-B" size="14px">
                  {reviewInfo ? reviewInfo.likes : '32'}
                </style.Span>
              </style.LikeButton>
              {isReview && <style.ReportButton>신고하기</style.ReportButton>}
              {!isReview && (
                <style.DeleteContColumn>
                  <style.DeleteButton>삭제하기</style.DeleteButton>
                </style.DeleteContColumn>
              )}
            </style.UtilContainer>
          </style.MainContainer>
        </style.DetailContainer>
      </style.ReviewContainer>
    </style.FlexContainerColumn>
  );
}
