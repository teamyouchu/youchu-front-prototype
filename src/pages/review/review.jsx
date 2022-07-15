import React, { useEffect, useState } from 'react';
import * as style from './style';
import { useHistory } from 'react-router';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DetailReviewInfo from 'components/DetailReviewInfo';
import StarRating from 'components/StarRating';
import VideoDisplay from 'components/VideoDisplay';
import ReviewOverview from 'components/ReviewOverview';
import reviewAPI from 'api/reviewAPI';
import { useParams } from 'react-router-dom';
import { MainReviewContainer, YoutuberFlex } from './style';

function YoutuberHeader({ reviewOverView }) {
  const history = useHistory();
  const { thumbnail, title, reviews, rating, id } = reviewOverView;

  const handleClick = () => {
    history.push({
      pathname: `/youtubers/reviewWrite/${id}`,
    });
  };

  return (
    <style.YoutuberFlex justify="center">
      <style.DivColumn style={{ flexDirection: 'column', width: '100%' }} align="center">
        <style.RcImg src={thumbnail} alt={title} title={title} />
        <style.YoutudberInfo>
          <style.YoutuberHeaderTitle>{title}</style.YoutuberHeaderTitle>
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
    </style.YoutuberFlex>
  );
}

function YoutuberDetail({ reviewOverView }) {
  const { title, subscribes, description } = reviewOverView;
  return (
    <style.YoutuberDetailContainer>
      <style.Span font="SHSN-M" size="26px">
        {title} 유튜버 소개
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

      <style.YoutuberDetailContent>{description}</style.YoutuberDetailContent>
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
        title: reviewOverView.title,
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

export default function Review() {
  const { id } = useParams();

  const [reviewOverView, setReviewOverView] = useState({
    id: '',
    title: '',
    description: '',
    thumbnail: '',
    backgroundImage: '',
    subscribes: 0,
    category: '',
    rating: 0,
    reviews: 0,
    // bestReview: {
    //   id: 0,
    //   author: '',
    //   rating: 0,
    //   likes: 0,
    //   createdDatetime: '',
    //   content: '',
    // },
  });

  useEffect(() => {
    getReviewOverView(id);
  }, [id]);

  useEffect(() => {
    console.log(reviewOverView);
  }, [reviewOverView]);

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
        {reviewOverView.backgroundImage ? (
          <img src={reviewOverView.backgroundImage} alt="background" />
        ) : (
          <style.GrayBar />
        )}
      </style.YoutuberBackImg>
      <style.Contatiner>
        <style.YoutuberHeaderContainer>
          <YoutuberHeader reviewOverView={reviewOverView} />
        </style.YoutuberHeaderContainer>
        <style.MainReviewContainer>
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
        </style.MainReviewContainer>
      </style.Contatiner>
      {/* 임시로 배치함 삭제해야함 */}
      <div style={{ height: '400px', width: '200px' }}></div>
    </>
  );
}
