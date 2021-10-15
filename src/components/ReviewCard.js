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
    history.push('/');
  }
  return (
    <style.RC_Container onClick={handleClick}>
      <style.RC_Img src={imgUrl} alt={channelName} title={channelName} />
      <style.Info>
        <style.Group>
          <style.RC_Category>{category}</style.RC_Category>
        </style.Group>
        <style.Group>
          <style.RC_ChannelName>{channelName}</style.RC_ChannelName>
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
    </style.RC_Container>
  );
}
