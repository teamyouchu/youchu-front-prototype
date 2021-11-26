import * as style from './style';

export default function Signup() {
  return (
    <style.SignupContainer>
      <style.SignupBox>
        <style.Title>기본 프로필을 작성해봐요!</style.Title>
        <style.Label>닉네임</style.Label>
        <style.NicknameInput />
        <style.SubTitle>유튜버 관심 카테고리 선택 (1개 이상)</style.SubTitle>
        <style.CategoryContainer>
          <style.CategoryBox>영화/애니메이션</style.CategoryBox>
          <style.CategoryBox>자동차/교통</style.CategoryBox>
          <style.CategoryBox>음악</style.CategoryBox>
          <style.CategoryBox>애완동물/동물</style.CategoryBox>
          <style.CategoryBox>스포츠</style.CategoryBox>
          <style.CategoryBox>여행/이벤트</style.CategoryBox>
          <style.CategoryBox>게임</style.CategoryBox>
          <style.CategoryBox>인물/블로그</style.CategoryBox>
          <style.CategoryBox>코미디</style.CategoryBox>
          <style.CategoryBox>엔터테인먼트</style.CategoryBox>
          <style.CategoryBox>뉴스/정치</style.CategoryBox>
          <style.CategoryBox>노하우/스타일</style.CategoryBox>
          <style.CategoryBox>교육</style.CategoryBox>
          <style.CategoryBox>과학기술</style.CategoryBox>
          <style.CategoryBox>비영리/사회운동</style.CategoryBox>
        </style.CategoryContainer>
        <style.SetBtn type="submit">완료</style.SetBtn>
      </style.SignupBox>
    </style.SignupContainer>
  );
}
