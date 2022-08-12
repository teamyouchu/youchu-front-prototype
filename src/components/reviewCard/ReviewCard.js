import * as style from './ReviewCardStyle';
import { categoryArray } from 'lib/modules';
import StarRating from 'components/starRating/StarRating';
import { numToKorean, overThousand } from 'lib/numberFomat';

export default function ReviewCard({
  data: {
    id,
    thumbnail,
    category,
    name,
    subscribes,
    rating,
    reviews,
    bestReview,
  },
}) {
  return (
    <style.RvContainer to={`/youtubers/review/${id}`}>
      <style.Img src={thumbnail} alt={name} />
      <style.RvInfoContainer>
        <style.Group>
          <style.RvCategory>
            <style.RvCategoryText>
              {categoryArray.find((x) => x.id === category).value}
            </style.RvCategoryText>
          </style.RvCategory>
        </style.Group>
        <style.Group>
          <style.RvChannelName>{name}</style.RvChannelName>
          <style.SubscriberCount>
            구독자 {numToKorean(subscribes)}명
          </style.SubscriberCount>
        </style.Group>
        <style.Group>
          <StarRating ratings={rating} from={'RVCard'} />
          <style.Ratings>{rating}</style.Ratings>
          <style.ReviewCount>{overThousand(reviews)}개 리뷰</style.ReviewCount>
        </style.Group>
        <style.Group>
          <style.BestReviewTitle>Best Review</style.BestReviewTitle>
          <style.BestReview>{bestReview}</style.BestReview>
        </style.Group>
      </style.RvInfoContainer>
    </style.RvContainer>
  );
}
