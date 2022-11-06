import * as style from './style';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import StarRating from 'components/starRating/StarRating';
import ReviewInfo from 'components/reviewInfo/ReviewInfo';
import { numberComma } from 'lib/numberFomat';
import reviewAPI from 'lib/api/reviewAPI';

export default function YoutuberReview({
  youtuberInfo: { id, reviews, rating },
  all,
}) {
  const [bestReveiw, setBestReveiw] = useState({
    reviewId: '',
    authorId: 0,
    authorName: '',
    authorImgUrl: '',
    rating: 0,
    comment: '',
    createdDatetime: '',
    likes: 0,
    liked: false,
  });

  const { channel_id } = useParams();
  useEffect(() => {
    reviewAPI
      .getBestReview(channel_id)
      .then((res) => {
        setBestReveiw(res.data.data[0]);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <style.InfoContainer>
      {/* TODO 리뷰없을 때 api 수정되면 코드 수정 */}
      {bestReveiw !== undefined ? (
        <>
          <style.ReviewHeader>
            <style.InfoTitle> 리뷰</style.InfoTitle>
            <style.SpanFlex>
              <style.Rating>{rating.toFixed(1)}</style.Rating>
              <StarRating rating={rating} />
              <style.ReviewCount>
                {numberComma(reviews)}개 리뷰
              </style.ReviewCount>
            </style.SpanFlex>
          </style.ReviewHeader>
          <ReviewInfo data={bestReveiw} from={'youtuber'} />
          {!all && (
            <style.ShowMoreBox>
              <Link to={`/youtubers/review/detail/${id}`}>
                <style.ShowMoreSpan>유튜버&nbsp;</style.ShowMoreSpan>
                <style.ShowMoreSpan>
                  리뷰 모두 보기&nbsp;&gt;
                </style.ShowMoreSpan>
              </Link>
            </style.ShowMoreBox>
          )}
        </>
      ) : (
        <>
          <style.NoBestReviewHeader>
            <style.InfoTitle> 리뷰</style.InfoTitle>
          </style.NoBestReviewHeader>
          <style.NoBestReviewBox>
            <style.NoBestReviewTitle>
              아직 유튜버의 리뷰가 없습니다.
            </style.NoBestReviewTitle>
            <style.NoBestReviewSub>
              첫 번째 리뷰를 작성 해주세요.
            </style.NoBestReviewSub>
            <style.ReviewWriteBtn to={`/youtubers/reviewWrite/${channel_id}`}>
              유튜버 첫 번째 리뷰하기
            </style.ReviewWriteBtn>
          </style.NoBestReviewBox>
        </>
      )}
    </style.InfoContainer>
  );
}
