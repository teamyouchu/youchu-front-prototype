import * as style from './style';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRating from 'components/starRating/StarRating';
import ReviewInfo from 'components/reviewInfo/ReviewInfo';
import { numberComma } from 'lib/numberFomat';

export default function YoutuberReview({
  youtuberInfo: { id, title, reviews, rating },
  all,
}) {
  const [bestReveiw, setBestReveiw] = useState({
    id: '',
    writerId: 0,
    writerName: '',
    writerImgUrl: '',
    rating: 0,
    comment: '',
    createdDatetime: '',
    likes: 0,
  });

  useEffect(() => {
    // TODO 서지수 리뷰 api 완성되면 수정
    setBestReveiw(bestReveiw_Temp);
  }, []);
  return (
    <style.InfoContainer M_marginB={'12px'}>
      <style.ReviewHeader>
        <style.InfoTitle> 리뷰</style.InfoTitle>
        <style.SpanFlex>
          <style.Rating>{rating.toFixed(1)}</style.Rating>
          <StarRating rating={rating} />
          <style.ReviewCount>{numberComma(reviews)}개 리뷰</style.ReviewCount>
        </style.SpanFlex>
      </style.ReviewHeader>
      <ReviewInfo data={bestReveiw} from={'youtuber'} />
      {!all && (
        <style.ShowMoreBox>
          <Link to={`/youtubers/review/detail/${id}`}>
            <style.ShowMoreSpan>유튜버&nbsp;</style.ShowMoreSpan>
            <style.ShowMoreSpan>리뷰 모두 보기&nbsp;&gt;</style.ShowMoreSpan>
          </Link>
        </style.ShowMoreBox>
      )}
    </style.InfoContainer>
  );
}

const bestReveiw_Temp = {
  id: 10,
  writerId: 17,
  writerName: '지구',
  writerImgUrl:
    'https://lh3.googleusercontent.com/a/AItbvmnuMbIpaRKvIL6YP8XlFxexupC-_SV4s5zecvPQ=s96-c',
  rating: 4.3,
  comment:
    '재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요',
  createdDatetime: '2021.09.22',
  likes: 32,
};
