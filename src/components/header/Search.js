import * as style from './headerStyle';

export default function Search() {
  return (
    <>
      <style.SearchContainer>
        <style.SearchImg src="/images/searchIcon.png" />
        <style.InputYoutuber placeholder="유튜버 이름으로 검색하세요"></style.InputYoutuber>
      </style.SearchContainer>
    </>
  );
}
