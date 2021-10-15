import * as style from './styles/CardStyle';
import { useHistory } from 'react-router-dom';

export default function RecommendCard({ img, channelName, ratings, reviewCount, category }) {
  const perRatings = ratings * 20;
  const imgUrl = '/images/' + img + '.jpg';
  let history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <style.RCMD_Container onClick={handleClick}>
      <style.RCMD_Img src={imgUrl} alt={channelName} title={channelName} />
      <style.Info>
        <style.Group>
          <style.RCMD_ChannelName>{channelName}</style.RCMD_ChannelName>
        </style.Group>
        <style.Group>
          <style.RCMD_StarRatings>
            <style.StarBase>★★★★★</style.StarBase>
            <style.StarFill ratings={perRatings}>★★★★★</style.StarFill>
          </style.RCMD_StarRatings>
          <style.RCMD_Ratings>{ratings}</style.RCMD_Ratings>
          <style.RCMD_ReviewCount>({reviewCount}개 리뷰)</style.RCMD_ReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>{category}</style.Category>
        </style.Group>
      </style.Info>
    </style.RCMD_Container>
  );
}
