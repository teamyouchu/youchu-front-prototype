import * as style from './ReviewInfoStyle';
import { useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import StarRating from 'components/starRating/StarRating';
import ContentsOverflow from 'components/contentsOverflow/ContentsOverflow';
import BulrReview from 'components/bulrReview/BulrReview';
import reviewAPI from 'lib/api/reviewAPI';
import LikeButton from 'components/likeButton/LikeButton';

export default function ReviewInfo({
  data: {
    reviewId,
    channelId,
    title,
    authorId,
    authorName,
    authorImgUrl,
    rating,
    comment,
    createdDatetime,
    likes,
    liked,
  },
  getReviews,
  from,
  all,
}) {
  const { userObj } = useContext(UserContext);
  const reportReview = async () => {
    // TODO 서지수 신고하기 기능 구현
    if (window.confirm('신고하시겠습니까?')) {
      await reviewAPI
        .postReviewReport(reviewId)
        .then(() => {
          alert('신고되었습니다.');
        })
        .catch((err) => console.error(err));
    }
  };

  const delReview = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      await reviewAPI
        .delReview(reviewId)
        .then(() => {
          alert('삭제되었습니다.');
          getReviews();
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <style.ReviewInfoContainer>
      {from === 'youtuber' && all && !userObj.hasReview && (
        <BulrReview channel_id={channelId} />
      )}
      <style.ReviewInfoBox>
        {from === 'youtuber' ? (
          <style.ReviewInfoHeader>
            {!all && <style.BestReview>Best Review</style.BestReview>}
            <style.WriterInfoFlex>
              <style.ReviewWriterImg src={authorImgUrl} />
              <style.WriterInfoBox>
                <style.RatingBox margin_B={'3px'}>
                  <StarRating rating={rating} />
                  <style.Ratings>{rating.toFixed(1)}</style.Ratings>
                </style.RatingBox>
                <style.ReviewWriterName>{authorName}</style.ReviewWriterName>
              </style.WriterInfoBox>
            </style.WriterInfoFlex>
          </style.ReviewInfoHeader>
        ) : (
          <style.ReviewInfoHeader>
            <style.YoutuberName to={`/youtubers/review/${channelId}`}>
              {title}&nbsp;&gt;
            </style.YoutuberName>
            <style.RatingBox>
              <StarRating rating={rating} />
              <style.Ratings>{rating.toFixed(1)}</style.Ratings>
            </style.RatingBox>
          </style.ReviewInfoHeader>
        )}
        <ContentsOverflow contents={comment} />
        <style.ReviewCreated>
          {createdDatetime.substr(0, 4)}.{createdDatetime.substr(5, 2)}.
          {createdDatetime.substr(8, 2)}
        </style.ReviewCreated>
        <style.UtilContainer>
          <style.UtilBox>
            <LikeButton
              reviewId={reviewId}
              userId={userObj.id}
              liked={liked}
              likes={likes}
            />
            {authorId !== userObj.id && (
              <style.ReportButton onClick={reportReview}>
                신고하기
              </style.ReportButton>
            )}
          </style.UtilBox>
          {authorId === userObj.id && (
            <style.DeleteButton onClick={delReview}>
              삭제하기
            </style.DeleteButton>
          )}
        </style.UtilContainer>
      </style.ReviewInfoBox>
    </style.ReviewInfoContainer>
  );
}
