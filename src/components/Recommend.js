import RecommendCard from './RecommendCard';
import styled from 'styled-components';

const RowTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const RowDescription = styled.div`
  font-size: 14px;
  color: #94969B;
  font-weight: lighter;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function ReviewRank() {
  return (
    <div className="row-container">
      <RowTitle>맞춤 추천</RowTitle>
      <RowDescription>여러분이 관심 있을 유튜버를 모아봤어요!</RowDescription>
      <CardContainer>
        <RecommendCard 
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
        />
        <RecommendCard 
            channelName="딩고 뮤직 / dingo music"
            ratings="4.0"
            reviewCount="500"
            category="엔터테이너"
        />
        <RecommendCard 
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
        />
        <RecommendCard 
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
        />
        <RecommendCard 
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
        />
        <RecommendCard 
            channelName="월간 윤종신"
            ratings="5.0"
            reviewCount="381"
            category="음악"
        />
      </CardContainer>
    </div>
  );
}