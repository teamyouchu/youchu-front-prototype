import Skeleton from '@mui/material/Skeleton';

export default function RateChannelSkeleton() {
  return (
    <>
      <li className="rate_channel_container">
        <Skeleton
          variant="circular"
          width={66}
          height={54}
          style={{ marginRight: '10px' }}
        />
        <div className="group_box">
          <div className="group margin-5">
            <Skeleton variant="rounded" width={150} height={21} />
          </div>
          <div className="group margin-10">
            <Skeleton
              variant="rounded"
              width={25}
              height={14}
              style={{ marginRight: '5px' }}
            />
            <Skeleton variant="rounded" width={60} height={14} />
          </div>
          <div className="group">
            <Skeleton variant="rounded" width={240} height={48} />
          </div>
        </div>
      </li>

      <style jsx>{`
        .rate_channel_container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          border-bottom: 1px solid #dedede;
          padding: 18px 0 15px 0;
        }
        .rate_channel_container:last-child {
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

        .rate_channel_name {
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
