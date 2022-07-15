import * as style from './CardStyle';
import StarRating from 'components/starRating/StarRating';

export default function ReviewCard({
  data: { id, thumbnail, category, name, subscribes, rating, reviews, bestReview },
}) {
  return (
    <style.RvContainer to={`/youtubers/review/${id}`}>
      <style.Img src={thumbnail} alt={name} />
      <div>
        <style.Group>
          <style.RvCategory>{category}</style.RvCategory>
        </style.Group>
        <style.Group>
          <style.RvChannelName>{name}</style.RvChannelName>
          <style.SubscriberCount>구독자 {subscribes}명</style.SubscriberCount>
        </style.Group>
        <style.Group>
          <StarRating ratings={rating} margins={'0 5px 15px 0'} />
          <style.Ratings>{rating}</style.Ratings>
          <style.ReviewCount>({reviews}개 리뷰)</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.BestReviewTitle>Best Review</style.BestReviewTitle>
          <style.BestReview>{bestReview}</style.BestReview>
        </style.Group>
      </div>
    </style.RvContainer>
  );
}
