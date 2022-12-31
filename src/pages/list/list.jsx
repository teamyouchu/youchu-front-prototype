import * as style from './style';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchAPI from 'lib/api/searchAPI';
import EmptyResult from 'pages/list/emptyResult/EmptyResult';
import ReviewCard from 'components/reviewCard/ReviewCard';
import ReviewCardSkeleton from 'components/reviewCardSkeleton/ReviewCardSkeleton';
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
  const [searchValue, setSearchValue] = useState(
    location.state ? location.state.searchValue : '',
  );

  const [allYoutubers, setAllYoutubers] = useState({
    isLoading: false,
    data: [],
  });
  const [category, setCategory] = useState(0);
  const [sortBy, setSortBy] = useState('lastedRegistered');
  const [size, setSize] = useState(20);

  useEffect(() => {
    const getAllYoutubers = () => {
      searchAPI
        .youtuberSearchFromYouchu(sortBy, category, searchValue, 0, size)
        .then((res) => {
          setAllYoutubers({
            ...allYoutubers,
            isLoading: true,
            data: res.data.data,
          });
        })
        .catch((err) => console.log(err));
    };
    getAllYoutubers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy, category, searchValue, size]);

  const handleScroll = () => {
    if (document.body.scrollHeight - 480 - 500 < window.scrollY) {
      setSize(size + 10);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <style.ListContainer>
      <style.Title>전체 유튜버</style.Title>
      <style.FilterContainer>
        <style.FilterBox>
          <FilterDropdown options={categoryOptions} setSort={setCategory} />
          <FilterDropdown options={sortOptions} setSort={setSortBy} />
        </style.FilterBox>
        <style.FilterBox>
          <style.SearchDiv>
            <style.SearchImg
              src={require('assets/images/searchIcon.svg').default}
            />
            <style.SearchInput
              placeholder="유튜버 이름으로 검색하세요"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </style.SearchDiv>
        </style.FilterBox>
      </style.FilterContainer>
      {allYoutubers.isLoading ? (
        <>
          {allYoutubers.data.length > 0 ? (
            <style.CardContainer>
              {allYoutubers.data.map((data) => (
                <ReviewCard key={data.id} page={'list'} data={data} />
              ))}
            </style.CardContainer>
          ) : (
            <EmptyResult />
          )}
        </>
      ) : (
        <style.CardContainer>
          {Array(20)
            .fill()
            .map((item, index) => (
              <ReviewCardSkeleton key={index} page={'list'} />
            ))}
        </style.CardContainer>
      )}
    </style.ListContainer>
  );
}
