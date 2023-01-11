import * as style from './EmptyReviewStyle';

export default function EmptyReview({ channel_id }) {
  return (
    <>
      <style.NoBestReviewHeader>
        <style.InfoTitle> 리뷰</style.InfoTitle>
      </style.NoBestReviewHeader>
      <style.NoBestReviewBox>
        <style.NoBestReviewTitle>
          아직 유튜버의 리뷰가 없습니다.
        </style.NoBestReviewTitle>
        <style.NoBestReviewSub>
          첫 번째 리뷰를 작성 해주세요.
        </style.NoBestReviewSub>
        <style.ReviewWriteBtn to={`/youtubers/reviewWrite/${channel_id}`}>
          유튜버 첫 번째 리뷰하기
        </style.ReviewWriteBtn>
      </style.NoBestReviewBox>
    </>
  );
}
