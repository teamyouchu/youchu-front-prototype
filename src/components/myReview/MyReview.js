import MyReviewInfo from 'components/myReviewInfo/MyReviewInfo';
import * as style from './MyReviewStyle';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import { sortOptions } from 'lib/modules';
// import { useState, useEffect } from 'react';
// import userAPI from 'lib/api/userAPI';

export default function MyReview({ all }) {
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
      <style.ReviewTitle>
        {!all && '최근 '}
        내가 쓴 리뷰
        <style.ProfileSub>
          리뷰 수정은 불가능하고, 삭제만 가능합니다.
        </style.ProfileSub>
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
        {!all && (
          <style.MoreBtn to="/profile/allReview">
            <style.MoreBtnSpan font={'SHSN-B'}>
              최근 내가 쓴 리뷰 &nbsp;
            </style.MoreBtnSpan>
            <style.MoreBtnSpan>모두 보기 &gt;</style.MoreBtnSpan>
          </style.MoreBtn>
        )}
        {all && (
          <style.PaginationItem
            boundaryRange={0}
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
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
        id: 'UCRnoBo60_joBvIQCoAiNCqg',
        name: '월간 윤종신',
      },
      author: '병팔이',
      content:
        '제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다.',
      rating: 4.5,
      likes: 10,
      createdDatetime: '2021.09.22',
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
      createdDatetime: '2021.09.22',
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
      createdDatetime: '2021.09.22',
    },
    {
      id: 222,
      youtuber: {
        id: 'FDSFWEVSD',
        name: '월간 윤종신',
      },
      author: '병팔이',
      content: '힘들 때 많은 힘이 되어주었습니다.',
      rating: 4.5,
      likes: 10,
      createdDatetime: '2021.09.22',
    },
    {
      id: 223,
      youtuber: {
        id: 'FDSFWEVSD',
        name: '월간 윤종신',
      },
      author: '병팔이',
      content: '힘들 때 많은 힘이 되어주었습니다.',
      rating: 4.5,
      likes: 10,
      createdDatetime: '2021.09.22',
    },
  ],
  size: 30,
  maxPage: 20,
};
