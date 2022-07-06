import { Link } from 'react-router-dom';
import * as style from './style';

export default function EmptyPage() {
  return (
    <style.EmptyPageContainer>
      <style.EmojiBox>
        <style.Emoji role="img" aria-label="writing hand">😭</style.Emoji>
      </style.EmojiBox>
      <style.Message>잘못된 접근입니다! <Link to="/">홈</Link>으로 가볼까요?</style.Message>
    </style.EmptyPageContainer>
  );
}
