import RecommendCard from 'components/RecommendCard';
import ReviewCard from 'components/ReviewCard';
import * as style from './style';

export default function Home() {
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
            {reviewCardData.data.map(data => (
              <ReviewCard 
                key={data.id}
                id={data.id}
                imgUrl={data.imageUrl}
                category={data.category}
                channelName={data.name}
                subscriberCount={data.subscribes}
                ratings={data.rating}
                reviewCount={data.reviews}
                bestReview={data.bestReview}
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
              imgUrl={data.imageUrl}
              channelName={data.name}
              ratings={data.rating}
              reviewCount={data.reviews}
              category={data.category}
            />
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

const reviewCardData = {
  "data": [
    {
		  "id": "FASKFQWNQWQEQW",
      "name": "월간 윤종신",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "subscribes": 2205000,
      "category": "음악",
      "rating": "5.0",
      "reviews": 381,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
    },
    {
		  "id": "FASKFQWNaWQEQW",
      "name": "딩고 뮤직 / dingo music",
      "imageUrl": "https://yt3.ggpht.com/Fef_8oLf6u9pS1TEX6a4e12sTRr-IP-XQo26eg63vZizMItQiGrDZgcTJxugtE08216IZn2zNA=s176-c-k-c0x00ffffff-no-rj-mo",
      "subscribes": 3500000,
      "category": "엔터테이먼트",
      "rating": "3.3",
      "reviews": 500,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
    },
    {
		  "id": "FASKFQWNQ12EQW",
      "name": "고닝 gonying",
      "imageUrl": "https://yt3.ggpht.com/i2wSxM2f7jSuWFucw8E0hshanbJrrw2AQhtwJ0gZ9V2rGA_QeYdgM-CyDRFpGmDhA-gqBrLyjA=s176-c-k-c0x00ffffff-no-rj-mo",
      "subscribes": 21,
      "category": "여행",
      "rating": "5.0",
      "reviews": 2,
      "bestReview": "재밌어요 기대가 되는 채널이에요."
    },
    {
		  "id": "FASKFQWNQWQEQW1",
      "name": "BLACKPINK",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLS48A09N2xyM8i9JeIfYCWsd-13csflXwYa8XAmoA=s176-c-k-c0x00ffffff-no-rj-mo",
      "subscribes": 70900000,
      "category": "엔터테이너",
      "rating": "5.0",
      "reviews": 1919119,
      "bestReview": "최고의 걸그룹"
    },
    {
		  "id": "FASKFQWNQWQEQW2",
      "name": "월간 윤종신",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "subscribes": 2205000,
      "category": "음악",
      "rating": "5.0",
      "reviews": 381,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
    },{
		  "id": "FASKFQWNQWQEQW3",
      "name": "월간 윤종신",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "subscribes": 2205000,
      "category": "음악",
      "rating": "5.0",
      "reviews": 381,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
    },{
		  "id": "FASKFQWNQWQEQW4",
      "name": "월간 윤종신",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "subscribes": 2205000,
      "category": "음악",
      "rating": "5.0",
      "reviews": 381,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
    },{
		  "id": "FASKFQWNQWQEQW5",
      "name": "월간 윤종신",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "subscribes": 2205000,
      "category": "음악",
      "rating": "5.0",
      "reviews": 381,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
    },{
		  "id": "FASKFQWNQWQEQW6",
      "name": "월간 윤종신",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "subscribes": 2205000,
      "category": "음악",
      "rating": "5.0",
      "reviews": 381,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
    },{
		  "id": "FASKFQWNQWQEQW7",
      "name": "월간 윤종신",
      "imageUrl": "https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s176-c-k-c0x00ffffff-no-rj",
      "subscribes": 2205000,
      "category": "음악",
      "rating": "5.0",
      "reviews": 381,
      "bestReview": "제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
    }
  ]
}

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