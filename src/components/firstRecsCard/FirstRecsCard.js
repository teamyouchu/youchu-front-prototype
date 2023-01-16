import * as style from './FirstRecsCardStyle';
import StarRating from 'components/starRating/StarRating';
import { categoryArray } from 'lib/modules';
import { overThousand } from 'lib/numberFomat';

export default function FirstRecsCard({
  data: { id, thumbnail, title, rating, reviews, category },
}) {
  return (
    <style.RecsCardContainer to={`/youtubers/review/${id}`}>
      <style.Thumbnail src={thumbnail} alt={title} />
      <style.GroupBox>
        <style.Group marginB="3px">
          <style.RecsChannelName>{title}</style.RecsChannelName>
        </style.Group>
        <style.Group marginB="5px">
          <StarRating rating={rating} />
          <style.Rating>{rating !== null ? rating.toFixed(1) : 0}</style.Rating>
          <style.ReviewCount>
            ({overThousand(reviews)}개 리뷰)
          </style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.Category>
            {category
              ? categoryArray.find((x) => x.id === category).value
              : '미지정'}
          </style.Category>
        </style.Group>
      </style.GroupBox>
    </style.RecsCardContainer>
  );
}
