import * as style from './ReviewInfoStyle';
import { useState } from 'react';
import StarRating from 'components/starRating/StarRating';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function ReviewInfo({
  data: {
    youtuber: { id, name },
    rating,
    content,
    createdDatetime,
    likes,
  },
  from,
}) {
  // 정렬 기능 구현

  const onLikeClick = () => {
    // TODO 서지수 좋아요 기능 구현
    console.log('좋아요');
  };
  const reportReview = () => {
    // TODO 서지수 신고하기 기능 구현
    console.log('신고하기');
  };
  const delReview = () => {
    // TODO 서지수 리뷰 아이디로 삭제 요청 보내기
    console.log('삭제하기');
  };

  const [showMore, setShowMore] = useState(false);
  return (
    <style.ReviewInfoContainer>
      {from === 'youtuber' ? (
        <style.ReviewInfoHeader>
          <style.BestReview>Best Review</style.BestReview>
          <style.WriterInfoFlex>
            <style.ReviewWriterImg
              src={require('assets/images/profile.png').default}
            />
            <style.WriterInfoBox>
              <style.RatingBox margin_B={'3px'}>
                <Rating
                  precision={0.1}
                  value={rating}
                  emptyIcon={<StarIcon fontSize="inherit" />}
                  readOnly
                />
                <style.Ratings>{rating.toFixed(1)}</style.Ratings>
              </style.RatingBox>
              <style.ReviewWriterName>병팔이</style.ReviewWriterName>
            </style.WriterInfoBox>
          </style.WriterInfoFlex>
        </style.ReviewInfoHeader>
      ) : (
        <style.ReviewInfoHeader>
          <style.YoutuberName to={`/youtubers/review/${id}`}>
            {name}&nbsp;&gt;
          </style.YoutuberName>
          <style.RatingBox>
            <StarRating ratings={rating} margins="5px 0px" />
            <style.Ratings>{rating.toFixed(1)}</style.Ratings>
          </style.RatingBox>
        </style.ReviewInfoHeader>
      )}
      <style.ReviewContent className={showMore ? '' : 'showHidden'}>
        {content}
      </style.ReviewContent>
      {!showMore && (
        <style.ViewMore
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          자세히 보기
        </style.ViewMore>
      )}
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
          {/* TODO 서지수 자신의 리뷰인지에 따라 신고하기와 삭제하기 적절하게 표시하기 */}
          <style.ReportButton onClick={reportReview}>
            신고하기
          </style.ReportButton>
        </style.UtilBox>
        <style.DeleteButton onClick={delReview}>삭제하기</style.DeleteButton>
      </style.UtilContainer>
    </style.ReviewInfoContainer>
  );
}
