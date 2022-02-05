import React from 'react';
import * as style from './styles/RegistrarionStyle';

export default function Registration({ registClose }) {
  const closeModal = ({ target }) => {
    const className = target.getAttribute('class');
    if (className.includes('out-modal__container')) {
      const close = document.querySelector('#registClose-btn');
      close.click();
    }
  };
  return (
    <style.ModalContainer className="out-modal__container" onClick={closeModal}>
      <style.Modal width="500px" height="386px" padding="70px 60px">
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
        <style.CompleteButton id="registClose-btn" onClick={registClose}>
          완료
        </style.CompleteButton>
      </style.Modal>
    </style.ModalContainer>
  );
}
