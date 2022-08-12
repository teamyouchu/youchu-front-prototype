import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as style from './HeaderStyle';
// import listAPI from 'lib/api/listAPI';
import Registration from 'components/registration/Registration';
import { UserContext } from 'lib/UserContext';
import RelatedSearch from 'components/relatedSearch/RelatedSearch';

export default function Header() {
  const { userObj } = useContext(UserContext);

  // 스크롤 여부 (하단 그림자)
  const [isScrolled, setIsScrolled] = useState(false);
  const listener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', listener);
  }, []);

  // 유튜버 등록 모달 토글
  const [registOpen, setRistOpen] = useState(false);
  const registClose = () => {
    setRistOpen(!registOpen);
  };

  // 검색어
  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      // 검색어가 있으면 연관검색어 표시
      setIsSearch(true);
    } else {
      // 검색어가 없으면 연관검색어 미표시
      setIsSearch(false);
    }
  };

  // 검색어 외 영역 클릭에 따른 연관검색어 표시 여부
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
            {isSearch && <RelatedSearch setIsSearch={setIsSearch} />}
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
