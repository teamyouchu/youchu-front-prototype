import * as style from './styles/CardStyle';
import { useHistory } from 'react-router-dom';
import StarRating from './StarRating';

export default function RecommendCard({ id, imgUrl, channelName, ratings, reviewCount, category }) {
  /* TODO 서지수 삭제하기 */
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <style.RcmdContainer onClick={handleClick}>
      <style.Img src={imgUrl} alt={channelName} width="72px" height="72px" margin="0 20px" />
      <div>
        <style.Group>
          <style.RcmdChannelName>{channelName}</style.RcmdChannelName>
        </style.Group>
        <style.Group>
          <StarRating ratings={ratings} margins={'0 5px 6px 0'} />
          <style.Ratings padding="0 2px 5px 0">{ratings}</style.Ratings>
          <style.ReviewCount padding_B="5px">({reviewCount}개 리뷰)</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>{category}</style.Category>
        </style.Group>
      </div>
    </style.RcmdContainer>
  );
}
