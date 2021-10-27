import * as style from './styles/CardStyle';
import { useHistory } from 'react-router-dom';

export default function RecommendCard({ img, channelName, ratings, reviewCount, category }) {
  const perRatings = ratings * 20;
  const imgUrl = '/images/' + img + '.jpg';
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <style.RcmdContainer onClick={handleClick}>
      <style.RcmdImg src={imgUrl} alt={channelName} title={channelName} />
      <style.Info>
        <style.Group>
          <style.RcmdChannelName>{channelName}</style.RcmdChannelName>
        </style.Group>
        <style.Group>
          <style.RcmdStarRatings>
            <style.StarBase>★★★★★</style.StarBase>
            <style.StarFill ratings={perRatings}>★★★★★</style.StarFill>
          </style.RcmdStarRatings>
          <style.RcmdRatings>{ratings}</style.RcmdRatings>
          <style.RcmdReviewCount>({reviewCount}개 리뷰)</style.RcmdReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>{category}</style.Category>
        </style.Group>
      </style.Info>
    </style.RcmdContainer>
  );
}
