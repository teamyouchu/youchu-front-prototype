import * as style from './ReviewListsStyle';
import ReviewInfo from 'components/reviewInfo/ReviewInfo';
import FilterDropdown from 'components/filterDropdown/FilterDropdown';
import { reviewSortOptions } from 'lib/modules';
import { useState, useEffect } from 'react';
import userAPI from 'api/userAPI';
import youtuberAPI from 'api/youtuberAPI';
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
      {reviewList.totalCount >= 1 ? (
        <>
          {reviewList.data.map((data) => (
            <ReviewInfo
              key={data.reviewId}
              data={data}
              getReviews={getReviews}
              from={from}
              all={all}
            />
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
        </>
      ) : (
        <style.EmptyReviewContainer>
          <style.EmojiBox>
            <style.Emoji role="img" aria-label="writing hand">
              😭
            </style.Emoji>
          </style.EmojiBox>
          <style.Message>앗! 아직 작성한 리뷰가 없어요!</style.Message>
        </style.EmptyReviewContainer>
      )}
    </style.reviewListContainer>
  );
}
