import * as style from './styles/CardStyle';
import { useHistory } from 'react-router-dom';
import StarRating from './StarRating';

export default function ReviewCard({ 
  data: {
    imageUrl,
    category,
    name,
    subscribes,
    rating, 
    reviews, 
    bestReview
  }
}) {
  /* TODO 서지수 삭제하기 */
  let history = useHistory();

  function handleClick() {
    history.push({
      pathname: '/youtubers/review',
      state: {
        img: imageUrl,
        channelName: name,
        ratings: rating,
        reviewCount: reviews,
        subscriberCount: subscribes,
        category: category,
      },
    });
  }
  return (
    <style.RvContainer to="/" onClick={handleClick}>
      <style.Img src={imageUrl} alt={name} />
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
