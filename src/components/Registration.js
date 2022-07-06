import React, { useRef } from 'react';
import * as style from './styles/RegistrarionStyle';

export default function Registration({ registClose }) {
  const closeRef = useRef();
  const closeModal = ({ target }) => {
    let className = target.getAttribute('class');

    if (className == null) {
      className = [];
    }
    if (className.includes('close-modal__container')) {
      closeRef.current.click();
    }
  };
  return (
    <style.ModalContainer className="close-modal__container" onClick={closeModal}>
      <style.Modal width="500px" height="386px" padding="70px 60px">
        <img className="close-modal__container" src="/images/close-icon.png" alt="close-btn" />
        <style.Span font="SHSN-L" size="25px" margins="0px 0px 30px 0px">
          유튜버 등록
        </style.Span>

        <style.Span font="SHSN-R" size="14px">
          등록하시려는 유튜버 메인 페이지의 도메인을 입력해주세요!
        </style.Span>
        <style.RediretInfo font="SHSN-M" size="14px" color="#5C7FDF">
          이해가 안되면 클릭!
        </style.RediretInfo>
        <style.LinkInput placeholder="www.youtube.com"></style.LinkInput>
        <style.CompleteButton ref={closeRef} onClick={registClose}>
          완료
        </style.CompleteButton>
      </style.Modal>
    </style.ModalContainer>
  );
}
