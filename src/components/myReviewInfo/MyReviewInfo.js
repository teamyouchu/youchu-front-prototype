import * as style from './MyReviewInfoStyle';
import StarRating from 'components/starRating/StarRating';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function MyReviewInfo({
  data: {
    youtuber: { id, name },
    rating,
    content,
    createdDatetime,
    likes,
  },
}) {
  const delReview = () => {
    // TODO 서지수 리뷰 아이디로 삭제 요청 보내기
  };
  return (
    <style.MyReviewContainer>
      {/* TODO 서지수 유튜버 클릭시 페이지 이동 */}
      <style.YoutuberName to="#">
        {name}
        <style.RightIcon icon={faChevronRight} />
      </style.YoutuberName>
      <style.RatingBox>
        <StarRating ratings={rating} margins="5px 0px 5px 0px" />
        <style.Ratings>{rating}</style.Ratings>
      </style.RatingBox>
      <style.ReviewContent>{content}</style.ReviewContent>
      {/* TODO 서지수 시간 표시 형식 수정 */}
      <style.ReviewCreated>{createdDatetime}</style.ReviewCreated>
      <style.UtilContainer>
        <style.LikeButton>
          <style.LikeImg
            alt="좋아요"
            src={require('assets/images/heart.svg').default}
          />
          <style.likeCount>{likes}</style.likeCount>
        </style.LikeButton>
        <style.DeleteButton onClick={delReview}>삭제하기</style.DeleteButton>
      </style.UtilContainer>
    </style.MyReviewContainer>
  );
}
