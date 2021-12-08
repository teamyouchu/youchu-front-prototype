import React from 'react';
import * as style from './styles/RegistrarionStyle';

export default function Registration({ registClose }) {
  return (
    <style.ModalContainer>
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
        <style.CompleteButton onClick={registClose}>완료</style.CompleteButton>
      </style.Modal>
    </style.ModalContainer>
  );
}
