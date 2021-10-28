import { Link } from "react-router-dom";
import * as style from './style';

export default function EmptyPage() {
  return (
    <style.EmptyPageContainer>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </style.EmptyPageContainer>
  );
}