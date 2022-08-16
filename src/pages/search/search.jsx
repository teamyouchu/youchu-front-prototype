import * as style from './style';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import RelatedSearch from 'components/relatedSearch/RelatedSearch';
// import listAPI from 'lib/api/listAPI';

export default function Search({ setIsShow }) {
  // 모바일, 태블릿 검색 페이지에 헤더, 푸터 안보이게하는 코드
  useEffect(() => {
    setIsShow(false);
    return () => {
      setIsShow(true);
    };
  }, [setIsShow]);

  // 등록된 유튜버 검색 api
  // TODO 서지수 api 완성 시 주석 제거
  // const [searchResults, setSearchResults] = useState([]);
  // const getSearchResult = async () => {
  //   await listAPI
  //     .getYoutuber(searchValue, 90, 5)
  //     .then((res) => {
  //       setSearchResults(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // 검색어
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      // 검색어가 있으면 연관검색어 표시
      setIsSearch(true);
      // getSearchResult(); TODO 서지수 api 완성 시 주석 제거
    } else {
      // 검색어가 없으면 연관검색어 미표시
      setIsSearch(false);
    }
  };

  // 검색 submit했을 때, 다음 흐름
  const history = useHistory();
  const onSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/youtubers',
      state: {
        searchValue: searchValue,
      },
    });
    setSearchValue('');
    setIsSearch(false);
  };

  // esc 키 누르면 모달 종료
  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        history.goBack();
      }
    },
    [history],
  );
  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  const [index, setIndex] = useState(-1);
  const autoRef = useRef(null);
  const handleKeyArrow = (e) => {
    if (searchValue.length > 0) {
      switch (e.key) {
        case 'ArrowDown': //키보드 down 키
          setIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          break;
        case 'ArrowUp': //키보드 up 키
          setIndex(index - 1);
          if (index <= 0) {
            setIndex(-1);
          }
          break;
        // case 'Escape': // esc key를 눌렀을때,
        //   setIsSearch(false);
        //   setIndex(-1);
        //   break;
        default:
      }
    }
  };

  useEffect(() => {
    if (index >= 0) {
      setSearchValue(autoRef.current?.children[index].children[1].innerText);
    }
    // if (index < 0) {
    //   setIsSearch(false);
    // } else {
    //   setIsSearch(true);
    // }
  }, [index]);

  return (
    <style.SearchPageContainer>
      <style.HeaderBox>
        <style.SearchInputBox onSubmit={onSearch} onKeyDown={handleKeyArrow}>
          <style.SearchInput
            placeholder="유튜버 이름으로 검색하세요"
            value={searchValue}
            onChange={onSearchValueChange}
            autoFocus
            spellcheck="false"
          />
          {isSearch && (
            <RelatedSearch
              page={'search'}
              // searchResults={searchResults} TODO 서지수 api 완성 시 주석 제거
              setSearchValue={setSearchValue}
              setIsSearch={setIsSearch}
              autoRef={autoRef}
              index={index}
              setIndex={setIndex}
            />
          )}
        </style.SearchInputBox>
        <style.Xmark
          src={require('assets/images/xmark.svg').default}
          alt="empty image"
          onClick={() => {
            history.goBack();
          }}
        />
      </style.HeaderBox>
    </style.SearchPageContainer>
  );
}
