import MyReviewInfo from 'components/MyReviewInfo';
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
        <style.profileTitle marginBottom="10px">
          내가 쓴 총 리뷰 {rv}개
          <style.profileSub>리뷰 수정은 불가능하고, 삭제만 가능합니다.</style.profileSub>
        </style.profileTitle>
        {myReview.data.map(data => (
              <MyReviewInfo 
                key={data.id}
                data={data}
              />
            ))}
      </style.profileContents>
    </style.profileContainer>
  );
}

const myReview = {
  "data": [
    {
      "id": 10,
      "youtuber": {
        "id": "FDSFWEVSD",
        "name": "월간 윤종신"
      },
      "author": "병팔이",
      "content": "힘들 때 많은 힘이 되어주었습니다.",
      "rating": 4.5,
      "likes": 10,
      "createdDatetime": "2021-09-15T10:00:00+09:00"
    },
    {
      "id": 20,
      "youtuber": {
        "id": "FDSFWEVSD",
        "name": "월간 윤종신"
      },
      "author": "병팔이",
      "content": "힘들 때 많은 힘이 되어주었습니다.",
      "rating": 4.5,
      "likes": 10,
      "createdDatetime": "2021-09-15T10:00:00+09:00"
    },
    {
      "id": 220,
      "youtuber": {
        "id": "FDSFWEVSD",
        "name": "월간 윤종신"
      },
      "author": "병팔이",
      "content": "힘들 때 많은 힘이 되어주었습니다.",
      "rating": 4.5,
      "likes": 10,
      "createdDatetime": "2021-09-15T10:00:00+09:00"
    }
  ],
  "size": 30,
  "maxPage": 20
}
