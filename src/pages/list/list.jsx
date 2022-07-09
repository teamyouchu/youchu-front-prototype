import * as style from './style';
import { useEffect, useState } from 'react';
import listAPI from 'lib/api/listAPI';
import EmptyResult from 'pages/list/emptyResult/EmptyResult';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import ReviewCard from 'components/homeCard/ReviewCard';

export default function List(props) {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    if (props.location.state) {
      setSearchValue(props.location.state.searchValue);
    }
  }, [props.location.state]);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  const [allYoutubers, setAllYoutubers] = useState([]);
  useEffect(() => {
    const getAllYoutubers = async () => {
      await listAPI
        .getYoutuber(searchValue, 90, 5)
        .then((res) => {
          setAllYoutubers(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    getAllYoutubers();
  }, [searchValue]);

  return (
    <style.ListContainer>
      <style.Title>전체 유튜버</style.Title>
      <style.FilterContainer>
        <style.FilterBox>
          <FilterDropdown
            placeholder="세부 카테고리"
            options={categoryOptions}
          />
          <FilterDropdown placeholder="정렬" options={sortOptions} />
        </style.FilterBox>
        <style.FilterBox>
          <style.SearchForm>
            <style.SearchImg
              src={require('assets/images/searchIcon.svg').default}
            />
            <style.SearchInput
              placeholder="유튜버 이름으로 검색하세요"
              value={searchValue}
              onChange={onSearchValueChange}
            />
          </style.SearchForm>
        </style.FilterBox>
      </style.FilterContainer>
      <style.CardContainer>
        {allYoutubers.map((data) => (
          <ReviewCard key={data.id} data={data} />
        ))}
      </style.CardContainer>
      {/* TODO 서지수 api요청 해결되면 검색결과 없는 상황 만들기 */}
      <EmptyResult />
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
