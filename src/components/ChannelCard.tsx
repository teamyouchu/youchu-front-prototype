import Image from 'next/image';
import { overThousand } from '@/lib/numberFomat';
import { IChannel } from '@/lib/types';
import StarRating from './StarRating';
import { useRouter } from 'next/router';

interface IProps {
  data: IChannel;
}

export default function ChannelCard({
  data: { id, channelId, thumbnail, name, rating, reviewCount },
}: IProps) {
  const { pathname } = useRouter();
  return (
    <>
      <li className="card_container">
        <a
          href={`https://www.youtube.com/channel/${
            pathname === '/recommend' ? id : channelId
          }`}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="asdfasdfasdfsd"
            src={thumbnail}
            alt={`${name} 프로필 사진`}
            width={42}
            height={42}
            style={{
              border: '1px solid #dedede',
              borderRadius: '50%',
              marginRight: '16px',
              backgroundColor: '#dedede',
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
                ({overThousand(reviewCount)}개 평가)
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
        </a>
      </li>

      <style jsx>{`
        .card_container {
          border-bottom: 1px solid #dedede;
          padding: 16px 0;
        }
        .card_container:first-child {
          padding-top: 30px;
        }
        .card_container:last-child {
          padding-bottom: 30px;
          border-bottom: 0;
        }

        a {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          width: 100%;
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
