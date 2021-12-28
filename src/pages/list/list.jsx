import FilterDropdown from 'components/FilterDropdown';
import ReviewCard from 'components/ReviewCard';
import * as style from './style';

export default function List() {
  return (
    <style.ListContainer>
      <style.Title>전체 유튜버</style.Title>
      <style.FilterContainer>
        <FilterDropdown placeholder="세부 카테고리" options={categoryOptions} />
        <FilterDropdown placeholder="정렬" options={sortOptions} />
        <style.SearchForm>
          <style.SearchImg src="/images/searchIcon.svg"/>
          <style.SearchInput placeholder="유튜버 이름으로 검색하세요" />
        </style.SearchForm>
      </style.FilterContainer>
      <style.CardContainer>
        {allYoutuberDatas.data.map(data => (
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
      </style.CardContainer>
    </style.ListContainer>
  );
}

const categoryOptions = [
  {
    key: '영화/애니메이션',
    text: '영화/애니메이션',
    value: '영화/애니메이션',
  },
  {
    key: '자동차/교통',
    text: '자동차/교통',
    value: '자동차/교통',
  },
  {
    key: '음악',
    text: '음악',
    value: '음악',
  },
  {
    key: '애완동물/동물',
    text: '애완동물/동물',
    value: '애완동물/동물',
  },
  {
    key: '스포츠',
    text: '스포츠',
    value: '스포츠',
  },
  {
    key: '여행/이벤트',
    text: '여행/이벤트',
    value: '여행/이벤트',
  },
  {
    key: '게임',
    text: '게임',
    value: '게임',
  },
  {
    key: '인물/블로그',
    text: '인물/블로그',
    value: '인물/블로그',
  },
  {
    key: '코미디',
    text: '코미디',
    value: '코미디',
  },
  {
    key: '엔터테인먼트',
    text: '엔터테인먼트',
    value: '엔터테인먼트',
  },
  {
    key: '뉴스/정치',
    text: '뉴스/정치',
    value: '뉴스/정치',
  },
  {
    key: '노하우/스타일',
    text: '노하우/스타일',
    value: '노하우/스타일',
  },
  {
    key: '교육',
    text: '교육',
    value: '교육',
  },
  {
    key: '과학기술',
    text: '과학기술',
    value: '과학기술',
  },
  {
    key: '비영리/사회운동',
    text: '비영리/사회운동',
    value: '비영리/사회운동',
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

const allYoutuberDatas = {
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