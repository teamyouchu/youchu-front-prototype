import MyReviewInfo from 'components/myReviewInfo/MyReviewInfo';
import * as style from './MyReviewStyle';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import { sortOptions } from 'lib/modules';
// import { useState, useEffect } from 'react';
// import userAPI from 'lib/api/userAPI';

export default function MyReview({ all }) {
  const rv = 12;
  // TODO 서지수 api 나오면 수정하기

  // const [myReviewList, setMyReviewList] = useState({});
  // useEffect(() => {
  //   // 페이지 로드 시 나의 리뷰 요청 api
  //   userAPI
  //     .getMyReviews(1)
  //     .then((res) => {
  //       setMyReviewList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const onPageChange = (e) => {
    const nextPage = e.currentTarget.getAttribute('value');
    console.log('페이지로 변경: ', nextPage);
    // userAPI
    //   .getMyReviews(nextPage)
    //   .then((res) => {
    //     setMyReviewList(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <style.MyReviewContainer>
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
      <style.ReviewTitle>
        {!all && '최근 '}
        내가 쓴 리뷰
        <style.ProfileSub>
          리뷰 수정은 불가능하고, 삭제만 가능합니다.
        </style.ProfileSub>
        {!all && (
          <style.MoreBtn to="/profile/allReview">
            총 {rv}개 모두 보기 &gt;
          </style.MoreBtn>
        )}
      </style.ReviewTitle>
      {all && (
        <style.ReviewDropdown>
          <FilterDropdown
            placeholder={sortOptions[0].text}
            options={sortOptions}
          />
        </style.ReviewDropdown>
      )}
      {myReviewList.data.map((data) => (
        <MyReviewInfo key={data.id} data={data} />
      ))}
      <style.PaginationContainer>
        {all && (
          <style.PaginationItem
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            siblingRange={2}
            totalPages={myReviewList.maxPage}
            pointing
            secondary
            onPageChange={onPageChange}
          />
        )}
      </style.PaginationContainer>
    </style.MyReviewContainer>
  );
}

const myReviewList = {
  data: [
    {
      id: 10,
      youtuber: {
        id: 'FDSFWEVSD',
        name: '월간 윤종신',
      },
      author: '병팔이',
      content: '힘들 때 많은 힘이 되어주었습니다.',
      rating: 4.5,
      likes: 10,
      createdDatetime: '2021-09-15T10:00:00+09:00',
    },
    {
      id: 20,
      youtuber: {
        id: 'FDSFWEVSD',
        name: '월간 윤종신',
      },
      author: '병팔이',
      content: '힘들 때 많은 힘이 되어주었습니다.',
      rating: 4.5,
      likes: 10,
      createdDatetime: '2021-09-15T10:00:00+09:00',
    },
    {
      id: 220,
      youtuber: {
        id: 'FDSFWEVSD',
        name: '월간 윤종신',
      },
      author: '병팔이',
      content: '힘들 때 많은 힘이 되어주었습니다.',
      rating: 4.5,
      likes: 10,
      createdDatetime: '2021-09-15T10:00:00+09:00',
    },
  ],
  size: 30,
  maxPage: 20,
};
