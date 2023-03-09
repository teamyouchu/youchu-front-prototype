import { useEffect, useState } from 'react';
import { IChannelList } from '@/lib/types';
import userAPI from '@/api/userAPI';
import Seo from '@/components/Seo';
import ChannelList from '@/components/ChannelList';
import withAuth from '@/components/HOC/withAuth';
import { useInView } from 'react-intersection-observer';

const Rated = () => {
  const [skip, setSkip] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ratedList, setRatedList] = useState<IChannelList>({
    data: [],
    hasNext: true,
  });

  // 나의 평가 조회 함수
  const getReviews = async () => {
    await userAPI
      .getMyReviews(skip, 10)
      .then(({ data }) => {
        setIsLoading(true);
        setRatedList({
          ...ratedList,
          data: [...ratedList.data, ...data.data],
          hasNext: data.hasNext,
        });
        setSkip(skip + 10);
      })
      .catch((err) => console.log(err));
  };

  // 무한 스크롤 기능
  const [ref, inView] = useInView({
    threshold: 0,
    initialInView: true,
    rootMargin: '300px',
  });
  useEffect(() => {
    if (ratedList.hasNext && inView) {
      getReviews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <Seo
        title="평가 목록"
        description={'내가 평점을 남긴 유튜버 목록입니다.'}
      />
      <main className="rated_container">
        {isLoading && <ChannelList from={'rated'} data={ratedList.data} />}
      </main>
      <div ref={ref} />

      <style jsx>{`
        .rated_container {
          width: 400px;
          margin: 0 auto;
          background: #f6f7fa 0% 0% no-repeat padding-box;
          opacity: 1;
          padding-top: 30px;
        }
        @media (max-width: 400px) {
          .rated_container {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default withAuth(Rated);
