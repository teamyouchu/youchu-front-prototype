import * as style from './RecommendCardStyle';
import StarRating from 'components/starRating/StarRating';
import { categoryArray } from 'lib/modules';
import { overThousand } from 'lib/numberFomat';

export default function RecommendCard({
  data: { id, thumbnail, title, rating, reviews, category },
  page,
}) {
  return (
    <style.RcmdContainer to={`/youtubers/review/${id}`} page={page}>
      <style.Img src={thumbnail} alt={title} />
      <style.GroupBox>
        <style.Group marginB="3px">
          <style.RcmdChannelName>{title}</style.RcmdChannelName>
        </style.Group>
        <style.Group marginB="5px">
          <StarRating rating={rating} />
          <style.Ratings>
            {rating !== null ? rating.toFixed(1) : 0}
          </style.Ratings>
          {page !== 'youtuber' && (
            <style.ReviewCount>
              ({overThousand(reviews)}개 리뷰)
            </style.ReviewCount>
          )}
        </style.Group>
        <style.Group>
          <style.Category>
            {category
              ? categoryArray.find((x) => x.id === category).value
              : '미지정'}
          </style.Category>
        </style.Group>
      </style.GroupBox>
    </style.RcmdContainer>
  );
}
