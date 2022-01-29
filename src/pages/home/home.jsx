import { useState, useEffect } from 'react';
import RecommendCard from 'components/RecommendCard';
import ReviewCard from 'components/ReviewCard';
import * as style from './style';
import mainAPI from 'api/mainAPI';

export default function Home() {
  const [bestYoutuber, setBestYoutuber] = useState([])

  useEffect(() => {
    getBestYoutuber();
  }, []);

  const getBestYoutuber = async () => {
    await mainAPI
      .getBest()
      .then((res) => {
        setBestYoutuber(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  
  const [recommendYoutuber, setRecommendYoutuber] = useState([])

  useEffect(() => {
    getRecommendYoutuber();
  }, []);

  const getRecommendYoutuber = async () => {
    await mainAPI
      .getRecommend()
      .then((res) => {
        setRecommendYoutuber(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <style.HomeContainer>
      <style.BannerContainer>
        <style.TextField>
          여러분들만 아는 <br />
          <style.BoldSpan color="#eb3323">유튜버</style.BoldSpan>
          <style.BoldSpan>들을 리뷰해봐요 👍</style.BoldSpan>
        </style.TextField>
        <style.BannerImg src='/images/banner.png' />
      </style.BannerContainer>
      <style.RowContainer>
        <style.RowTitle left='35px'>이번주 리뷰가 많은 유튜버 ✌</style.RowTitle>
        <style.RowDescription left='35px'>리뷰 보러 가보실까요?</style.RowDescription>
        <style.ReviewContainer>
          <style.HandleBtn onClick={slide_L}>
            <i className="fas fa-chevron-left"></i>
          </style.HandleBtn>
          <style.ReviewCardContainer id="slider">           
            {bestYoutuber.map(data => (
              <ReviewCard 
                key={data.id}
                data={data}
              />
            ))}
          </style.ReviewCardContainer>
          <style.HandleBtn onClick={slide_R}>
            <i className="fas fa-chevron-right"></i>
          </style.HandleBtn>
        </style.ReviewContainer>
      </style.RowContainer>
      <style.RowContainer width='1100px'>
        <style.RowTitle>맞춤 추천 💁</style.RowTitle>
        <style.RowDescription>여러분이 관심 있을 유튜버를 모아봤어요!</style.RowDescription>
        <style.RecommendCardContainer>
          {RecommendCardData.data.map(data => (
            <RecommendCard
              key={data.id}
              id={data.id}
              imageUrl={data.imageUrl}
              name={data.name}
              rating={data.rating}
              reviews={data.reviews}
              category={data.category}
            />
          ))}
          {/* {recommendYoutuber.map(data => (
            <RecommendCard
              key={data.id}
              data={data}
            />
          ))} */}
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

const RecommendCardData = {
  "data": [
    {
      "id": "FASKFQWNQWQEQW1",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "name": "월간 윤종신",
      "rating": "5.0",
      "reviews": 381,
      "category": "음악",
    },
    {
      "id": "FASKFQWNQWQEQW2",
      "imageUrl": "https://yt3.ggpht.com/Fef_8oLf6u9pS1TEX6a4e12sTRr-IP-XQo26eg63vZizMItQiGrDZgcTJxugtE08216IZn2zNA=s176-c-k-c0x00ffffff-no-rj-mo",
      "name": "딩고 뮤직 / dingo music",
      "rating": "3.3",
      "reviews": 381,
      "category": "엔터테이먼트",
    },
    {
      "id": "FASKFQWNQWQEQW3",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "name": "월간 윤종신",
      "rating": "5.0",
      "reviews": 381,
      "category": "음악",
    },
    {
      "id": "FASKFQWNQWQEQW4",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "name": "월간 윤종신",
      "rating": "5.0",
      "reviews": 381,
      "category": "음악",
    },
    {
      "id": "FASKFQWNQWQEQW5",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "name": "월간 윤종신",
      "rating": "5.0",
      "reviews": 381,
      "category": "음악",
    },
    {
      "id": "FASKFQWNQWQEQW6",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "name": "월간 윤종신",
      "rating": "5.0",
      "reviews": 381,
      "category": "음악",
    },
  ]
}