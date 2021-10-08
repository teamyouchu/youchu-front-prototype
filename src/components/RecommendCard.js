import * as style from './styles/RCMDCardStyle';

export default function RecommendCard({ img, channelName, ratings, reviewCount, category }) {
  const perRatings = ratings * 20;
  const imgUrl = '/images/' + img + '.jpg';
  return (
    <style.Container>
      <style.Img src={imgUrl} alt={channelName} title={channelName} />
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
