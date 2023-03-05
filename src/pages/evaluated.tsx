import { useEffect, useState } from 'react';
import { IReviewList } from '@/lib/types';
import Seo from '@/components/Seo';
import YoutuberList from '@/components/YoutuberList';
import userAPI from '@/api/userAPI';
import withAuth from '@/components/HOC/withAuth';

const Evaluated = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [evaledList, setEvaledList] = useState<IReviewList>({
    data: [],
    hasNext: true,
  });
  useEffect(() => {
    const getReviews = async () => {
      await userAPI
        .getMyReviews(0, 10)
        .then(({ data }) => {
          setIsLoading(true);
          setEvaledList(data);
        })
        .catch((err) => console.log(err));
    };
    getReviews();
  }, []);

  return (
    <>
      <Seo title="평가 목록" />
      <div className="evaled_container">
        {isLoading && <YoutuberList from={'evaled'} data={evaledList.data} />}
      </div>

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

export default withAuth(Evaluated);
