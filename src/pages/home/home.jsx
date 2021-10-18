import Recommend from 'components/Recommend';
import ReviewCard from 'components/ReviewCard';
import * as style from './style';

export default function Home() {
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

  return (
    <style.HomeContainer>
      <style.BannerContainer>
        <style.TextField>
          여러분들만 아는 <br />
          <style.RedSpan>유튜버</style.RedSpan>들을 리뷰해봐요
        </style.TextField>
        <style.BannerImg src='/images/banner.png' />
      </style.BannerContainer>
      <style.RowContainer>
        <style.RowTitle>이번주 리뷰가 많은 유튜버 ✌</style.RowTitle>
        <style.RowDescription>리뷰 보러 가보실까요?</style.RowDescription>
        <style.HandlePrev onClick={slide_L}>
          <style.ArrowImg src='/images/back.png' />
        </style.HandlePrev>
        <style.ReviewCardContainer id="slider">
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
          <ReviewCard
            img="딩고 뮤직"
            category="엔터테이너"
            channelName="딩고 뮤직 / dingo music"
            subscriberCount="329만"
            reviewCount="500"
            ratings="3.3"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
          />
          <ReviewCard
            img="고닝 gonying"
            category="여행"
            channelName="고닝 gonying"
            subscriberCount="21"
            reviewCount="2"
            ratings="5.0"
            bestReview="병맛이라 재밌어요 기대가 되는 채널이에요."
          />
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
          <ReviewCard
            img="월간 윤종신"
            category="음악"
            channelName="월간 윤종신"
            subscriberCount="22.5만"
            reviewCount="381"
            ratings="5.0"
            bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
          />
        </style.ReviewCardContainer>
        <style.HandleNext onClick={slide_R}>
          <style.ArrowImg src='/images/next.png' />
        </style.HandleNext>
      </style.RowContainer>



      <Recommend />
    </style.HomeContainer>
  );
}
