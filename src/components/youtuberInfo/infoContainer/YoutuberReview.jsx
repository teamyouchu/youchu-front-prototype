import * as style from './style';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import StarRating from 'components/starRating/StarRating';
import ReviewInfo from 'components/reviewInfo/ReviewInfo';
import { numberComma } from 'lib/numberFomat';
import reviewAPI from 'api/reviewAPI';
import EmptyReview from '../emptyReview/EmptyReview';

export default function YoutuberReview({
  youtuberInfo: { id, reviews, rating },
  all,
}) {
  const { channel_id } = useParams();

  const [bestReveiw, setBestReveiw] = useState({
    isLoading: false,
    data: {},
  });

  useEffect(() => {
    reviewAPI
      .getBestReview(channel_id)
      .then((res) => {
        setBestReveiw({
          ...bestReveiw,
          isLoading: true,
          data: res.data.data[0],
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {bestReveiw.isLoading && (
        <style.InfoContainer>
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
              <ReviewInfo data={bestReveiw.data} from={'youtuber'} />
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
            <EmptyReview channel_id={channel_id} />
          )}
        </style.InfoContainer>
      )}
    </>
  );
}
