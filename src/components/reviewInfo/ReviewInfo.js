import * as style from './ReviewInfoStyle';
import StarRating from 'components/starRating/StarRating';

export default function ReviewInfo({
  data: {
    youtuber: { id, name },
    rating,
    content,
    createdDatetime,
    likes,
  },
  from,
}) {
  // 정렬 기능 구현

  const onLikeClick = () => {
    // TODO 서지수 좋아요 기능 구현
  };
  const delReview = () => {
    // TODO 서지수 리뷰 아이디로 삭제 요청 보내기
  };
  return (
    <style.ReviewInfoContainer>
      {from === 'youtuber' ? (
        <style.ReviewInfoHeader>
          <style.BestReview>Best Review</style.BestReview>
        </style.ReviewInfoHeader>
      ) : (
        <style.ReviewInfoHeader>
          <style.YoutuberName to={`/youtubers/review/${id}`}>
            {name}&nbsp;&gt;
          </style.YoutuberName>
          <style.RatingBox>
            <StarRating ratings={rating} margins="5px 0px" />
            <style.Ratings>{rating}</style.Ratings>
          </style.RatingBox>
        </style.ReviewInfoHeader>
      )}
      <style.ReviewContent>{content}</style.ReviewContent>
      <style.ReviewCreated>{createdDatetime}</style.ReviewCreated>
      <style.UtilContainer>
        <style.LikeButton onClick={onLikeClick}>
          <style.LikeImg
            alt="좋아요"
            src={require('assets/images/heart.svg').default}
          />
          <style.likeCount>{likes}</style.likeCount>
        </style.LikeButton>
        <style.DeleteButton onClick={delReview}>삭제하기</style.DeleteButton>
      </style.UtilContainer>
    </style.ReviewInfoContainer>
  );
}
