import React, { useEffect, useState } from 'react';
import * as style from './style';
import { useHistory } from 'react-router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DetailReviewInfo from 'components/DetailReviewInfo';
import StarRating from 'components/StarRating';
import VideoDisplay from 'components/VideoDisplay';
import ReviewOverview from 'components/ReviewOverview';
import reviewAPI from 'api/reviewAPI';

function YoutuberHeader({ reviewOverView }) {
  const history = useHistory();
  const [imageUrl, name, reviews, rating, id] = reviewOverView;

  const handleClick = () => {
    history.push({
      pathname: `/youtubers/reviewWrite/${id}`,
    });
  };

  return (
    <style.FlexContainer>
      <style.DivColumn>
        <style.RcImg src={imageUrl} alt={name} title={name} />
        <style.YoutudberInfo>
          <style.YoutuberHeaderTitle>{name}</style.YoutuberHeaderTitle>
          <style.YoutuberSummaryContainer>
            <style.YoutuberSummaryRank>★</style.YoutuberSummaryRank>
            <style.Score>{rating}</style.Score>
            <style.Span size="14px" color="#94969b" margins="0px 2px">
              ({reviews})개 리뷰
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

function YoutuberDetail({ reviewOverView }) {
  const [name, subscribes] = reviewOverView;
  return (
    <style.YoutuberDetailContainer>
      <style.Span font="SHSN-M" size="26px">
        {name} 유튜버 소개
      </style.Span>

      <style.YoutuberDetailContent style={{ marginTop: '25px' }}>
        <style.YoutuberDetailGray>홈페이지</style.YoutuberDetailGray>
        <a href="https://www.youtube.com/channel/UCRnoBo60_joBvIQCoAiNCqg">
          https://www.youtube.com/channel/UCRnoBo60_joBvIQCoAiNCqg
        </a>
      </style.YoutuberDetailContent>

      <style.YoutuberDetailContent>
        <style.YoutuberDetailGray>구독자수</style.YoutuberDetailGray>
        <style.YoutuberDetailSubcribe>{subscribes}</style.YoutuberDetailSubcribe>
      </style.YoutuberDetailContent>

      <style.YoutuberDetailContent>
        {temp}
        <br />
        <br />
        {temp2}
      </style.YoutuberDetailContent>
    </style.YoutuberDetailContainer>
  );
}

function YoutuberCard() {
  // const per = data.ratings * 20;
  // TODO: 백에서 별점 정보 가져와야 함
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

function YoutuberReviewDetail({ reviewOverView }) {
  const history = useHistory();
  const handleClick = () => {
    history.push({
      pathname: `/youtubers/review/detail/${reviewOverView.id}`,
      state: {
        imageUrl: reviewOverView.imageUrl,
        name: reviewOverView.name,
        rating: reviewOverView.rating,
        reviews: reviewOverView.reviews,
        subscribes: reviewOverView.subscribes,
        category: reviewOverView.category,
      },
    });
  };

  return (
    <style.ReviewContainer>
      <ReviewOverview reviewOverView={reviewOverView} />
      <DetailReviewInfo isBest={true} />
      <style.ReviewContainerFooter>
        <style.AllDetailButton onClick={handleClick}>
          <style.Span font="SHSN-B" size="14px">
            {reviewOverView && reviewOverView.name}
          </style.Span>{' '}
          &nbsp;리뷰 모두 보기
          <style.RightButton icon={faChevronRight} />
        </style.AllDetailButton>
      </style.ReviewContainerFooter>
    </style.ReviewContainer>
  );
}

function YoutuberVideo({ reviewOverView }) {
  const [currentClick, setCurrentClick] = useState(null);
  const [viewsColor, setViewsColor] = useState('#94969B');
  const [uploadColor, setuploadColor] = useState('#EB3323');

  const onClick = (e) => {
    setCurrentClick(e.target.id);
  };

  useEffect(() => {
    if (currentClick === 'uploadOrder') {
      setViewsColor('#94969B');
      setuploadColor('#EB3323');
    } else {
      setViewsColor('#EB3323');
      setuploadColor('#94969B');
    }
  }, [currentClick]);

  return (
    <style.VideoContainer>
      <style.VideoContentContainer>
        <style.Span font="SHSN-M" size="26px" margins="30px 0px 10px 0px">
          {reviewOverView.name} 영상
        </style.Span>
        <style.FlexContainer justify="flex-end">
          <style.FiliterButton
            id="viewCountOrder"
            onClick={onClick}
            color={viewsColor}
            margins="0px 15px 0px"
          >
            조회수 순
          </style.FiliterButton>
          <style.FiliterButton onClick={onClick} id="uploadOrder" color={uploadColor}>
            업로드 날짜 순
          </style.FiliterButton>
        </style.FlexContainer>
        <style.FlexContainer justify="space-between">
          <VideoDisplay />
          <VideoDisplay />
          <VideoDisplay />
        </style.FlexContainer>
      </style.VideoContentContainer>

      <style.ReviewContainerFooter>
        <style.AllDetailButton>
          <style.Span font="SHSN-B" size="14px">
            {reviewOverView.name}
          </style.Span>{' '}
          &nbsp;영상 모두 보기
          <style.RightButton icon={faChevronRight} />
        </style.AllDetailButton>
      </style.ReviewContainerFooter>
    </style.VideoContainer>
  );
}

const temp =
  '月刊 尹鍾信 [월간 윤종신]은 프로듀서 윤종신을 주축으로 한 독자적인 매체이자 기획 전문 집단이다.2010년 3월 두 곡의 음원을 발표하는 것으로 시작된 [월간 윤종신]은 매월 음원과 뮤직비디오를 제작하는 것에서 한걸음 더 나아가 2012 년부터는 디지털 매거진을 발행하고 있으며, 2013 년부터는 음악 뿐만 아니라 문학, 영화, 사진, 미술, 게임 등 다양한 예술 분야와의 콜라보레이션을 진행하고 있다. 음원, 음반, 그림, 사진, 도서, 전시 등 콜라보레이션에 따른 다양한 형태의 결과물을 직접 기획 및 제작하고 있으며, 그것을 누구나 쉽게 즐길 수 있도록 온오프라인을 통해 홍보하고 있다. 2016 년 11 월부터는 서울 한남동에 새롭게 문을 연 스튜디오를 중심으로 보다 전방위적인 콜라보레이션 활동을 이어나갈 예정이다.';
const temp2 =
  '[MONTHLY YOONJONGSHIN] is an independent media and a project group, led by a producer Yoon Jongshin. Started by releasing two songs in March 2010, [MONTHLY YOONJONGSHIN] has been releasing the songs and music videos every month. Furthermore, [MONTHLY YOONJONGSHIN] has been publishing digital magazines since 2012, not only producing the music but also collaborating with a variety of parts of arts such as literature, movie, photograph, painting, game and so on. They do plan and produce all the songs, albums, arts, photographs, books, exhibitions by themselves, based on the collaboration';

export default function Review() {
  // const location = useLocation();

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
        {reviewOverView.backgroundImageUrl ? (
          <img src={reviewOverView.backgroundImageUrl} alt="background" />
        ) : (
          <style.GrayBar />
        )}
      </style.YoutuberBackImg>
      <style.Contatiner>
        <style.YoutuberHeaderContainer>
          <YoutuberHeader reviewOverView={reviewOverView} />
        </style.YoutuberHeaderContainer>
        <style.FlexContainer>
          <style.FlexContainerColumn>
            <YoutuberDetail reviewOverView={reviewOverView} />
            <YoutuberReviewDetail reviewOverView={reviewOverView} />
            <YoutuberVideo reviewOverView={reviewOverView} />
          </style.FlexContainerColumn>
          <style.FlexContainerColumn>
            <style.YoutuberCardContainer>
              <style.CategoryTitle>{reviewOverView.category} 유튜버</style.CategoryTitle>
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
