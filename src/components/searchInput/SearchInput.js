import * as style from './SearchInputStyle';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import searchAPI from 'lib/api/searchAPI';
import RelatedSearch from 'components/relatedSearch/RelatedSearch';
import { throttle } from 'lodash';

export default function SearchInput({ page, setChannel, setRistOpen }) {
  // 화면 넓이 1170px 이하되면 연관검색어 종료
  const handleWindowResize = () => {
    if (page === 'header') {
      if (window.innerWidth < 1170) {
        setIsRelatedSearch(false);
      }
    }
  };

  // esc 키 누르면 연관 검색어 종료
  const escFunction = (e) => {
    if (e.keyCode === 27) {
      setIsRelatedSearch(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    document.addEventListener('keydown', escFunction);
    return () => {
      window.addEventListener('resize', handleWindowResize);
      document.removeEventListener('keydown', escFunction);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 검색어 외 영역 클릭 시 연관검색어 종료
  const inputRef = useRef();
  const [isRelatedSearch, setIsRelatedSearch] = useState(false);
  useEffect(() => {
    const handleCloseSearch = (e) => {
      if (
        isRelatedSearch &&
        (!inputRef.current || !inputRef.current.contains(e.target))
      ) {
        setIsRelatedSearch(false);
      }
    };
    window.addEventListener('click', handleCloseSearch);
    return () => {
      window.removeEventListener('click', handleCloseSearch);
    };
  }, [isRelatedSearch]);

  // 검색 submit 다음 흐름
  const history = useHistory();
  const onSearch = (e) => {
    e.preventDefault();
    if (page === 'header' && window.innerWidth < 1170) {
      history.push('/search');
    } else if (page !== 'registration') {
      history.push({
        pathname: '/youtubers',
        state: {
          searchValue: searchValue,
        },
      });
      setSearchValue('');
      setIsRelatedSearch(false);
    }
  };

  // 유추에 등록된 유튜버 검색 api
  const getSearchResult = async () => {
    await searchAPI
      .youtuberSearchFromYouchu('lastedReviewed', 0, searchValue, 0, 6)
      .then((res) => {
        setSearchResults(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  // 유튜브에 유튜버 검색 api
  const [searchResults, setSearchResults] = useState([]);
  const searchYoutuber = async (value) => {
    await searchAPI
      .youtuberSearchFromGoogle(value, 30)
      .then((res) => {
        setSearchResults(res.data.channels);
      })
      .catch((err) => console.log(err));
  };

  //TODO 서지수 임시로 작성한 듯 삭제하기
  const throttled = useMemo(
    () =>
      throttle((value) => {
        searchYoutuber(value);
      }, 5000),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // 검색어
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    if (searchValue) {
      // 검색어가 있으면 연관검색어 표시
      setIsRelatedSearch(true);
      if (page === 'registration') {
        throttled(searchValue);
        // TODO 서지수 api 용량 초과 해결되면 위에 코드 지우고 아래 코드로 사용하기
        // searchYoutuber(e.target.value);
      } else {
        getSearchResult();
      }
    } else {
      // 검색어가 없으면 연관검색어 미표시
      setIsRelatedSearch(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  // 위, 아래 키보드 입력 시 자동 완성
  // const autoRef = useRef(null);
  // const [index, setIndex] = useState(-1);
  // const [keyIndex, setKeyIndex] = useState(-1);
  // const handleKeyArrow = (e) => {
  //   if (searchValue.length > 0) {
  //     switch (e.key) {
  //       case 'ArrowDown': //키보드 down 키
  //         setIndex(index + 1);
  //         setKeyIndex(index + 1);
  //         if (autoRef.current?.childElementCount === index + 1) {
  //           setIndex(0);
  //           setKeyIndex(0);
  //         }
  //         break;
  //       case 'ArrowUp': //키보드 up 키
  //         setIndex(index - 1);
  //         setKeyIndex(index - 1);
  //         if (index <= 0) {
  //           setIndex(-1);
  //           setKeyIndex(-1);
  //         }
  //         break;
  //       default:
  //     }
  //   }
  // };
  // useEffect(() => {
  //   if (keyIndex >= 0) {
  //     setIsRelatedSearch(true);
  //     setSearchValue(autoRef.current?.children[keyIndex].children[1].innerText);
  //   } else {
  //     setIsRelatedSearch(false);
  //     setSearchValue('');
  //   }
  // }, [keyIndex]);

  return (
    <style.SearchBox>
      <style.SearchForm
        ref={inputRef}
        onSubmit={onSearch}
        // onKeyDown={handleKeyArrow}
        page={page}
      >
        {page === 'header' && (
          <style.SearchImg
            src={require('assets/images/searchIcon.svg').default}
            onClick={onSearch}
          />
        )}
        <style.SearchInput
          page={page}
          placeholder="유튜버 이름으로 검색하세요!"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClick={() => {
            if (searchValue) setIsRelatedSearch(!isRelatedSearch);
          }}
          autoFocus={page !== 'header' && true}
        />
      </style.SearchForm>
      {isRelatedSearch && (
        <RelatedSearch
          page={page}
          searchResults={searchResults}
          setSearchValue={setSearchValue}
          setIsRelatedSearch={setIsRelatedSearch}
          setChannel={setChannel}
          setRistOpen={setRistOpen}
          // autoRef={autoRef}
          // index={index}
          // setIndex={setIndex}
          // setKeyIndex={setKeyIndex}
        />
      )}
    </style.SearchBox>
  );
}
