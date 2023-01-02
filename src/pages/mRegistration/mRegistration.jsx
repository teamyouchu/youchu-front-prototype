import * as style from './style';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from 'components/searchInput/SearchInput';
import RegButton from 'components/regButton/RegButton';

export default function MRegistration({ setIsShowRegisterBtn, setRistOpen }) {
  const history = useHistory();

  useEffect(() => {
    // 화면이 1170 이상이면 home 페이지로 이동 후 모달 켜기
    const handleWindowResize = () => {
      if (window.innerWidth >= 1170) {
        history.goBack();
        setRistOpen(true);
      }
    };

    setIsShowRegisterBtn(false);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      setIsShowRegisterBtn(true);
      window.removeEventListener('resize', handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 유튜버 등록 요청 코드
  const [channel, setChannel] = useState();

  return (
    <style.MRegiContainer>
      <style.Span
        font="SHSN-L"
        size="25px"
        lineHeight="31px"
        margins="0 0 30px 0"
      >
        유튜버 등록
      </style.Span>
      <style.Span font="SHSN-R" margins="0 0 10px 0">
        등록하시려는 유튜버의 이름을 입력해주세요!
      </style.Span>
      <SearchInput page={'registration'} setChannel={setChannel} />
      <RegButton channel={channel} />
    </style.MRegiContainer>
  );
}
