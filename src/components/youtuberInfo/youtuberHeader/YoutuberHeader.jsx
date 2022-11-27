import * as style from './YoutuberHeaderStyle';
import { numberComma } from 'lib/numberFomat';

export default function YoutuberHeader({
  youtuberInfo: { id, title, thumbnail, reviews, rating },
}) {
  return (
    <style.YoutuberHeaderContainer>
      <style.HeaderBox>
        <style.YoutuberImg src={thumbnail} />
        <style.InfoFlex>
          <style.YoutuberName to={`/youtubers/review/${id}`}>
            {title}
          </style.YoutuberName>
          <style.SpanFlex>
            <style.OneStar>★</style.OneStar>
            <style.YoutuberRating>{rating.toFixed(1)}</style.YoutuberRating>
            <style.ReviewCount>
              ({numberComma(reviews)}개 리뷰)
            </style.ReviewCount>
          </style.SpanFlex>
        </style.InfoFlex>
      </style.HeaderBox>
      <style.HeaderBox>
        <style.ReviewButton to={`/youtubers/reviewWrite/${id}`}>
          <style.ReviewButtonSpan>이 유튜버 리뷰하기</style.ReviewButtonSpan>
        </style.ReviewButton>
      </style.HeaderBox>
    </style.YoutuberHeaderContainer>
  );
}
