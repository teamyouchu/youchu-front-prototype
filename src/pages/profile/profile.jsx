import DetailReviewInfo from 'components/DetailReviewInfo';
import * as style from './style';

export default function Profile() {
  const rv = 4;
  return (
    <style.profileContainer>
      <style.picBox>
        <style.userPic src="/images/딩고 뮤직.jpg" />
        <style.userName>병팔이</style.userName>
        <style.userEmail>qudvkfzoqtyd1@gmail.com</style.userEmail>
        <style.categoryBtn>
          나의 유튜버 관심 카테고리
          <style.chevronIcon>
            <i className="fas fa-chevron-right"></i>
          </style.chevronIcon>
        </style.categoryBtn>
      </style.picBox>
      <style.profileContents>
        <style.profileTitle>회원 정보</style.profileTitle>
        <style.userInfo>
          <style.Label>이메일</style.Label>
          <style.userEmailInput value="qudvkfzoqtyd1@gmail.com" disabled />
        </style.userInfo>
        <style.userInfo marginBottom="49px">
          <style.Label>닉네임</style.Label>
          <style.nickNameForm>
            <style.nickNameInput value="병팔이" disabled />
            <style.userNickBtn>변경하기</style.userNickBtn>
          </style.nickNameForm>
        </style.userInfo>
        <style.profileTitle>
          내가 쓴 총 리뷰 {rv}개
          <style.profileSub>리뷰 수정은 불가능하고, 삭제만 가능합니다.</style.profileSub>
        </style.profileTitle>
        <DetailReviewInfo page="mypage" />
        <DetailReviewInfo page="mypage" />
      </style.profileContents>
    </style.profileContainer>
  );
}
