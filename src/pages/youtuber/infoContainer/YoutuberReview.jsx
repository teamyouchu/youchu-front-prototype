import * as style from './style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ReviewInfo from 'components/reviewInfo/ReviewInfo';
import { numberComma } from 'lib/numberFomat';

export default function YoutuberReview({
  youtuberInfo: { id, title, reviews, rating },
}) {
  const [bestReveiw, setBestReveiw] = useState({
    youtuber: { id: id, name: title },
    rating: 4.3,
    content:
      '재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요',
    createdDatetime: '2021.09.22',
    likes: 32,
  });
  return (
    <style.InfoContainer>
      <style.ReviewHeader>
        <style.InfoTitle> 리뷰</style.InfoTitle>
        <style.SpanFlex>
          <style.Rating>{rating.toFixed(1)}</style.Rating>
          <Rating
            precision={0.1}
            value={rating}
            emptyIcon={<StarIcon fontSize="inherit" />}
            readOnly
          />
          <style.ReviewCount>{numberComma(reviews)}개 리뷰</style.ReviewCount>
        </style.SpanFlex>
      </style.ReviewHeader>
      <ReviewInfo data={bestReveiw} from={'youtuber'} />
      <style.ShowMoreBox>
        <Link to={`/youtubers/review/detail/${id}`}>
          <style.ShowMoreSpan>유튜버&nbsp;</style.ShowMoreSpan>
          <style.ShowMoreSpan>리뷰 모두 보기&nbsp;&gt;</style.ShowMoreSpan>
        </Link>
      </style.ShowMoreBox>
    </style.InfoContainer>
  );
}
