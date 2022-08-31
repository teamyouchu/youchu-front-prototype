import * as style from './ReviewInfoStyle';
import { useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import StarRating from 'components/starRating/StarRating';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ContentsOverflow from 'components/contentsOverflow/ContentsOverflow';

export default function ReviewInfo({
  data: { youtuber, writer, rating, content, createdDatetime, likes },
  from,
  youtuberAll,
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
  const delReview = () => {
    // TODO 서지수 리뷰 아이디로 삭제 요청 보내기
    console.log('삭제하기');
  };

  return (
    <style.ReviewInfoContainer>
      {from === 'youtuber' ? (
        <style.ReviewInfoHeader>
          {!youtuberAll && <style.BestReview>Best Review</style.BestReview>}
          <style.WriterInfoFlex>
            <style.ReviewWriterImg src={writer.writerThumbnail} />
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
              <style.ReviewWriterName>
                {writer.writerName}
              </style.ReviewWriterName>
            </style.WriterInfoBox>
          </style.WriterInfoFlex>
        </style.ReviewInfoHeader>
      ) : (
        <style.ReviewInfoHeader>
          <style.YoutuberName to={`/youtubers/review/${youtuber.id}`}>
            {youtuber.name}&nbsp;&gt;
          </style.YoutuberName>
          <style.RatingBox>
            <StarRating ratings={rating} margins="5px 0px" />
            <style.Ratings>{rating.toFixed(1)}</style.Ratings>
          </style.RatingBox>
        </style.ReviewInfoHeader>
      )}
      <ContentsOverflow contents={content} />
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
          {writer.writerEmail !== userObj.email && (
            <style.ReportButton onClick={reportReview}>
              신고하기
            </style.ReportButton>
          )}
        </style.UtilBox>
        {writer.writerEmail === userObj.email && (
          <style.DeleteButton onClick={delReview}>삭제하기</style.DeleteButton>
        )}
      </style.UtilContainer>
    </style.ReviewInfoContainer>
  );
}
