import * as style from './RegistrationStyle';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import youtuberAPI from 'lib/api/youtuberAPI';
import SearchInput from 'components/searchInput/SearchInput';

export default function Registration({ setRistOpen }) {
  // 모달 영역 외 클릭 시 종료
  const closeModal = ({ target }) => {
    const className = target.getAttribute('class');
    if (className.includes('close-modal__container')) {
      setRistOpen(false);
    }
  };

  useEffect(() => {
    // esc 키 누르면 모달 종료
    const escFunction = (e) => {
      if (e.keyCode === 27) {
        setRistOpen(false);
      }
    };

    // 화면이 1170 이하면 모달 종료 후 registration 페이지로 이동
    const handleWindowResize = () => {
      if (window.innerWidth < 1170) {
        history.push('registration');
        setRistOpen(false);
      }
    };

    document.addEventListener('keydown', escFunction);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      document.removeEventListener('keydown', escFunction);
      window.removeEventListener('resize', handleWindowResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 유튜버 등록 요청 코드
  const [channel, setChannel] = useState();
  const history = useHistory();
  const onRegisterClick = async () => {
    if (channel.isExist) {
      setRistOpen(false);
      alert('이미 등록된 유튜버입니다. 유튜버 페이지로 이동합니다.');
      history.push(`/youtubers/review/${channel.channel_id}`);
    } else {
      await youtuberAPI
        .registYoutuber({
          channel_id: channel.channel_id,
        })
        .then((res) => {
          setRistOpen(false);
          alert('유튜버의 첫 리뷰를 작성해주세요.');
          history.push(`/youtubers/reviewWrite/${channel.channel_id}`);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <style.ModalContainer
      className="close-modal__container"
      onClick={closeModal}
    >
      <style.Modal>
        <style.ModalTitleFlex>
          <style.Span font="SHSN-L" size="25px" lineHeight="31px">
            유튜버 등록
          </style.Span>
          <style.ModalXIcon
            src={require('assets/images/close-icon.png').default}
            alt="close-btn"
            onClick={() => setRistOpen(false)}
          />
        </style.ModalTitleFlex>

        <style.Span font="SHSN-R" margins="0 0 10px 0">
          등록하시려는 유튜버의 이름을 입력해주세요!
        </style.Span>

        <SearchInput page={'registration'} setChannel={setChannel} />
        <style.CompleteButton onClick={onRegisterClick}>
          등록하기
        </style.CompleteButton>
      </style.Modal>
    </style.ModalContainer>
  );
}
