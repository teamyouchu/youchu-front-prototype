import * as style from './RecommendCardStyle';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { categoryArray } from 'lib/modules';
import { overThousand } from 'lib/numberFomat';

export default function RecommendCard({
  data: { id, imageUrl, name, rating, reviews, category },
  page,
}) {
  return (
    <style.RcmdContainer to={`/youtubers/review/${id}`} page={page}>
      <style.Img src={imageUrl} alt={name} />
      <style.GroupBox>
        <style.Group marginB="3px">
          <style.RcmdChannelName>{name}</style.RcmdChannelName>
        </style.Group>
        <style.Group marginB="5px">
          <Rating
            precision={0.1}
            value={rating}
            emptyIcon={<StarIcon fontSize="inherit" />}
            readOnly
            size="small"
          />
          <style.Ratings>{rating.toFixed(1)}</style.Ratings>
          {page !== 'youtuber' && (
            <style.ReviewCount>
              ({overThousand(reviews)}개 리뷰)
            </style.ReviewCount>
          )}
        </style.Group>
        <style.Group>
          <style.Category>
            {categoryArray.find((x) => x.id === category).value}
          </style.Category>
        </style.Group>
      </style.GroupBox>
    </style.RcmdContainer>
  );
}
