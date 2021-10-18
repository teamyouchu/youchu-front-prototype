import FilterDropdown from 'components/FilterDropdown';
import ReviewCard from 'components/ReviewCard';
import * as style from './style';

export default function List() {
  const categoryOptions = [
    {
      key: '음악',
      text: '음악',
      value: '음악',
    },
    {
      key: '엔터테이먼트',
      text: '엔터테이먼트',
      value: '엔터테이먼트',
    },
    {
      key: '게임',
      text: '게임',
      value: '게임',
    },
  ];

  const sortOptions = [
    {
      key: '리뷰가 최근에 달린',
      text: '리뷰가 최근에 달린',
      value: '리뷰가 최근에 달린',
    },
    {
      key: '최근에 등록된',
      text: '최근에 등록된',
      value: '최근에 등록된',
    },
    {
      key: '별점이 높은 순',
      text: '별점이 높은 순',
      value: '별점이 높은 순',
    },
    {
      key: '인기순',
      text: '인기순',
      value: '인기순',
    },
  ];
  return (
    <style.ListContainer>
      <style.Title>전체 유튜버</style.Title>
      <FilterDropdown placeholder="세부 카테고리" options={categoryOptions} />
      <FilterDropdown placeholder="정렬" options={sortOptions} />
      <style.CardContainer>
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
          bestReview="제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 큰 위로가"
        />
        <ReviewCard
          img="주키니TV"
          category="게임"
          channelName="주키니TV"
          subscriberCount="50.4만"
          reviewCount="295"
          ratings="4.1"
          bestReview="즐겁게 게임하는 주키니입니다. 채널에 오신 여러분들 환영합니다~ 구독 좋아요♥"
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
      </style.CardContainer>
    </style.ListContainer>
  );
}
