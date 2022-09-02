import * as style from './style';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ReviewInfo from 'components/reviewInfo/ReviewInfo';
import { numberComma } from 'lib/numberFomat';

export default function YoutuberReview({
  youtuberInfo: { id, title, reviews, rating },
  youtuberAll,
}) {
  const [bestReveiw, setBestReveiw] = useState({
    writer: {
      writerEmail: '',
      writerName: '',
      writerThumbnail: '',
    },
    rating: 0,
    content: '',
    createdDatetime: '',
    likes: 0,
  });

  useEffect(() => {
    // TODO 서지수 리뷰 api 완성되면 수정
    setBestReveiw(bestReveiw_Temp);
  }, []);
  return (
    <style.InfoContainer M_marginB={'0px'}>
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
      {!youtuberAll && (
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
  youtuber: {
    id: 'UCRnoBo60_joBvIQCoAiNCqg',
    name: '월간 윤종신',
  },
  writer: {
    writerEmail: 'jseo9732@gmail.com',
    writerName: '지구',
    writerThumbnail:
      'https://lh3.googleusercontent.com/a/AItbvmnuMbIpaRKvIL6YP8XlFxexupC-_SV4s5zecvPQ=s96-c',
  },
  rating: 4.3,
  content:
    '재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요재밌어요',
  createdDatetime: '2021.09.22',
  likes: 32,
};
