import Image from 'next/image';
import { overThousand } from '@/lib/numberFomat';
import { IReview, IChannel } from '@/lib/types';
import StarRating from './StarRating';

interface IProps {
  data: IChannel | IReview;
}

export default function ChannelCard({
  data: { thumbnail, name, rating, reviewCount },
}: IProps) {
  return (
    <>
      <div className="recs_card_container">
        <Image
          src={thumbnail}
          alt={`${name} 썸네일`}
          width={42}
          height={42}
          style={{
            border: '1px solid #dedede',
            borderRadius: '50%',
            marginRight: '16px',
          }}
        />
        <div className="group_box">
          <div className="group margin-3">
            <span className="channel_name">{name}</span>
          </div>
          <div className="group">
            <StarRating rating={rating} />
            <span className="rating_span">
              {rating !== null ? rating.toFixed(1) : 0}
            </span>
            <span className="review_count">
              ({overThousand(reviewCount)}개 리뷰)
            </span>
          </div>
          {/* 카테고리 삭제로 주석 처리 */}
          {/* <div className="group">
            <div className="category_box">
              {category
                ? categoryArray.find((x) => x.key === category)?.text
                : '미지정'}
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .recs_card_container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          width: 100%;
          border-bottom: 1px solid #dedede;
          padding: 16px 0;
        }
        .recs_card_container:first-child {
          padding: 30px 0 16px 0;
        }
        .recs_card_container:last-child {
          padding: 16px 0 30px 0;
          border-bottom: 0;
        }

        .group_box {
          width: calc(100% - 100px);
        }

        .group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }
        .margin-3 {
          margin-bottom: 3px;
        }
        .margin-5 {
          margin-bottom: 5px;
        }

        span {
          font-family: 'SHSN-M';
          text-align: left;
          letter-spacing: 0px;
          color: #000000;
        }

        .channel_name {
          font-size: 16px;
          line-height: 21px;

          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .rating_span {
          font-size: 14px;
          line-height: 18px;
          margin: 0 5px 0 6px;
        }

        .review_count {
          font-size: 14px;
          line-height: 18px;
          color: #94969b;
        }

        .category_box {
          font-family: 'SHSN-M';
          text-align: center;
          font-size: 11px;
          line-height: 14px;
          letter-spacing: 0px;
          color: #808084;
          background: #f2f2f2 0% 0% no-repeat padding-box;
          border-radius: 5px;
          padding: 6px 8px;
        }
      `}</style>
    </>
  );
}
