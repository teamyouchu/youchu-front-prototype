import * as style from './style';
import { useEffect, useState } from 'react';
import listAPI from 'lib/api/listAPI';
import EmptyResult from 'pages/list/emptyResult/EmptyResult';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import { categoryOptions, sortOptions } from 'lib/modules';
import ReviewCard from 'components/reviewCard/ReviewCard';

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
