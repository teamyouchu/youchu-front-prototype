import { /* useState,*/ useEffect } from 'react';
import * as style from './style';
// import mainAPI from 'lib/api/mainAPI';
import RecommendCard from 'components/recommendCard/RecommendCard';
import ReviewCard from 'components/reviewCard/ReviewCard';

export default function Home() {
  // const [bestYoutuber, setBestYoutuber] = useState([]);
  // const [recommendYoutuber, setRecommendYoutuber] = useState([]);

  useEffect(() => {
    getBestYoutuber();
    getRecommendYoutuber();
  }, []);

  const getBestYoutuber = async () => {
    // await mainAPI
    //   .getBest()
    //   .then((res) => {
    //     setBestYoutuber(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  const getRecommendYoutuber = async () => {
    // await mainAPI
    //   .getRecommend()
    //   .then((res) => {
    //     setRecommendYoutuber(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
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
              <ReviewCard key={data.id} data={data} />
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

const bestYoutuber = [
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNSaaaaaa',
    subscribes: 999,
    rating: '5.0',
    reviews: 100,
    bestReview:
      '존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게존나길게',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: '1천',
    rating: '4.9',
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: '1.3천',
    rating: 3.9,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 0,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 0,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 0,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 0,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 0,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 0,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 0,
    rating: 5.0,
    reviews: 100,
    bestReview: '하하',
  },
];

const recommendYoutuber = [
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNSaaaaaaaaaaaaaaaㅁㄴㅇㄹㅁㄴㅇaaaㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㅁㄴㅇaaaasdasdfadsfasfds',
    rating: '5.0',
    reviews: 100,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 4.9,
    reviews: 100,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 3.2,
    reviews: 100,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 5.0,
    reviews: 100,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 5.0,
    reviews: 100,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 5.0,
    reviews: 100,
    category: 23,
  },
];
