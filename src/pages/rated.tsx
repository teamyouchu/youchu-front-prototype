import { useEffect, useState } from 'react';
import { IReviewList } from '@/lib/types';
import userAPI from '@/api/userAPI';
import Seo from '@/components/Seo';
import ChannelList from '@/components/ChannelList';
import withAuth from '@/components/HOC/withAuth';
import { useInView } from 'react-intersection-observer';

const Rated = () => {
  const [skip, setSkip] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [evaledList, setEvaledList] = useState<IReviewList>({
    data: [],
    hasNext: true,
  });

  // 나의 평가 조회 함수
  const getReviews = async () => {
    await userAPI
      .getMyReviews(skip, 10)
      .then(({ data }) => {
        setIsLoading(true);
        setEvaledList({
          ...evaledList,
          data: [...evaledList.data, ...data.data],
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
    if (evaledList.hasNext && inView) {
      getReviews();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <Seo title="평가 목록" />
      <div className="evaled_container">
        {isLoading && <ChannelList from={'evaled'} data={evaledList.data} />}
      </div>
      <div ref={ref} />

      <style jsx>{`
        .evaled_container {
          width: 400px;
          margin: 0 auto;
          background: #f6f7fa 0% 0% no-repeat padding-box;
          opacity: 1;
          padding-top: 30px;
        }
        @media (max-width: 400px) {
          .evaled_container {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default withAuth(Rated);
