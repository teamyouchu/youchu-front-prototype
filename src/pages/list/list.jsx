import * as style from './style';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import listAPI from 'lib/api/listAPI';
import EmptyResult from 'pages/list/emptyResult/EmptyResult';
import ReviewCard from 'components/reviewCard/ReviewCard';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import { categoryOptions, sortOptions } from 'lib/modules';

export default function List({ setIsSearchShow }) {
  useEffect(() => {
    setIsSearchShow(false);
    return () => {
      setIsSearchShow(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    if (location.state) {
      setSearchValue(location.state.searchValue);
    }
  }, [location.state]);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  // const [allYoutubers, setAllYoutubers] = useState([]);
  useEffect(() => {
    // const getAllYoutubers = async () => {
    //   await listAPI
    //     .getYoutuber(searchValue, 90, 5)
    //     .then((res) => {
    //       setAllYoutubers(res.data.data);
    //     })
    //     .catch((err) => console.log(err));
    // };
    // getAllYoutubers();
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
      {allYoutubers ? (
        <style.CardContainer>
          {allYoutubers.map((data) => (
            <ReviewCard key={data.id} page={'list'} data={data} />
          ))}
        </style.CardContainer>
      ) : (
        // TODO 서지수 api요청 해결되면 검색결과 없는 상황 만들기
        <EmptyResult />
      )}
    </style.ListContainer>
  );
}

const allYoutubers = [
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNSaaaaaa',
    subscribes: 1234,
    rating: '5.0',
    reviews: 111111,
    bestReview:
      '매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게매우길게',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ2',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 12345,
    rating: '4.9',
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ3',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 123456,
    rating: 3.9,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ4',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 1234567,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ5',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 12345678,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ6',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    category: 23,
    name: '빠더너스 BDNS',
    subscribes: 1234567890000,
    rating: 5,
    reviews: 100,
    bestReview: '하하',
  },
];
