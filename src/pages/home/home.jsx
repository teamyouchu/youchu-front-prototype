import { useState, useEffect } from 'react';
import * as style from './style';
import youtuberAPI from 'lib/api/youtuberAPI';
import ReviewCard from 'components/reviewCard/ReviewCard';
import RecommendCard from 'components/recommendCard/RecommendCard';

export default function Home() {
  const [bestYoutuber, setBestYoutuber] = useState([]);
  const [recommendYoutuber, setRecommendYoutuber] = useState([]);

  useEffect(() => {
    getBestYoutuber();
    getRecommendYoutuber();
  }, []);

  const getBestYoutuber = async () => {
    await youtuberAPI
      .getMostYoutubers()
      .then((res) => {
        setBestYoutuber(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getRecommendYoutuber = async () => {
    await youtuberAPI
      .getRecommendYoutubers()
      .then((res) => {
        setRecommendYoutuber(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <style.HomeContainer>
      <style.BannerContainer>
        <style.TextField>
          여러분들만 아는 <br />
          <style.BoldSpan color="#eb3323">유튜버</style.BoldSpan>
          <style.BoldSpan>들을 추천해봐요 👍</style.BoldSpan>
        </style.TextField>
        <style.BannerImg src={require('assets/images/banner.png').default} />
      </style.BannerContainer>
      <style.RowContainer>
        <style.RowTitle left="35px">
          이번주 리뷰가 많은 유튜버 ✌
        </style.RowTitle>
        <style.RowDescription left="35px">
          리뷰 보러 가보실까요?
        </style.RowDescription>
        <style.ReviewContainer>
          <style.HandleBtn onClick={slide_L}>
            <i className="fas fa-chevron-left"></i>
          </style.HandleBtn>
          <style.ReviewCardContainer id="slider">
            {bestYoutuber.map((data) => (
              <ReviewCard key={data.id} page={'home'} data={data} />
            ))}
          </style.ReviewCardContainer>
          <style.HandleBtn onClick={slide_R}>
            <i className="fas fa-chevron-right"></i>
          </style.HandleBtn>
        </style.ReviewContainer>
      </style.RowContainer>
      <style.RowContainer width="1100px">
        <style.RowTitle>맞춤 추천 💁</style.RowTitle>
        <style.RowDescription>
          여러분이 관심 있을 유튜버를 모아봤어요!
        </style.RowDescription>
        <style.RecommendCardContainer>
          {recommendYoutuber.map((data) => (
            <RecommendCard key={data.id} data={data} />
          ))}
        </style.RecommendCardContainer>
      </style.RowContainer>
    </style.HomeContainer>
  );
}

const slide_L = () =>
  document.getElementById('slider').scrollBy({
    top: 0,
    left: -280,
    behavior: 'smooth',
  });

const slide_R = () =>
  document.getElementById('slider').scrollBy({
    top: 0,
    left: 280,
    behavior: 'smooth',
  });
