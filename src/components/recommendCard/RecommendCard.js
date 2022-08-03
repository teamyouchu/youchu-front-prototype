import * as style from './RecommendCardStyle';
import StarRating from 'components/starRating/StarRating';
import { categoryArray } from 'lib/modules';

export default function RecommendCard({
  data: { id, imageUrl, name, rating, reviews, category },
}) {
  return (
    <style.RcmdContainer to={`/youtubers/review/id=${id}`}>
      <style.Img src={imageUrl} alt={name} />
      <div>
        <style.Group>
          <style.RcmdChannelName>{name}</style.RcmdChannelName>
        </style.Group>
        <style.Group>
          <StarRating ratings={rating} from={'RcmdCard'} />
          <style.Ratings>{rating}</style.Ratings>
          <style.ReviewCount>({reviews}개 리뷰)</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>
            {categoryArray.find((x) => x.id === category).value}
          </style.Category>
        </style.Group>
      </div>
    </style.RcmdContainer>
  );
}
