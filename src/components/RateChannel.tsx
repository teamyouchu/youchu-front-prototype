import Image from 'next/image';
import { overThousand } from '@/lib/numberFomat';
import { IYoutuber } from '@/lib/types';
import { RatedReviewsContext } from '@/lib/context';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import { useContext } from 'react';

interface IProps {
  data: IYoutuber;
}

export default function RateChannel({
  data: { id, thumbnail, name, rating, reviewCount },
}: IProps) {
  const { ratedReviews, setRatedReviews } = useContext(RatedReviewsContext);
  const findIndex = ratedReviews.reviews.findIndex((el) => el.channelId === id);

  const onRatingChange = (newValue: number | null) => {
    if (newValue === null) {
      // 평가 삭제
      setRatedReviews({
        ...ratedReviews,
        count: ratedReviews.count - 1,
        reviews: [...ratedReviews.reviews.filter((el) => el.channelId !== id)],
      });
    } else {
      // 평가 목록에 있는지 판단
      const isIncludes = ratedReviews.reviews.find((el) => el.channelId === id);
      if (isIncludes) {
        // 평가 수정
        const copyArray = [...ratedReviews.reviews];
        copyArray[findIndex] = { ...copyArray[findIndex], rating: newValue };
        setRatedReviews({
          ...ratedReviews,
          reviews: copyArray,
        });
      } else {
        // 평가 추가
        setRatedReviews({
          ...ratedReviews,
          count: ratedReviews.count + 1,
          reviews: [
            ...ratedReviews.reviews,
            { channelId: id, comment: '', rating: newValue },
          ],
        });
      }
    }
  };

  return (
    <>
      <div className="eval_youtuber_container">
        <Image
          src={thumbnail}
          alt={`${name} 썸네일`}
          width={54}
          height={54}
          style={{ borderRadius: '50%', marginRight: '10px' }}
        />
        <div className="group_box">
          {/* 카테고리 삭제로 주석 처리 */}
          {/* <div className="group margin-6">
            <div className="category_box">
              {category
                ? categoryArray.find((x) => x.key === category)?.text
                : '미지정'}
            </div>
          </div> */}
          <div className="group margin-5">
            <span className="eval_youtuber_name">{name}</span>
          </div>
          <div className="group margin-10">
            <span className="star_span">★</span>
            <span className="rating_span">
              {rating !== null ? rating.toFixed(1) : 0}
            </span>
            <span className="review_count">
              ({overThousand(reviewCount)}개 평가)
            </span>
          </div>
          <div className="group">
            <Rating
              style={{ color: '#f8d26a', fontSize: '48px' }}
              precision={0.5}
              value={
                findIndex === -1 ? null : ratedReviews.reviews[findIndex].rating
              }
              onChange={(_, newValue) => {
                onRatingChange(newValue);
              }}
              emptyIcon={<StarIcon fontSize="inherit" />}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .eval_youtuber_container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          border-bottom: 1px solid #dedede;
          padding: 18px 0 15px 0;
        }
        .eval_youtuber_container:last-child {
          border-bottom: 0;
        }

        .group_box {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .margin-6 {
          margin-bottom: 6px;
        }
        .margin-5 {
          margin-bottom: 5px;
        }
        .margin-10 {
          margin-bottom: 10px;
        }

        .category_box {
          background: #f2f2f2 0% 0% no-repeat padding-box;
          border-radius: 5px;
          opacity: 1;
          padding: 5px 9px;

          font-family: 'SHSN-M';
          text-align: center;
          font-size: 10px;
          line-height: 13px;
          letter-spacing: 0px;
          color: #808084;
        }

        span {
          font-family: 'SHSN-M';
          text-align: left;
          letter-spacing: 0px;
          color: #000000;
        }

        .eval_youtuber_name {
          font-size: 16px;
          line-height: 21px;
        }

        .star_span {
          font-size: 14px;
          line-height: 14px;
          color: #f8d26a;
        }

        .rating_span {
          font-size: 11px;
          line-height: 14px;
          margin: 0 5px;
        }

        .review_count {
          font-size: 11px;
          line-height: 14px;
          color: #94969b;
        }
      `}</style>
    </>
  );
}
