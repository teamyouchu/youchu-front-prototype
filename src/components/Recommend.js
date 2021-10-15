import RecommendCard from './RecommendCard';
import * as style from './styles/RowStyle';

export default function ReviewRank() {
  return (
    <style.RowContainer>
      <style.RowTitle>맞춤 추천 💁</style.RowTitle>
      <style.RowDescription>여러분이 관심 있을 유튜버를 모아봤어요!</style.RowDescription>
      <style.RecommendCardContainer>
        <RecommendCard
          img="월간 윤종신"
          channelName="월간 윤종신"
          ratings="5.0"
          reviewCount="381"
          category="음악"
        />
        <RecommendCard
          img="딩고 뮤직"
          channelName="딩고 뮤직 / dingo music"
          ratings="4.0"
          reviewCount="500"
          category="엔터테이너"
        />
        <RecommendCard
          img="월간 윤종신"
          channelName="월간 윤종신"
          ratings="5.0"
          reviewCount="381"
          category="음악"
        />
        <RecommendCard
          img="월간 윤종신"
          channelName="월간 윤종신"
          ratings="5.0"
          reviewCount="381"
          category="음악"
        />
        <RecommendCard
          img="월간 윤종신"
          channelName="월간 윤종신"
          ratings="5.0"
          reviewCount="381"
          category="음악"
        />
        <RecommendCard
          img="월간 윤종신"
          channelName="월간 윤종신"
          ratings="5.0"
          reviewCount="381"
          category="음악"
        />
      </style.RecommendCardContainer>
    </style.RowContainer>
  );
}
