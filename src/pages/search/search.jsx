import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as style from './style';

export default function Search({ setIsShow }) {
  useEffect(() => {
    setIsShow(false);
    return () => {
      setIsShow(true);
    }
  }, [setIsShow]);

  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }

  return (
    <style.SearchPageContainer>
      <style.HeaderBox>
        <style.SearchInput placeholder="유튜버 이름으로 검색하세요"/>
        <style.Xmark src="/images/xmark.svg" alt="empty image" onClick={goBack}/>
      </style.HeaderBox>
    </style.SearchPageContainer>
  );
}

