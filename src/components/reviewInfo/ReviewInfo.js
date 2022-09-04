import * as style from './ReviewInfoStyle';
import { useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ContentsOverflow from 'components/contentsOverflow/ContentsOverflow';
import BulrReview from 'components/bulrReview/BulrReview';
import reviewAPI from 'lib/api/reviewAPI';

export default function ReviewInfo({
  data: { id, youtuber, writer, rating, content, createdDatetime, likes },
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
  const delReview = async () => {
    await reviewAPI
      .delReview(id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <style.ReviewInfoContainer>
      {from === 'youtuber' && youtuberAll && !userObj.hasReview && (
        <BulrReview channel_id={youtuber.id} />
      )}
      <style.ReviewInfoBox>
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
              <Rating
                precision={0.1}
                value={rating}
                emptyIcon={<StarIcon fontSize="inherit" />}
                readOnly
                size="small"
              />
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
            <style.DeleteButton onClick={delReview}>
              삭제하기
            </style.DeleteButton>
          )}
        </style.UtilContainer>
      </style.ReviewInfoBox>
    </style.ReviewInfoContainer>
  );
}
