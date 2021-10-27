import * as style from './styles/CardStyle';
import { useHistory } from 'react-router-dom';

export default function ReviewCard({
  img,
  category,
  channelName,
  subscriberCount,
  reviewCount,
  ratings,
  bestReview,
}) {
  const per = ratings * 20;
  const imgUrl = '/images/' + img + '.jpg';
  let history = useHistory();

  function handleClick() {
    history.push({
      pathname: '/review',
      state: {
        img: imgUrl,
        channelName: channelName,
        ratings: ratings,
        reviewCount: reviewCount,
        subscriberCount: subscriberCount,
        category: category,
      },
    });
  }
  return (
    <style.RvContainer onClick={handleClick}>
      <style.RvImg src={imgUrl} alt={channelName} title={channelName} />
      <style.Info>
        <style.Group>
          <style.RvCategory>{category}</style.RvCategory>
        </style.Group>
        <style.Group>
          <style.RvChannelName>{channelName}</style.RvChannelName>
          <style.SubscriberCount>구독자 {subscriberCount}명</style.SubscriberCount>
        </style.Group>
        <style.Group>
          <style.StarRatings>
            <style.StarBase>★★★★★</style.StarBase>
            <style.StarFill ratings={per}>★★★★★</style.StarFill>
          </style.StarRatings>
          <style.Ratings>{ratings}</style.Ratings>
          <style.ReviewCount>({reviewCount}개 리뷰)</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.BestReviewTitle>Best Review</style.BestReviewTitle>
          <style.BestReview>{bestReview}</style.BestReview>
        </style.Group>
      </style.Info>
    </style.RvContainer>
  );
}
