import listAPI from 'api/listAPI';
import FilterDropdown from 'components/FilterDropdown';
import ReviewCard from 'components/ReviewCard';
import { useEffect, useState } from 'react';
import * as style from './style';

export default function List() {
  const [allYoutubers, setAllYoutubers] = useState([])
  useEffect(() => {
    getAllYoutubers();
  }, []);

  const getAllYoutubers = async () => {
    await listAPI
      .getYoutuber("검색결과", 90, 5)
      .then((res) => {
        setAllYoutubers(res.data.data);
      })
      .catch((err) => console.log(err));
  };   

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
        {allYoutubers.map(data => (
          <ReviewCard 
          key={data.id}
          data={data}
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