import * as style from './FirstEvalYoutuberStyle';
import { categoryArray } from 'lib/modules';
import { overThousand } from 'lib/numberFomat';
import FirstWriteRating from './firstWriteRating.js/FirstWriteRating';

export default function FirstEvalYoutuber({
  data: { id, thumbnail, title, rating, reviews, category },
  evalYoutubers,
  setEvalYoutubers,
}) {
  return (
    <style.FirstEvalYoutuberContainer>
      <style.Thumbnail src={thumbnail} alt={title} />
      <style.GroupBox>
        <style.Group marginB="6px">
          <style.Category>
            {category
              ? categoryArray.find((x) => x.id === category).value
              : '미지정'}
          </style.Category>
        </style.Group>
        <style.Group marginB="5px">
          <style.FirstEvalYoutuberName>{title}</style.FirstEvalYoutuberName>
        </style.Group>
        <style.Group marginB="14px">
          <style.Star>★</style.Star>
          <style.Ratings>
            {rating !== null ? rating.toFixed(1) : 0}
          </style.Ratings>
          <style.ReviewCount>
            ({overThousand(reviews)}개 리뷰)
          </style.ReviewCount>
        </style.Group>
        <style.Group>
          <FirstWriteRating
            youtuberId={id}
            evalYoutubers={evalYoutubers}
            setEvalYoutubers={setEvalYoutubers}
          />
        </style.Group>
      </style.GroupBox>
    </style.FirstEvalYoutuberContainer>
  );
}
