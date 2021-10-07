import ReviewCard from './ReviewCard';
import styled from 'styled-components';

const RowContainer = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  // overflow: hidden;
`;

const RowTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 5px;
`;

const RowDescription = styled.div`
  font-size: 14px;
  color: #94969B;
  font-weight: lighter;
  margin-bottom: 20px;
`;

const Slider = styled.div`
  margin-bottom: 60px;
  position: relative;
`;

const Img = styled.img.attrs(props => ({
  src : props.src,
}))`
    width: 15px;
    height: 25px;
`;

const HandlePrev = styled.button`
    background: rgba( 255, 255, 255, 0.5 );
    border: 0; 
    cursor: pointer;
    position: absolute;
    left: -2px;
    top: 0;
    bottom: 0;
    width: 4%;
`;

const HandleNext = styled.button`
    background: rgba( 255, 255, 255, 0.5 );
    border: 0; 
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4%;
`;

export default function ReviewRank() {
  return (
    <RowContainer>
      <RowTitle>이번주 리뷰가 많은 유튜버</RowTitle>
      <RowDescription>리뷰 보러 가보실까요?</RowDescription>
      <Slider>
        <HandlePrev>
          <Img 
            src={require('./img/back.png').default}
          />
        </HandlePrev>
        <ReviewCard
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          category="엔터테이너"
          channelName="딩고 뮤직 / dingo music"
          subscriberCount="329만"
          reviewCount="500"
          ratings="3.3"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <ReviewCard
          category="음악"
          channelName="월간 윤종신"
          subscriberCount="22.5만"
          reviewCount="381"
          ratings="5.0"
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만"
        />
        <HandleNext>
          <Img 
            src={require('./img/next.png').default}
          />
        </HandleNext>
      </Slider>
    </RowContainer>
  );
}
