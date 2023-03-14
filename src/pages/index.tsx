import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RatedReviewsContext, UserContext } from '@/lib/context';
import Seo from '@/components/Seo';
import RateChannel from '@/components/RateChannel';
import RateChannelSkeleton from '@/components/RateChannelSkeleton';
import SubmitButton from '@/components/SubmitButton';
import { IChannel, IChannelList } from '@/lib/types';
import channelAPI from '@/api/channelAPI';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { userObj, setUserObj } = useContext(UserContext);
  const { ratedReviews, setRatedReviews } = useContext(RatedReviewsContext);

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
  const [skip, setSkip] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rateChannels, setRateChannels] = useState<IChannelList>({
    data: [],
    hasNext: true,
  });
  const [isMoreLoading, setIsMoreLoading] = useState<boolean>(false);
  const getRateChannels = async () => {
    await channelAPI
      .getRateChannel(skip, 10)
      .then(({ data }) => {
        const nonooverlap = data.data.filter((item: IChannel) => {
          return !rateChannels.data.some((other) => other.id === item.id);
        });
        setRateChannels({
          ...rateChannels,
          data: [...rateChannels.data, ...nonooverlap],
          hasNext: data.hasNext,
        });
        setIsLoading(true);
        setIsMoreLoading(false);
        setSkip(skip + 10);
      })
      .catch((err) => console.log(err));
  };

  // 무한 스크롤을 이용한 채널 조회
  const [ref, inView] = useInView({
    threshold: 0,
    initialInView: true,
    rootMargin: '300px',
  });
  useEffect(() => {
    if (rateChannels.hasNext && inView) {
      setIsMoreLoading(true);
      getRateChannels();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // 로그인 유저라면 평가한 채널 수 적용
  useEffect(() => {
    if (userObj.isLogin) {
      setRatedReviews({
        ...ratedReviews,
        count: userObj.data?.reviewCount + ratedReviews.reviews.length,
      });
    } else {
      setRatedReviews({
        ...ratedReviews,
        count: ratedReviews.reviews.length,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userObj]);

  // 평가 갯수 5개 이상 여부
  const router = useRouter();
  const [isSatisfy, setIsSatisfy] = useState(false);
  useEffect(() => {
    if (ratedReviews.count >= 5) {
      setIsSatisfy(true);
    } else {
      setIsSatisfy(false);
    }
  }, [ratedReviews.count]);

  // submit 버튼
  const onBtnClick = async () => {
    if (isSatisfy) {
      if (userObj.isLogin) {
        await channelAPI
          .postReviews(ratedReviews.reviews)
          .then(() => {
            setUserObj({
              ...userObj,
              data: {
                ...userObj.data,
                reviewCount:
                  userObj.data.reviewCount + ratedReviews.reviews.length,
              },
            });
            setRatedReviews({
              count: 0,
              reviews: [],
            });
          })
          .catch((err) => console.log(err));
        router.push('/recommend');
      } else {
        router.push('/login?from=button', '/login');
      }
    } else {
      alert('5개 이상 평가해야 추천받을 수 있어요.');
    }
  };

  return (
    <>
      <Seo
        title="홈"
        description={
          '유추에 유튜브 채널을 평가하고 취향에 맞는 채널, 유튜버를 추천 받아	보세요.'
        }
      />
      <main className="home_container">
        <section
          className={isScrolled ? 'rate_count_box scrolled' : 'rate_count_box'}
        >
          <span className="rate_count">{ratedReviews.count}</span>
          <h3 className="rate_count_text">
            {ratedReviews.count < 5
              ? '유튜버 5명에게 평점 남기기 도전!!'
              : '더 많이 평가하면 추천이 더 정확해져요!'}
          </h3>
        </section>

        {/* {userObj.isLogin && (
          <div className="rate_category">
            <ClearableDropdown options={categoryArray} setSort={setCategory} />
          </div>
        )} */}

        <section className="rate_list">
          <ul>
            {isLoading &&
              rateChannels.data.map((data) => (
                <RateChannel key={data.id} data={data} />
              ))}
            {isMoreLoading &&
              Array(3)
                .fill(null)
                .map((_, index) => <RateChannelSkeleton key={index} />)}
          </ul>
          <div className="btn_box" onClick={onBtnClick}>
            <SubmitButton
              isSatisfy={isSatisfy}
              text={
                userObj.isLogin
                  ? '추천 받으러 가기'
                  : '5초만에 가입하고 계속하기'
              }
            />
          </div>
          <div ref={ref} />
        </section>
      </main>

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

        .rate_count_box {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
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

        .rate_count {
          margin-bottom: 5px;
        }

        .rate_count_text {
          font-family: 'SHSN-M';
          font-size: 15px;
          line-height: 19px;
          color: #787878;
          margin: 0;
          margin-bottom: 0;
        }

        .rate_category {
          width: 100%;
          padding: 0 24px;
          z-index: 70;
        }

        .rate_list {
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
