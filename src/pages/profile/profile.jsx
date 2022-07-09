import MyReviewInfo from 'components/MyReviewInfo';
import * as style from './style';
import { useState, useEffect } from 'react';
import userAPI from 'api/userAPI';

export default function Profile() {
  const [userObj, setUserObj] = useState({
    email: "",
    favoriteCategory: [],
    hasReview: "",
    imageUrl: "",
    nickname: ""
  });
  useEffect(()=> {
    userAPI
      .getMe()
      .then(({data}) => {
          setUserObj({
            email: data.email,
            favoriteCategory: data.favoriteCategory,
            hasReview: data.hasReview,
            imageUrl: data.imageUrl,
            nickname: data.nickname
          });
      })
      .catch((err) => {
        console.error(err);
      })
    return () => setUserObj(null);
  },[]);
  const rv = 12;
  return (
    <style.ProfileContainer>
      <style.Title>내 정보</style.Title>
      <style.ProfileBox>
        <style.PicBox>
          <style.UserPic src={userObj.imageUrl} />
          <style.UserName>{userObj.nickname}</style.UserName>
          <style.UserEmail>{userObj.email}</style.UserEmail>
          <style.ModifyBtn to="/modifyNickName">프로필 수정</style.ModifyBtn>
          <style.CategoryBtn to="/modifyCategory">
            <style.CategoryTitle>관심사</style.CategoryTitle>
            <style.CategorysBox>
              {userObj.favoriteCategory.map(data => (
                <style.Categorycontents key={data.id}>
                  {categoryArray.find(x => x.id === data).value},&nbsp;
                </style.Categorycontents>
              ))}
            </style.CategorysBox>
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
};

const categoryArray = [
  {
    "id": 1,
    "value": "영화/애니메이션"
  },
  {
    "id": 2,
    "value": "자동차/교통",
  },
  {
    "id": 10,
    "value": "음악",
  },
  {
    "id": 15,
    "value": "애완동물/동물",
  },
  {
    "id": 17,
    "value": "스포츠",
  },
  {
    "id": 19,
    "value": "여행/이벤트",
  },
  {
    "id": 20,
    "value": "게임",
  },
  {
    "id": 22,
    "value": "인물/블로그",
  },
  {
    "id": 23,
    "value": "코미디",
  },
  {
    "id": 24,
    "value": "엔터테인먼트",
  },
  {
    "id": 25,
    "value": "뉴스/정치",
  },
  {
    "id": 26,
    "value": "노하우/스타일",
  },
  {
    "id": 27,
    "value": "교육",
  },
  {
    "id": 28,
    "value": "과학기술",
  },
  {
    "id": 29,
    "value": "비영리/사회운동",
  },
];
