import * as style from './reviewListStyle';
import ReviewInfo from 'components/reviewInfo/ReviewInfo';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import { reviewSortOptions } from 'lib/modules';
import { useState, useEffect } from 'react';
import userAPI from 'lib/api/userAPI';
import youtuberAPI from 'lib/api/youtuberAPI';
import { useParams } from 'react-router-dom';

export default function ReviewList({ from, all }) {
  const { channel_id } = useParams();

  const [reviewList, setReviewList] = useState({
    data: [],
    maxPage: 1,
  });
  const getReviews = () => {
    if (from === 'myInfo') {
      userAPI
        .getMyReviews(nextPage, sort)
        .then((res) => {
          setReviewList(res.data);
        })
        .catch((err) => console.log(err));
    } else if (from === 'youtuber') {
      youtuberAPI
        .getYoutuberReview(channel_id, nextPage, sort)
        .then((res) => {
          setReviewList(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const [nextPage, setNextPage] = useState(1);
  const [sort, setSort] = useState('latest');
  useEffect(() => {
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage]);
  useEffect(() => {
    setNextPage(1);
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);
  return (
    <style.reviewListContainer>
      {from === 'myInfo' && (
        <style.ReviewTitle>
          {!all && '최근 '}
          내가 쓴 리뷰
          <style.ProfileSub>
            리뷰 수정은 불가능하고, 삭제만 가능합니다.
          </style.ProfileSub>
        </style.ReviewTitle>
      )}
      {all && (
        <style.ReviewDropdown>
          <FilterDropdown options={reviewSortOptions} setSort={setSort} />
        </style.ReviewDropdown>
      )}
      {reviewList.data.map((data) => (
        <ReviewInfo key={data.id} data={data} from={from} all={all} />
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
            totalPages={reviewList.maxPage}
            pointing
            secondary
            onPageChange={(e, { activePage }) => setNextPage(activePage)}
          />
        )}
      </style.PaginationContainer>
    </style.reviewListContainer>
  );
}

// const reviewList = {
//   data: [
//     {
//       id: 10,
//       youtuberId: 'UCRnoBo60_joBvIQCoAiNCqg',
//       youtuberName: '월간 윤종신',
//       writerId: 17,
//       writerName: '지구',
//       writerImgUrl:
//         'https://lh3.googleusercontent.com/a/AItbvmnuMbIpaRKvIL6YP8XlFxexupC-_SV4s5zecvPQ=s96-c',
//       comment:
//         '제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다. 제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만 지금은 좋습니다.',
//       rating: 4.5,
//       likes: 10,
//       createdDatetime: '2021.09.22',
//     },
//     {
//       id: 20,
//       youtuberId: 'UCRnoBo60_joBvIQCoAiNCqg',
//       youtuberName: '월간 윤종신',
//       writerId: 17,
//       writerName: '지구',
//       writerImgUrl:
//         'https://lh3.googleusercontent.com/a/AItbvmnuMbIpaRKvIL6YP8XlFxexupC-_SV4s5zecvPQ=s96-c',
//       comment: '힘들 때 많은 힘이 되어주었습니다.',
//       rating: 4.5,
//       likes: 10,
//       createdDatetime: '2021.09.22',
//     },
//     {
//       id: 220,
//       youtuberId: 'UCRnoBo60_joBvIQCoAiNCqg',
//       youtuberName: '월간 윤종신',
//       writerId: 17,
//       writerName: '지구',
//       writerImgUrl:
//         'https://lh3.googleusercontent.com/a/AItbvmnuMbIpaRKvIL6YP8XlFxexupC-_SV4s5zecvPQ=s96-c',
//       comment: '힘들 때 많은 힘이 되어주었습니다.',
//       rating: 4.5,
//       likes: 10,
//       createdDatetime: '2021.09.22',
//     },
//     {
//       id: 222,
//       youtuberId: 'UCRnoBo60_joBvIQCoAiNCqg',
//       youtuberName: '월간 윤종신',
//       writerId: 17,
//       writerName: '지구',
//       writerImgUrl:
//         'https://lh3.googleusercontent.com/a/AItbvmnuMbIpaRKvIL6YP8XlFxexupC-_SV4s5zecvPQ=s96-c',
//       comment: '힘들 때 많은 힘이 되어주었습니다.',
//       rating: 4.5,
//       likes: 10,
//       createdDatetime: '2021.09.22',
//     },
//     {
//       id: 223,
//       youtuberId: 'UCRnoBo60_joBvIQCoAiNCqg',
//       youtuberName: '월간 윤종신',
//       writerId: 17,
//       writerName: '지구',
//       writerImgUrl:
//         'https://lh3.googleusercontent.com/a/AItbvmnuMbIpaRKvIL6YP8XlFxexupC-_SV4s5zecvPQ=s96-c',
//       comment: '힘들 때 많은 힘이 되어주었습니다.',
//       rating: 4.5,
//       likes: 10,
//       createdDatetime: '2021.09.22',
//     },
//   ],
//   size: 30,
//   maxPage: 20,
// };
