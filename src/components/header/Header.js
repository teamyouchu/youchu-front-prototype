import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as style from './HeaderStyle';
// import listAPI from 'lib/api/listAPI';
import Registration from 'components/registration/Registration';
import { UserContext } from 'lib/UserContext';

export default function Header() {
  const { userObj } = useContext(UserContext);

  const [isScrolled, setIsScrolled] = useState(false);
  const listener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
  }, []);

  const [registOpen, setRistOpen] = useState(false);
  const registClose = () => {
    setRistOpen(!registOpen);
  };

  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  };

  const el = useRef();
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    const handleCloseSearch = (e) => {
      if (isSearch && (!el.current || !el.current.contains(e.target))) {
        setIsSearch(false);
      }
    };
    window.addEventListener('click', handleCloseSearch);
    return () => {
      window.removeEventListener('click', handleCloseSearch);
    };
  }, [isSearch]);

  // const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const getSearchResult = async () => {
      // await listAPI
      //   .getYoutuber(searchValue, 90, 5)
      //   .then((res) => {
      //     setSearchResults(res.data.data);
      //   })
      //   .catch((err) => console.log(err));
    };

    getSearchResult();
  }, [searchValue]);

  const history = useHistory();
  const onSearch = (e) => {
    e.preventDefault();
    if (window.innerWidth > 1100) {
      history.push({
        pathname: '/youtubers',
        state: {
          searchValue: searchValue,
        },
      });
      setSearchValue('');
    } else {
      history.push({
        pathname: '/search',
        state: {
          searchValue: searchValue,
        },
      });
    }
  };

  return (
    <style.HeaderContainer className={isScrolled ? 'scrolled' : undefined}>
      <style.HeaderBox>
        <style.HeaderFlex direction="column">
          <style.LogoLink to="/">
            <style.LogoImg
              src={require('assets/images/YouChu_logo.png').default}
            />
          </style.LogoLink>
          <style.HeaderNavBox>
            <style.HeaderNav to="/" exact={true}>
              홈
            </style.HeaderNav>
            <style.HeaderNav to="/youtubers">유튜버 리뷰</style.HeaderNav>
          </style.HeaderNavBox>
        </style.HeaderFlex>
        <style.HeaderFlex>
          {/* TODO 서지수 백앤드 연결 시 드랍다운 떨어지고 엔터 누르면 검색 */}
          <style.SearchNav
            exact
            to="/youtubers"
            ref={el}
            onClick={(e) => e.preventDefault()}
          >
            <style.SearchForm onSubmit={onSearch}>
              <style.SearchImg
                src={require('assets/images/searchIcon.svg').default}
                onClick={onSearch}
              />
              <style.SearchInput
                placeholder="유튜버 이름으로 검색하세요"
                value={searchValue}
                onChange={onSearchValueChange}
                onClick={(e) => {
                  if (searchValue) setIsSearch(!isSearch);
                }}
              />
            </style.SearchForm>
            {isSearch && (
              <style.SearchDropdownContainer>
                <style.RelatedSearch>연관 검색어</style.RelatedSearch>
                {/* {searchResults.map((data) => (
                  <style.SearchResult
                    to={`/youtubers/review/id=${data.id}`}
                    key={data.id}
                    onClick={() => {
                      setIsSearch(false);
                    }}
                  >
                    {data.name}
                  </style.SearchResult>
                ))} */}
              </style.SearchDropdownContainer>
            )}
          </style.SearchNav>
          <style.RegisterButton color="red" onClick={registClose}>
            유튜버 등록
          </style.RegisterButton>
          {registOpen && <Registration registClose={registClose} />}
          {userObj.imageUrl !== '' ? (
            <style.AvatarLink to="/profile">
              <style.GoogleAvatar src={userObj.imageUrl} />
            </style.AvatarLink>
          ) : (
            <Link
              to={{
                pathname: '/login',
                state: {
                  from: 'button',
                },
              }}
            >
              <style.LoginButton>로그인</style.LoginButton>
            </Link>
          )}
        </style.HeaderFlex>
      </style.HeaderBox>
    </style.HeaderContainer>
  );
}
