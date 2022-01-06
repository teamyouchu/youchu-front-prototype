import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as style from './HeaderStyle';
import Registration from 'components/Registration';

export default function Header() {
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
  };

  return (
    <style.HeaderContainer className={isScrolled ? 'scrolled' : undefined}>
      <style.HeaderBox>
        <style.HeaderFlex>
          <style.LogoLink to="/">
            <style.LogoImg src="/images/YouChu_logo.png" />
          </style.LogoLink>
          <style.HeaderNav to="/" exact={true}>
            홈
          </style.HeaderNav>
          <style.HeaderNav to="/youtubers">유튜버 리뷰</style.HeaderNav>
        </style.HeaderFlex>
        <style.HeaderFlex>
          {/* TODO 서지수 백앤드 연결 시 드랍다운 떨어지고 엔터 누르면 검색 */}
          <style.SearchForm>
            <style.SearchImg src="/images/searchIcon.svg" />
            <style.SearchInput
              placeholder="유튜버 이름으로 검색하세요"
              value={searchValue}
              onChange={onSearchValueChange}
            />
          </style.SearchForm>
          {searchValue && (
            <style.SearchDropdownContainer>
              <style.RelatedSearch>연관 검색어</style.RelatedSearch>
              {searchResults.data.map((data) => (
                <style.SearchResult key={data.id}>{data.name}</style.SearchResult>
              ))}
            </style.SearchDropdownContainer>
          )}
          <style.RegisterButton color="red" onClick={registClose}>
            유튜버 등록
          </style.RegisterButton>
          <Link to="/login">
            <style.LoginButton>로그인</style.LoginButton>
          </Link>
        </style.HeaderFlex>
      </style.HeaderBox>
      {registOpen && <Registration registClose={registClose} />}
    </style.HeaderContainer>
  );
}

const searchResults = {
  data: [
    {
      id: 'FASKFQWNQWQEQW1',
      name: '지식 한입',
    },
    {
      id: 'FASKFQWNQWQEQW2',
      name: '지식 한잔',
    },
    {
      id: 'FASKFQWNQWQEQW3',
      name: '지식 세잔',
    },
    {
      id: 'FASKFQWNQWQEQW4',
      name: '지식 두잔',
    },
    {
      id: 'FASKFQWNQWQEQW5',
      name: '지식 세입',
    },
  ],
};
