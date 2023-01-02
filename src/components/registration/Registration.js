import * as style from './RegistrationStyle';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import SearchInput from 'components/searchInput/SearchInput';
import RegButton from 'components/regButton/RegButton';

  // 모달 영역 외 클릭 시 종료
  const closeModal = ({ target }) => {
    const className = target.getAttribute('class');
    if (className.includes('close-modal__container')) {
      setRistOpen(false);
export default function Registration() {
  const {
    setRistOpen,
  } = useContext(UserContext);
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
        <RegButton channel={channel} />
      </style.Modal>
    </style.ModalContainer>
  );
}
