import * as style from './ReviewInfoStyle';
import { useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import StarRating from 'components/starRating/StarRating';
import ContentsOverflow from 'components/contentsOverflow/ContentsOverflow';
import BulrReview from 'components/bulrReview/BulrReview';
import reviewAPI from 'lib/api/reviewAPI';

export default function ReviewInfo({
  data: {
    id,
    youtuberId,
    youtuberName,
    writerId,
    writerName,
    writerImgUrl,
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
        .delReview(id)
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
        <BulrReview channel_id={youtuberId} />
      )}
      <style.ReviewInfoBox>
        {from === 'youtuber' ? (
          <style.ReviewInfoHeader>
            {!all && <style.BestReview>Best Review</style.BestReview>}
            <style.WriterInfoFlex>
              <style.ReviewWriterImg src={writerImgUrl} />
              <style.WriterInfoBox>
                <style.RatingBox margin_B={'3px'}>
                  <StarRating rating={rating} />
                  <style.Ratings>{rating.toFixed(1)}</style.Ratings>
                </style.RatingBox>
                <style.ReviewWriterName>{writerName}</style.ReviewWriterName>
              </style.WriterInfoBox>
            </style.WriterInfoFlex>
          </style.ReviewInfoHeader>
        ) : (
          <style.ReviewInfoHeader>
            <style.YoutuberName to={`/youtubers/review/${youtuberId}`}>
              {youtuberName}&nbsp;&gt;
            </style.YoutuberName>
            <style.RatingBox>
              <StarRating rating={rating} />
              <style.Ratings>{rating.toFixed(1)}</style.Ratings>
            </style.RatingBox>
          </style.ReviewInfoHeader>
        )}
        <ContentsOverflow contents={comment} />
        <style.ReviewCreated>{createdDatetime}</style.ReviewCreated>
        <style.UtilContainer>
          <style.UtilBox>
            <style.LikeButton onClick={onLikeClick}>
              <style.LikeImg
                alt="좋아요"
                src={require('assets/images/heart.svg').default}
              />
              <style.likeCount>{likes}</style.likeCount>
            </style.LikeButton>
            {writerId !== userObj.id && (
              <style.ReportButton onClick={reportReview}>
                신고하기
              </style.ReportButton>
            )}
          </style.UtilBox>
          {writerId === userObj.id && (
            <style.DeleteButton onClick={delReview}>
              삭제하기
            </style.DeleteButton>
          )}
        </style.UtilContainer>
      </style.ReviewInfoBox>
    </style.ReviewInfoContainer>
  );
}
