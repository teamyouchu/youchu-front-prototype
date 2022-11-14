import * as style from './ReviewCardStyle';
import StarRating from 'components/starRating/StarRating';
import { categoryArray } from 'lib/modules';
import { numToKorean, overThousand } from 'lib/numberFomat';

export default function ReviewCard({
  page,
  data: {
    id,
    thumbnail,
    category,
    title,
    subscribes,
    rating,
    reviews,
    bestReview,
  },
}) {
  return (
    <style.RvContainer to={`/youtubers/review/${id}`} page={page}>
      <style.Img src={thumbnail} alt={title} />
      <style.RvInfoContainer>
        <style.Group marginB="10px" marginB_M="5px">
          {category && (
            <style.RvCategory>
              <style.RvCategoryText>
                {categoryArray.find((x) => x.id === category).value}
              </style.RvCategoryText>
            </style.RvCategory>
          )}
        </style.Group>
        <style.Group marginB="8px" marginB_M="5px">
          <style.RvChannelName>{title}</style.RvChannelName>
          <style.SubscriberCount>
            {numToKorean(subscribes)}명
          </style.SubscriberCount>
        </style.Group>
        <style.Group alignItems={'center'} marginB={'15px'}>
          <StarRating rating={rating} from={'RVCard'} />
          <style.Ratings>
            {rating !== null ? rating.toFixed(1) : 0}
          </style.Ratings>
          <style.ReviewCount>
            ({overThousand(reviews)}개 리뷰)
          </style.ReviewCount>
        </style.Group>
        <style.Group marginB="5px">
          <style.BestReviewTitle>Best Review</style.BestReviewTitle>
        </style.Group>
        <style.Group>
          <style.BestReview>{bestReview[0].comment}</style.BestReview>
        </style.Group>
      </style.RvInfoContainer>
    </style.RvContainer>
  );
}
