import * as style from './EmptyResultStyle';
import { useState } from 'react';
import Registration from 'components/registration/Registration';

export default function EmptyResult() {
  const [registOpen, setRistOpen] = useState(false);
  const registClose = () => {
    setRistOpen(!registOpen);
  };
  return (
    <style.EmptyResultContainer>
      <style.EmojiBox>
        <style.Emoji role="img" aria-label="writing hand">
          😭
        </style.Emoji>
      </style.EmojiBox>
      <style.Message>앗! 아직 등록이 안된 유튜버 인가봐요!</style.Message>
      <style.Message>
        <style.RegisterButton onClick={registClose}>
          유튜버 등록
        </style.RegisterButton>
        을 해볼까요?
      </style.Message>
      {registOpen && <Registration registClose={registClose} />}
    </style.EmptyResultContainer>
  );
}
