import * as style from './BulrReviewStyle';

export default function BulrReview({ channel_id }) {
  return (
    <style.BulrReviewContainer>
      <style.BulrTitle>
        유튜버 리뷰를 작성하고 전체 리뷰를 확인하세요!
      </style.BulrTitle>
      <style.ReviewButton to={`/youtubers/reviewWrite/${channel_id}`}>
        <style.BtnSpan>이 유튜버 리뷰하기</style.BtnSpan>
      </style.ReviewButton>
    </style.BulrReviewContainer>
  );
}
