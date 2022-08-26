import * as style from './YoutuberHeaderStyle';
import { Rating } from '@mui/material';
import { numberComma } from 'lib/numberFomat';

export default function YoutuberHeader({
  youtuberInfo: { id, title, thumbnail, reviews, rating },
}) {
  return (
    <style.YoutuberHeaderContainer>
      <style.HeaderBox>
        <style.YoutuberImg src={thumbnail} />
        <style.InfoFlex>
          <style.YoutuberName>{title}</style.YoutuberName>
          <style.SpanFlex>
            <Rating max={1} value={1} size="small" readOnly />
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
