import * as style from './styles/RCMDCardStyle';

export default function RecommendCard({ channelName, ratings, reviewCount, category }) {
  const perRatings = ratings * 20;
  return (
    <style.Container>
      <style.Img
        src={require('./img/월간윤종신.jpg').default}
        alt={channelName}
        title={channelName}
      />
      <style.Info>
        <style.Group>
          <style.ChannelName>{channelName}</style.ChannelName>
        </style.Group>
        <style.Group>
          <style.StarRatings>
            <style.StarBase>★★★★★</style.StarBase>
            <style.StarFill ratings={perRatings}>★★★★★</style.StarFill>
          </style.StarRatings>
          <style.Ratings>{ratings}</style.Ratings>
          <style.ReviewCount>({reviewCount}개 리뷰)</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>{category}</style.Category>
        </style.Group>
      </style.Info>
    </style.Container>
  );
}
