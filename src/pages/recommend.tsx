import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { UserContext } from '@/lib/context';
import ChannelList from '@/components/ChannelList';
import Seo from '@/components/Seo';
import withAuth from '@/components/HOC/withAuth';
import { IChannel } from '@/lib/types';
import channelAPI from '@/api/channelAPI';

const Recommend = () => {
  const { userObj } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommendList, setRecommendList] = useState<IChannel[]>([]);

  useEffect(() => {
    const getRecommends = async () => {
      await channelAPI
        .getRecommendChannel()
        .then(({ data: { data } }) => {
          setIsLoading(true);
          setRecommendList(data);
        })
        .catch((err) => console.log(err));
    };
    getRecommends();
  }, []);
  return (
    <>
      <Seo
        title="추천 목록"
        description={'남긴 평점을 이용해 좋아할만한 채널을 추천해요.'}
      />
      <div className="recs_container">
        <div className="rated_count_box">
          <div className="row_flex">
            <div className="rated_count_title_box">
              <span className="star_span">★</span>
              <span className="rated_count_title">평가 수</span>
            </div>
            <Link href={'rated'}>
              <span className="rated_link">평가한 유튜버 보러 가기</span>
            </Link>
          </div>
          <span className="rated_count">{userObj.data?.reviewCount}</span>
          <span className="rated_count_text">5개 평가하기 달성!</span>
          <span className="rated_count_text">
            더 많이 평가하시면 추천이 더 정확해져요!
          </span>
        </div>
        {isLoading && <ChannelList from={'recs'} data={recommendList} />}
      </div>

      <style jsx>{`
        .recs_container {
          width: 400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #f6f7fa 0% 0% no-repeat padding-box;
          opacity: 1;
        }
        @media (max-width: 400px) {
          .recs_container {
            width: 100%;
          }
        }

        .rated_count_box {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 20px 24px;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          margin: 30px 0;
        }

        .row_flex {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .rated_count_title_box {
          display: flex;
        }

        span {
          font-family: 'SHSN-B';
          text-align: left;
          letter-spacing: 0px;
          color: #000000;
        }

        .star_span {
          font-family: 'SHSN-M';
          font-size: 19px;
          line-height: 19px;
          color: #f8d26a;
          margin-right: 6px;
        }

        .rated_count_title {
          font-family: 'SHSN-B';
          font-size: 16px;
          line-height: 21px;
        }

        .rated_link {
          font-family: 'SHSN-L';
          text-align: right;
          font-size: 16px;
          line-height: 21px;
          color: #94969b;
          text-decoration: underline;
        }

        .rated_count {
          text-align: center;
          font-size: 45px;
          line-height: 57px;
          color: #5c7fdf;
          margin-bottom: 10px;
        }

        .rated_count_text {
          text-align: center;
          font-size: 14px;
          line-height: 18px;
          color: #787878;
        }
      `}</style>
    </>
  );
};

export default withAuth(Recommend);
