import * as style from './ReviewCardStyle';
import { categoryArray } from 'lib/modules';
import StarRating from 'components/starRating/StarRating';
import { numToKorean, overThousand } from 'lib/numberFomat';

export default function ReviewCard({
  page,
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
    <style.RvContainer to={`/youtubers/review/${id}`} page={page}>
      <style.Img src={thumbnail} alt={name} />
      <style.RvInfoContainer>
        <style.Group marginB="10px" marginB_M="5px">
          <style.RvCategory>
            <style.RvCategoryText>
              {categoryArray.find((x) => x.id === category).value}
            </style.RvCategoryText>
          </style.RvCategory>
        </style.Group>
        <style.Group marginB="8px" marginB_M="5px">
          <style.RvChannelName>{name}</style.RvChannelName>
          <style.SubscriberCount>
            구독자 {numToKorean(subscribes)}명
          </style.SubscriberCount>
        </style.Group>
        <style.Group marginB="15px">
          <StarRating ratings={rating} from={'RVCard'} />
          <style.Ratings>{rating}</style.Ratings>
          <style.ReviewCount>
            ({overThousand(reviews)}개 리뷰)
          </style.ReviewCount>
        </style.Group>
        <style.Group marginB="5px">
          <style.BestReviewTitle>Best Review</style.BestReviewTitle>
        </style.Group>
        <style.Group>
          <style.BestReview>{bestReview}</style.BestReview>
        </style.Group>
      </style.RvInfoContainer>
    </style.RvContainer>
  );
}
