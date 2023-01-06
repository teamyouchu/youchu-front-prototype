import * as style from './recommendYoutuberStyle';
import { useState, useEffect } from 'react';
import RecommendCard from 'components/recommendCard/RecommendCard';
import { categoryArray } from 'lib/modules';
import youtuberAPI from 'api/youtuberAPI';

export default function RecommendYoutuber({ category }) {
  const [recommendYoutuber, setRecommendYoutuber] = useState([]);
  useEffect(() => {
    if (category) {
      youtuberAPI
        .getCategoryRecommendYoutubers(category)
        .then((res) => {
          setRecommendYoutuber(res.data.data);
        })
        .catch((err) => console.log(err));
    } else {
      youtuberAPI
        .getMostYoutubers()
        .then((res) => {
          const sliceData = res.data.data.slice(0, 5);
          setRecommendYoutuber(sliceData);
        })
        .catch((err) => console.log(err));
    }
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
      {recommendYoutuber.map((data) => (
        <style.RecommendBox key={data.id}>
          <RecommendCard key={data.id} page={'youtuber'} data={data} />
        </style.RecommendBox>
      ))}
    </style.RecommendContainer>
  );
}
