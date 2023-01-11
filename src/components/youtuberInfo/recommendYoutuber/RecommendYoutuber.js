import * as style from './recommendYoutuberStyle';
import { useState, useEffect } from 'react';
import RecommendCard from 'components/recommendCard/RecommendCard';
import RecommendCardSkeleton from 'components/recommendCardSkeleton/RecommendCardSkeleton';
import { categoryArray } from 'lib/modules';
import youtuberAPI from 'api/youtuberAPI';

export default function RecommendYoutuber({ category }) {
  const [recommendYoutuber, setRecommendYoutuber] = useState({
    isLoading: false,
    data: [],
  });
  useEffect(() => {
    if (category) {
      youtuberAPI
        .getCategoryRecommendYoutubers(category)
        .then((res) => {
          setRecommendYoutuber({
            ...recommendYoutuber,
            isLoading: true,
            data: res.data.data,
          });
        })
        .catch((err) => console.log(err));
    } else {
      youtuberAPI
        .getMostYoutubers()
        .then((res) => {
          const sliceData = res.data.data.slice(0, 5);
          setRecommendYoutuber({
            ...recommendYoutuber,
            isLoading: true,
            data: sliceData,
          });
        })
        .catch((err) => console.log(err));
    }
    return () => {
      setRecommendYoutuber({
        ...recommendYoutuber,
        isLoading: false,
        data: [],
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  return (
    <style.RecommendContainer>
      <style.RecommendBox>
        {category ? (
          <style.RecommendTitle>
            {categoryArray.find((x) => x.id === category).value}
            &nbsp;유튜버
          </style.RecommendTitle>
        ) : (
          <style.RecommendTitle>이번주 인기 유튜버</style.RecommendTitle>
        )}
      </style.RecommendBox>
      {recommendYoutuber.isLoading
        ? recommendYoutuber.data.map((data) => (
            <RecommendCard key={data.id} page={'youtuber'} data={data} />
          ))
        : Array(4)
            .fill()
            .map((item, index) => (
              <RecommendCardSkeleton key={index} page={'youtuber'} />
            ))}
    </style.RecommendContainer>
  );
}
