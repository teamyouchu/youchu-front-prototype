import React, { useEffect, useState } from 'react';
import * as style from './style';
import { useHistory, useLocation } from 'react-router';
import DetailReviewInfo from 'components/DetailReviewInfo';
import StarRating from 'components/StarRating';
import ReviewOverview from 'components/ReviewOverview';
import BulrReview from 'components/BulrReview';
import PageNumber from 'components/PageNumber';

function YoutuberHeader({ data }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/reviewWrite');
  };
  return (
    <style.FlexContainer>
      <style.DivColumn>
        <style.RcImg src={data.img} alt={data.channelName} title={data.channelName} />
        <style.YoutudberInfo>
          <style.YoutuberHeaderTitle>{data.channelName}</style.YoutuberHeaderTitle>
          <style.YoutuberSummaryContainer>
            <style.YoutuberSummaryRank>★</style.YoutuberSummaryRank>
            <style.Score>{data.ratings}</style.Score>
            <style.Span size="14px" color="#94969b" margins="0px 2px">
              ({data.reviewCount})개 리뷰
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
  const [isLogin, setIsLogin] = useState(false);
  const [IsBlur, setBlur] = useState('');

  useEffect(() => {
    if (isLogin === false) {
      setBlur('blur(10px)');
    }
  }, [isLogin]);

  //TODO 송경석: 렌더링 반복되는거 임시로 map 사용해서 했는데 추후에는 백에서 json 형태
  //나 가공된 데이터 혹은 가공한 데이터를 기준으로 mapping 필요
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const mapToComponent = (temp) => {
    return temp.map((order, i) => {
      return (
        <style.FlexContainerColumn key={i}>
          <DetailReviewInfo IsBest={false} Blur={IsBlur} />
          {!isLogin && <BulrReview />}
        </style.FlexContainerColumn>
      );
    });
  };

  return (
    <>
      <style.ReviewContainer>
        <DetailReviewInfo IsBest={true} IsDetail={true} />
        {mapToComponent(temp)}
        <PageNumber />
      </style.ReviewContainer>
    </>
  );
}

export default function ReviewDetail() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <style.GrayBar />
      <style.Contatiner>
        <style.YoutuberHeaderContainer>
          <YoutuberHeader data={location.state} />
        </style.YoutuberHeaderContainer>
        <style.FlexContainer>
          <style.FlexContainerColumn>
            <style.ReviewOverviewContainer>
              <ReviewOverview data={location.state} style={{ marginTop: '50px' }} />
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
