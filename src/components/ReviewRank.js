import ReviewCard from './ReviewCard';
import * as style from './styles/RowStyle';

export default function ReviewRank() {
  return (
    <div className="row-container">
      <style.RowTitle>이번주 리뷰가 많은 유튜버</style.RowTitle>
      <style.RowDescription>리뷰 보러 가보실까요?</style.RowDescription>
      <style.Slider>
        <style.HandlePrev>
          <style.Img src={'/images/back.png'} />
        </style.HandlePrev>
        <ReviewCard
          img="월간 윤종신"
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
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
          img="월간 윤종신"
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          img="월간 윤종신"
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          img="월간 윤종신"
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          img="월간 윤종신"
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          img="월간 윤종신"
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <style.HandleNext>
          <style.Img src={'/images/next.png'} />
        </style.HandleNext>
      </style.Slider>
    </div>
  );
}
