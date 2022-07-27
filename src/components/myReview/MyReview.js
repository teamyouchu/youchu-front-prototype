import MyReviewInfo from 'components/myReviewInfo/MyReviewInfo';
import * as style from './MyReviewStyle';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import { sortOptions } from 'lib/modules';
import PageNumber from 'components/pageNumber/PageNumber';

export default function MyReview({ all }) {
  const rv = 12;

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
      <style.ReviewDropdown>
        {all && (
          <FilterDropdown
            placeholder={sortOptions[0].text}
            options={sortOptions}
          />
        )}
      </style.ReviewDropdown>
      {myReview.data.map((data) => (
        <MyReviewInfo key={data.id} data={data} />
      ))}
      {all && <PageNumber />}
    </style.MyReviewContainer>
  );
}

const myReview = {
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
