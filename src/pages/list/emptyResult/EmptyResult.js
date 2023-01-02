import * as style from './EmptyResultStyle';
import { useContext } from 'react';
import { UserContext } from 'lib/UserContext';

export default function EmptyResult() {
  const { setRistOpen } = useContext(UserContext);
  return (
    <style.EmptyResultContainer>
      <style.EmojiBox>
        <style.Emoji role="img" aria-label="writing hand">
          😭
        </style.Emoji>
      </style.EmojiBox>
      <style.Message>앗! 아직 등록이 안된 유튜버 인가봐요!</style.Message>
      <style.Message>
        <style.RegisterButton onClick={() => setRistOpen(true)}>
          유튜버 등록
        </style.RegisterButton>
        을 해볼까요?
      </style.Message>
    </style.EmptyResultContainer>
  );
}
