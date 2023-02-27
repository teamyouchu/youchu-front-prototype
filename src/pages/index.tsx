import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '@/lib/context';
import Seo from '@/components/Seo';
import EvalYoutuber from '@/components/EvalYoutuber';
import RateChannelSkeleton from '@/components/RateChannelSkeleton';
import SubmitButton from '@/components/SubmitButton';
import { IEvalYoutubers, IYoutuberList } from '@/lib/types';
import channelAPI from '@/api/channelAPI';

export default function Home() {
  const { userObj } = useContext(UserContext);

  // 스크롤 여부 (하단 그림자)
  const [isScrolled, setIsScrolled] = useState(false);
  const listener = () => {
    setIsScrolled(window.pageYOffset > 82);
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  // 평가할 채널 조회
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rateChannels, setRateChannels] = useState<IYoutuberList>({
    data: [],
    hasNext: true,
  });

  useEffect(() => {
    const getRateChannels = async () => {
      await channelAPI
        .getRateChannel(0, 10)
        .then(({ data }) => {
          setIsLoading(true);
          setRateChannels(data);
        })
        .catch((err) => console.log(err));
    };
    getRateChannels();
  }, []);

  const [evalYoutubers, setEvalYoutubers] = useState<IEvalYoutubers>({
    count: 0,
    list: [],
  });
  useEffect(() => {
    if (userObj.isLogin) {
      setEvalYoutubers({
        ...evalYoutubers,
        count: userObj.data?.reviewCount as number,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userObj]);

  const router = useRouter();
  const [isSatisfy, setIsSatisfy] = useState(false);
  useEffect(() => {
    if (evalYoutubers.count >= 5) {
      setIsSatisfy(true);
    } else {
      setIsSatisfy(false);
    }
  }, [evalYoutubers.count]);

  const onBtnClick = () => {
    if (isSatisfy) {
      if (userObj.isLogin) {
        router.push('/recommend');
      } else {
        router.push('/login?from=button', '/login');
      }
    }
  };

  return (
    <>
      <Seo title="홈" />
      <div className="home_container">
        <div
          className={isScrolled ? 'eval_count_box scrolled' : 'eval_count_box'}
        >
          <span className="eval_count">{evalYoutubers.count}</span>
          <span className="eval_count_text">
            {evalYoutubers.count < 5
              ? '유튜버 5명에게 평점 남기기 도전!!'
              : '더 많이 평가하시면 추천이 더 정확해져요!'}
          </span>
        </div>

        {/* {userObj.isLogin && (
          <div className="eval_category">
            <ClearableDropdown options={categoryArray} setSort={setCategory} />
          </div>
        )} */}

        <div className="eval_list">
          <div>
            {isLoading
              ? rateChannels.data.map((data) => (
                  <EvalYoutuber
                    key={data.id}
                    data={data}
                    evalYoutubers={evalYoutubers}
                    setEvalYoutubers={setEvalYoutubers}
                  />
                ))
              : Array(6)
                  .fill(null)
                  .map((_, index) => <RateChannelSkeleton key={index} />)}
          </div>
          <div className="btn_box" onClick={onBtnClick}>
            <SubmitButton
              text={
                userObj.isLogin
                  ? '추천 받으러 가기'
                  : '5초만에 가입하고 계속하기'
              }
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .home_container {
          width: 400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #f6f7fa 0% 0% no-repeat padding-box;
          opacity: 1;
        }
        @media (max-width: 400px) {
          .home_container {
            width: 100%;
          }
        }

        .eval_count_box {
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 12px;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          margin-bottom: 10px;

          position: sticky;
          top: 0;
          z-index: 80;
          transition: box-shadow 0.5s;
        }
        .scrolled {
          box-shadow: 0 20px 20px -20px #dedede;
        }

        span {
          font-family: 'SHSN-B';
          text-align: center;
          font-size: 25px;
          line-height: 31px;
          letter-spacing: 0px;
          color: #000000;
        }

        .eval_count {
          margin-bottom: 5px;
        }

        .eval_count_text {
          font-family: 'SHSN-M';
          font-size: 15px;
          line-height: 19px;
          color: #787878;
          margin-bottom: 0;
        }

        .eval_category {
          width: 100%;
          padding: 0 24px;
          z-index: 70;
        }

        .eval_list {
          width: 100%;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          padding: 0 24px 20px 24px;
          margin-top: 20px;
        }

        .btn_box {
          position: sticky;
          bottom: 30px;
          z-index: 60;
        }
      `}</style>
    </>
  );
}
