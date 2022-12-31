import * as style from './style';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import youtuberAPI from 'lib/api/youtuberAPI';
import SearchInput from 'components/searchInput/SearchInput';

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
  const onRegisterClick = async () => {
    if (channel.isExist) {
      alert('이미 등록된 유튜버입니다. 유튜버 페이지로 이동합니다.');
      history.push(`/youtubers/review/${channel.channel_id}`);
    } else {
      await youtuberAPI
        .registYoutuber({
          channel_id: channel.channel_id,
        })
        .then((res) => {
          alert('유튜버의 첫 리뷰를 작성해주세요.');
          history.push(`/youtubers/reviewWrite/${channel.channel_id}`);
        })
        .catch((err) => console.log(err));
    }
  };

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
      <style.CompleteButton onClick={onRegisterClick}>
        등록하기
      </style.CompleteButton>
    </style.MRegiContainer>
  );
}
