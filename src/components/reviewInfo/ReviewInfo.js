import * as style from './ReviewInfoStyle';
import { useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import StarRating from 'components/starRating/StarRating';
import ContentsOverflow from 'components/contentsOverflow/ContentsOverflow';
import BulrReview from 'components/bulrReview/BulrReview';
import reviewAPI from 'lib/api/reviewAPI';

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
  },
  from,
  all,
}) {
  const { userObj } = useContext(UserContext);
  // 정렬 기능 구현

  const onLikeClick = () => {
    // TODO 서지수 좋아요 기능 구현
    console.log('좋아요');
  };
  const reportReview = () => {
    // TODO 서지수 신고하기 기능 구현
    console.log('신고하기');
  };
  const delReview = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      await reviewAPI
        .delReview(reviewId)
        .then((res) => {
          alert('삭제되었습니다.');
          window.location.reload();
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
            <style.LikeButton onClick={onLikeClick}>
              <style.LikeImg
                alt="좋아요"
                src={require('assets/images/heart.svg').default}
              />
              <style.likeCount>{likes}</style.likeCount>
            </style.LikeButton>
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
