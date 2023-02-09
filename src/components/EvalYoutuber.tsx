import { categoryArray } from '@/lib/arrays';
import { overThousand } from '@/lib/numberFomat';
import { IEvalYoutubers } from '@/pages';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';

interface IProps {
  data: {
    id: string;
    thumbnail: string;
    title: string;
    rating: number | null;
    reviews: number;
    category: number;
  };
  evalYoutubers: IEvalYoutubers;
  setEvalYoutubers: React.Dispatch<React.SetStateAction<IEvalYoutubers>>;
}

export default function EvalYoutuber({
  data: { id, thumbnail, title, rating, reviews, category },
  evalYoutubers,
  setEvalYoutubers,
}: IProps) {
  const onRatingChange = (newValue: number | null) => {
    if (newValue === null) {
      // 평가 삭제
      setEvalYoutubers({
        ...evalYoutubers,
        count: evalYoutubers.count - 1,
        list: [...evalYoutubers.list.filter((el) => el.youtuberId !== id)],
      });
    } else {
      const isIncludes = evalYoutubers.list.find((el) => el.youtuberId === id);
      if (isIncludes) {
        // 평가 수정
        const findIndex = evalYoutubers.list.findIndex(
          (el) => el.youtuberId === id,
        );
        const copyArray = [...evalYoutubers.list];
        copyArray[findIndex] = { ...copyArray[findIndex], rating: newValue };
        setEvalYoutubers({
          ...evalYoutubers,
          list: copyArray,
        });
      } else {
        // 평가 추가
        setEvalYoutubers({
          ...evalYoutubers,
          count: evalYoutubers.count + 1,
          list: [...evalYoutubers.list, { youtuberId: id, rating: newValue }],
        });
      }
    }
  };
  return (
    <>
      <div className="eval_youtuber_container">
        <img className="thumbnail" src={thumbnail} alt={title} />
        <div className="group_box">
          <div className="group margin-6">
            <div className="category_box">
              {category
                ? categoryArray.find((x) => x.key === category)?.text
                : '미지정'}
            </div>
          </div>
          <div className="group margin-5">
            <span className="eval_youtuber_name">{title}</span>
          </div>
          <div className="group margin-10">
            <span className="star_span">★</span>
            <span className="rating_span">
              {rating !== null ? rating.toFixed(1) : 0}
            </span>
            <span className="review_count">
              ({overThousand(reviews)}개 평가)
            </span>
          </div>
          <div className="group">
            <Rating
              style={{ color: '#f8d26a', fontSize: '48px' }}
              precision={0.5}
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

        .thumbnail {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          margin-right: 10px;
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
