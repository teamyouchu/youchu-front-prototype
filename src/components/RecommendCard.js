import * as style from './styles/CardStyle';
import StarRating from './StarRating';

export default function RecommendCard({
  data: {
    id,
    imageUrl,
    name,
    rating, 
    reviews, 
    category,
  }
 }) {
  return (
    <style.RcmdContainer to={`/youtubers/review/id=${id}`}>
      <style.Img src={imageUrl} alt={name} width="72px" height="72px" margin="0 20px" />
      <div>
        <style.Group>
          <style.RcmdChannelName>{name}</style.RcmdChannelName>
        </style.Group>
        <style.Group>
          <StarRating ratings={rating} margins={'0 5px 6px 0'} />
          <style.Ratings padding="0 2px 5px 0">{rating}</style.Ratings>
          <style.ReviewCount padding_B="5px">({reviews}개 리뷰)</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>{category}</style.Category>
        </style.Group>
      </div>
    </style.RcmdContainer>
  );
}
