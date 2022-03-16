import React, { useEffect, useState } from 'react';
import * as style from './style';
import { useHistory, useLocation } from 'react-router';
import DetailReviewInfo from 'components/DetailReviewInfo';
import StarRating from 'components/StarRating';
import ReviewOverview from 'components/ReviewOverview';
import BulrReview from 'components/BulrReview';
import PageNumber from 'components/PageNumber';
import FilterDropdown from 'components/FilterDropdown';
import reviewAPI from 'api/reviewAPI';

function YoutuberHeader({ reviewOverView }) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/youtubers/reviewWrite/${reviewOverView.id}`,
    });
  };

  return (
    <style.FlexContainer>
      <style.DivColumn>
        <style.RcImg
          src={reviewOverView.imageUrl}
          alt={reviewOverView.name}
          title={reviewOverView.name}
        />
        <style.YoutudberInfo>
          <style.YoutuberHeaderTitle>{reviewOverView.name}</style.YoutuberHeaderTitle>
          <style.YoutuberSummaryContainer>
            <style.YoutuberSummaryRank>★</style.YoutuberSummaryRank>
            <style.Score>{reviewOverView.rating}</style.Score>
            <style.Span size="14px" color="#94969b" margins="0px 2px">
              ({reviewOverView.reviews})개 리뷰
            </style.Span>
          </style.YoutuberSummaryContainer>
        </style.YoutudberInfo>
      </style.DivColumn>
      <style.DivColumn align="center" justify="flex-end">
        <style.ReviewButton onClick={handleClick}>
          <style.Span color="#fff" font="SHSN-B" size="14px">
            이 유튜버 리뷰하기
          </style.Span>
        </style.ReviewButton>
      </style.DivColumn>
    </style.FlexContainer>
  );
}

function YoutuberCard() {
  // const per = data.ratings * 20;
  // TODO 송경석: 백에서 별점 정보 가져와야 함
  const per = '4.0';
  return (
    <style.CategoryCardContainer>
      <style.CategoryImg
        src="/images/딩고 뮤직.jpg"
        alt="딩고 뮤직 / dingo music"
        title="딩고 뮤직 / dingo music"
      />
      <style.CategoryCardDetail>
        <style.CategoryCardDetailTitle>딩고 뮤직</style.CategoryCardDetailTitle>
        <style.FlexContainer>
          <StarRating ratings={per} />
          <style.Score>4.0</style.Score>
        </style.FlexContainer>
        <style.CategoryTagContainer>
          <style.CategoryTag>음악</style.CategoryTag>
        </style.CategoryTagContainer>
      </style.CategoryCardDetail>
    </style.CategoryCardContainer>
  );
}

function YoutuberReviewDetail() {
  //TODO 송경석: 일시적으로 로그인 상태값 변수 지정 나중에 바꿔야함
  const [isLogin] = useState(true);
  const [IsBlur, setBlur] = useState('');

  useEffect(() => {
    if (isLogin === false) {
      setBlur('blur(10px)');
    }
  }, [isLogin]);

  const sortOptions = [
    {
      key: '최근에 등록된',
      text: '최근에 등록된',
      value: '최근에 등록된',
    },
    {
      key: '좋아요가 많이 달린',
      text: '좋아요가 많이 달린',
      value: '좋아요가 많이 달린',
    },
  ];

  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getReviewDetail();
  }, []);

  const getReviewDetail = async (id, num, sortBy) => {
    await reviewAPI
      .getReviews('tempId', 1, 'last')
      .then((res) => {
        // console.log(res.data.data);
        setReviewList(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  //TODO 송경석: 렌더링 반복되는거 임시로 map 사용해서 했는데 추후에는 백에서 json 형태
  //나 가공된 데이터 혹은 가공한 데이터를 기준으로 mapping 필요
  const mapToComponent = (reviewList) => {
    return (
      <>
        {reviewList.map((review, i) => {
          return (
            <style.FlexContainerColumn key={i}>
              <DetailReviewInfo isBest={false} blur={IsBlur} page="review" reviewInfo={review} />
              {!isLogin && <BulrReview />}
            </style.FlexContainerColumn>
          );
        })}
      </>
    );
  };

  return (
    <>
      <style.ReviewContainer>
        <style.FilterDropdownContainer>
          <FilterDropdown placeholder="정렬" options={sortOptions} />
        </style.FilterDropdownContainer>
        <DetailReviewInfo isBest={true} page="review" />
        {mapToComponent(reviewList)}
        <PageNumber />
      </style.ReviewContainer>
    </>
  );
}

export default function ReviewDetail() {
  const location = useLocation();

  const [reviewOverView, setReviewOverView] = useState({
    id: 0,
    name: '',
    channelDescription: '',
    imageUrl: '',
    backgroundImageUrl: '',
    subscribes: 0,
    category: '',
    rating: 0,
    reviews: 0,
    bestReview: {
      id: 0,
      author: '',
      rating: 0,
      likes: 0,
      createdDatetime: '',
      content: '',
    },
  });

  useEffect(() => {
    getReviewOverView('tempId');
  }, []);

  const getReviewOverView = async (id) => {
    await reviewAPI
      .getReview(id)
      .then((res) => {
        setReviewOverView(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <style.YoutuberBackImg>
        <img src={reviewOverView.backgroundImageUrl} alt="background" />
      </style.YoutuberBackImg>
      <style.Contatiner>
        <style.YoutuberHeaderContainer>
          <YoutuberHeader reviewOverView={location.state} />
        </style.YoutuberHeaderContainer>
        <style.FlexContainer>
          <style.FlexContainerColumn>
            <style.ReviewOverviewContainer>
              <ReviewOverview reviewOverView={location.state} style={{ marginTop: '50px' }} />
            </style.ReviewOverviewContainer>
            <YoutuberReviewDetail data={location.state} />
          </style.FlexContainerColumn>
          <style.FlexContainerColumn>
            <style.YoutuberCardContainer>
              <style.CategoryTitle>{location.state.category} 유튜버</style.CategoryTitle>
              <YoutuberCard />
              <YoutuberCard />
              <YoutuberCard />
              <YoutuberCard />
            </style.YoutuberCardContainer>
            <style.YoutuberCardContainer style={{ marginTop: '30px' }}>
              <style.CategoryTitle>인기 유튜버</style.CategoryTitle>
              <YoutuberCard />
              <YoutuberCard />
              <YoutuberCard />
              <YoutuberCard />
            </style.YoutuberCardContainer>
          </style.FlexContainerColumn>
        </style.FlexContainer>
      </style.Contatiner>
      {/* 임시로 배치함 삭제해야함 */}
      <div style={{ height: '400px', width: '200px' }}></div>
    </>
  );
}
