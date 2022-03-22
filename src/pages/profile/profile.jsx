import MyReviewInfo from 'components/MyReviewInfo';
import * as style from './style';

export default function Profile() {
  const rv = 12;
  return (
    <style.ProfileContainer>
      <style.Title>내 정보</style.Title>
      <style.ProfileBox>
        <style.PicBox>
          <style.UserPic src="/images/딩고 뮤직.jpg" />
          <style.UserName>병팔이</style.UserName>
          <style.UserEmail>qudvkfzoqtyd1@gmail.com</style.UserEmail>
          <style.ModifyBtn>프로필 수정</style.ModifyBtn>
          <style.CategoryBtn>
            <style.CategoryTitle>관심사</style.CategoryTitle>
            <style.Categorycontents>
              영화/애니메이션, 음악, 등등등등등
            </style.Categorycontents>
            <style.ChevronIcon>
              <i className="fas fa-chevron-right"></i>
            </style.ChevronIcon>
          </style.CategoryBtn>
        </style.PicBox>
      <style.ProfileContents>
        {/* <style.ProfileTitle>회원 정보</style.ProfileTitle>
        <style.UserInfo>
          <style.Label>이메일</style.Label>
          <style.UserEmailInput value="qudvkfzoqtyd1@gmail.com" disabled />
        </style.UserInfo>
        <style.UserInfo marginBottom="49px">
          <style.Label>닉네임</style.Label>
          <style.NickNameForm>
            <style.NickNameInput value="병팔이" disabled />
            <style.UserNickBtn>변경하기</style.UserNickBtn>
          </style.NickNameForm>
        </style.UserInfo> */}
        <style.ProfileTitle>
          최근 내가 쓴 리뷰
          <style.ProfileSub>리뷰 수정은 불가능하고, 삭제만 가능합니다.</style.ProfileSub>
          <style.MoreBtn to='#'>총 {rv}개 모두 보기 &gt;</style.MoreBtn>
        </style.ProfileTitle>
          {myReview.data.map(data => (
                <MyReviewInfo 
                  key={data.id}
                  data={data}
                />
              ))}
      </style.ProfileContents>
      </style.ProfileBox>
    </style.ProfileContainer>
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
