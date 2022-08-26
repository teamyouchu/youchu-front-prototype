import React, { /*useEffect,*/ useState } from 'react';
import * as style from './style';
// import { useHistory } from 'react-router';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import DetailReviewInfo from 'components/detailReviewInfo/DetailReviewInfo';
// import StarRating from 'components/starRating/StarRating';
// import VideoDisplay from 'components/videoDisplay/VideoDisplay';
// import ReviewOverview from 'components/reviewOverview/ReviewOverview';
// import reviewAPI from 'lib/api/reviewAPI';
// import { useParams } from 'react-router-dom';
// import Rating from '@mui/material/Rating';
import YoutuberIntro from './infoContainer/YoutuberIntro';
import YoutuberReview from './infoContainer/YoutuberReview';
import YoutuberVideos from './infoContainer/YoutuberVideos';
import YoutuberHeader from './youtuberHeader/YoutuberHeader';
import RecommendYoutuber from 'components/recommendYoutuber/RecommendYoutuber';

// function YoutuberDetail({ reviewOverView }) {
//   const { title, subscribes, description } = reviewOverView;
//   return (
//     <style.YoutuberDetailContainer>
//       <style.Span font="SHSN-M" size="26px">
//         {title} 유튜버 소개
//       </style.Span>

//       <style.YoutuberDetailContent style={{ marginTop: '25px' }}>
//         <style.YoutuberDetailGray>홈페이지</style.YoutuberDetailGray>
//         <a href="https://www.youtube.com/channel/UCRnoBo60_joBvIQCoAiNCqg">
//           https://www.youtube.com/channel/UCRnoBo60_joBvIQCoAiNCqg
//         </a>
//       </style.YoutuberDetailContent>

//       <style.YoutuberDetailContent>
//         <style.YoutuberDetailGray>구독자수</style.YoutuberDetailGray>
//         <style.YoutuberDetailSubcribe>
//           {subscribes}
//         </style.YoutuberDetailSubcribe>
//       </style.YoutuberDetailContent>

//       <style.YoutuberDetailContent>{description}</style.YoutuberDetailContent>
//     </style.YoutuberDetailContainer>
//   );
// }

// function YoutuberCard() {
//   // const per = data.ratings * 20;
//   // TODO: 백에서 별점 정보 가져와야 함
//   const per = '4.0';
//   return (
//     <style.CategoryCardContainer>
//       <style.CategoryImg
//         src={require('assets/images/딩고 뮤직.jpg').default}
//         alt="딩고 뮤직 / dingo music"
//         title="딩고 뮤직 / dingo music"
//       />
//       <style.CategoryCardDetail>
//         <style.CategoryCardDetailTitle>딩고 뮤직</style.CategoryCardDetailTitle>
//         <style.FlexContainer>
//           <StarRating ratings={per} />
//           <style.YoutuberRating>4.0</style.YoutuberRating>
//         </style.FlexContainer>
//         <style.CategoryTagContainer>
//           <style.CategoryTag>음악</style.CategoryTag>
//         </style.CategoryTagContainer>
//       </style.CategoryCardDetail>
//     </style.CategoryCardContainer>
//   );
// }

// function YoutuberReviewDetail({ reviewOverView }) {
//   const history = useHistory();
//   const handleClick = () => {
//     history.push({
//       pathname: `/youtubers/review/detail/${reviewOverView.id}`,
//       state: {
//         imageUrl: reviewOverView.imageUrl,
//         title: reviewOverView.title,
//         rating: reviewOverView.rating,
//         reviews: reviewOverView.reviews,
//         subscribes: reviewOverView.subscribes,
//         category: reviewOverView.category,
//       },
//     });
//   };

//   return (
//     <style.ReviewContainer>
//       <ReviewOverview reviewOverView={reviewOverView} />
//       <DetailReviewInfo isBest={true} />
//       <style.ReviewContainerFooter>
//         <style.AllDetailButton onClick={handleClick}>
//           <style.Span font="SHSN-B" size="14px">
//             {reviewOverView && reviewOverView.name}
//           </style.Span>{' '}
//           &nbsp;리뷰 모두 보기
//           <style.RightButton icon={faChevronRight} />
//         </style.AllDetailButton>
//       </style.ReviewContainerFooter>
//     </style.ReviewContainer>
//   );
// }

// function YoutuberVideo({ reviewOverView }) {
//   const [currentClick, setCurrentClick] = useState(null);
//   const [viewsColor, setViewsColor] = useState('#94969B');
//   const [uploadColor, setuploadColor] = useState('#EB3323');

//   const onClick = (e) => {
//     setCurrentClick(e.target.id);
//   };

//   useEffect(() => {
//     if (currentClick === 'uploadOrder') {
//       setViewsColor('#94969B');
//       setuploadColor('#EB3323');
//     } else {
//       setViewsColor('#EB3323');
//       setuploadColor('#94969B');
//     }
//   }, [currentClick]);

//   return (
//     <style.VideoContainer>
//       <style.VideoContentContainer>
//         <style.Span font="SHSN-M" size="26px" margins="30px 0px 10px 0px">
//           {reviewOverView.name} 영상
//         </style.Span>
//         <style.FlexContainer justify="flex-end">
//           <style.FiliterButton
//             id="viewCountOrder"
//             onClick={onClick}
//             color={viewsColor}
//             margins="0px 15px 0px"
//           >
//             조회수 순
//           </style.FiliterButton>
//           <style.FiliterButton
//             onClick={onClick}
//             id="uploadOrder"
//             color={uploadColor}
//           >
//             업로드 날짜 순
//           </style.FiliterButton>
//         </style.FlexContainer>
//         <style.FlexContainer justify="space-between">
//           <VideoDisplay />
//           <VideoDisplay />
//           <VideoDisplay />
//         </style.FlexContainer>
//       </style.VideoContentContainer>

//       <style.ReviewContainerFooter>
//         <style.AllDetailButton>
//           <style.Span font="SHSN-B" size="14px">
//             {reviewOverView.name}
//           </style.Span>{' '}
//           &nbsp;영상 모두 보기
//           <style.RightButton icon={faChevronRight} />
//         </style.AllDetailButton>
//       </style.ReviewContainerFooter>
//     </style.VideoContainer>
//   );
// }

// function Review() {
//   const { id } = useParams();

//   const [reviewOverView, setReviewOverView] = useState({
//     id: '',
//     title: '',
//     description: '',
//     thumbnail: '',
//     backgroundImage: '',
//     subscribes: 0,
//     category: '',
//     rating: 0,
//     reviews: 0,
//     // bestReview: {
//     //   id: 0,
//     //   author: '',
//     //   rating: 0,
//     //   likes: 0,
//     //   createdDatetime: '',
//     //   content: '',
//     // },
//   });

//   useEffect(() => {
//     getReviewOverView(id);
//   }, [id]);

//   useEffect(() => {
//     console.log(reviewOverView);
//   }, [reviewOverView]);

//   const getReviewOverView = async (id) => {
//     await reviewAPI
//       .getReview(id)
//       .then((res) => {
//         setReviewOverView(res.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   const history = useHistory();

//   const handleClick = () => {
//     history.push({
//       pathname: `/youtubers/reviewWrite/${id}`,
//     });
//   };

//   return (
//     <style.YoutuberContainer>
//       {reviewOverView.backgroundImage ? (
//         <style.YoutuberBanner
//           src={reviewOverView.backgroundImage}
//           alt="YoutuberBanner"
//         />
//       ) : (
//         <style.GrayBar />
//       )}
//       <style.InfoContatiner>
//         <style.YoutuberHeaderContainer>
//           <style.HeaderBox>
//             <style.YoutuberImg src={reviewOverView.thumbnail} />
//             <style.Flex
//               direction={'column'}
//               alignItems={'flex-start'}
//               M_direction={'column'}
//             >
//               <style.YoutuberName>{reviewOverView.title}</style.YoutuberName>
//               <style.Flex alignItems={'center'}>
//                 <Rating max={1} value={1} size="small" readOnly />
//                 <style.YoutuberRating>
//                   {reviewOverView.rating}
//                 </style.YoutuberRating>
//                 <style.ReviewCount>
//                   ({reviewOverView.reviews})개 리뷰
//                 </style.ReviewCount>
//               </style.Flex>
//             </style.Flex>
//           </style.HeaderBox>
//           <style.Flex>
//             <style.ReviewButton onClick={handleClick}>
//               <style.Span color="#fff" font="SHSN-B" size="14px">
//                 이 유튜버 리뷰하기
//               </style.Span>
//             </style.ReviewButton>
//           </style.Flex>
//         </style.YoutuberHeaderContainer>
//         {/* <style.MainReviewContainer> */}
//         <style.FlexContainerColumn>
//           <YoutuberDetail reviewOverView={reviewOverView} />
//           <YoutuberReviewDetail reviewOverView={reviewOverView} />
//           <YoutuberVideo reviewOverView={reviewOverView} />
//         </style.FlexContainerColumn>
//         <style.FlexContainerColumn>
//           <style.YoutuberCardContainer>
//             <style.CategoryTitle>
//               {reviewOverView.category} 유튜버
//             </style.CategoryTitle>
//             <YoutuberCard />
//             <YoutuberCard />
//             <YoutuberCard />
//             <YoutuberCard />
//           </style.YoutuberCardContainer>
//           <style.YoutuberCardContainer style={{ marginTop: '30px' }}>
//             <style.CategoryTitle>인기 유튜버</style.CategoryTitle>
//             <YoutuberCard />
//             <YoutuberCard />
//             <YoutuberCard />
//             <YoutuberCard />
//           </style.YoutuberCardContainer>
//         </style.FlexContainerColumn>
//         {/* </style.MainReviewContainer> */}
//       </style.InfoContatiner>
//     </style.YoutuberContainer>
//   );
// }

export default function Youtuber() {
  const [youtuberInfo, setYoutuberInfo] = useState({
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    title: '빠더너스',
    description:
      '月刊 尹鍾信 [월간 윤종신]은 프로듀서 윤종신을 주축으로 한 독자적인 매체이자 기획 전문 집단이다.2010년 3월 두 곡의 음원을 발표하는 것으로 시작된 [월간 윤종신]은 매월 음원과 뮤직비디오를 제작하는 것에서 한걸음 더 나아가 2012 년부터는 디지털 매거진을 발행하고 있으며, 2013 년부터는 음악 뿐만 아니라 문학, 영화, 사진, 미술, 아ㅓㄹ아러ㅏ어라추ㅏㅍ머ㅏㄴㅇ럼낭러먼ㅇ람너아라아어람ㅇㄴ러ㅏㅁ러ㅏㅇㅁㄴ러ㅏㅇㄴㅁ러ㅏㅇㄴ러ㅏㅁㅇ너랑ㄴ머ㅏ ㅓㄴㅇ마렁나렁ㅁasdfasdfsadfasdfsdafasdfadsfsdf라 문학, 영화, 사진, 미술, 아ㅓㄹ아러ㅏ어라추ㅏㅍ머ㅏㄴㅇ럼낭러먼ㅇ람너아라아어람ㅇㄴ러ㅏㅁ러ㅏㅇㅁㄴ러ㅏㅇㄴㅁ러ㅏㅇㄴ러ㅏㅁㅇ너랑ㄴ머ㅏ ㅓㄴㅇ마렁나렁ㅁasdfasdfsadfasdfsdafasdfadsfsdf라 문학, 영화, 사진, 미술, 아ㅓㄹ아러ㅏ어라추ㅏㅍ머ㅏㄴㅇ럼낭러먼ㅇ람너아라아어람ㅇㄴ러ㅏㅁ러ㅏㅇㅁㄴ러ㅏㅇㄴㅁ러ㅏㅇㄴ러ㅏㅁㅇ너랑ㄴ머ㅏ ㅓㄴㅇ마렁나렁ㅁasdfasdfsadfasdfsdafasdfadsfsdf라 문학, 영화, 사진, 미술, 아ㅓㄹ아러ㅏ어라추ㅏㅍ머ㅏㄴㅇ럼낭러먼ㅇ람너아라아어람ㅇㄴ러ㅏㅁ러ㅏㅇㅁㄴ러ㅏㅇㄴㅁ러ㅏㅇㄴ러ㅏㅁㅇ너랑ㄴ머ㅏ ㅓㄴㅇ마렁나렁ㅁasdfasdfsadfasdfsdafasdfadsfsdf',
    category: 23,
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    backgroundImage: '',
    subscribes: 11233143,
    reviews: 391232,
    rating: 4.9,
  });
  return (
    <style.YoutuberContainer>
      {youtuberInfo.backgroundImage ? (
        <style.YoutuberBanner
          src={youtuberInfo.backgroundImage}
          alt="YoutuberBanner"
        />
      ) : (
        <style.GrayBar />
      )}
      <style.InfoContatiner>
        <YoutuberHeader youtuberInfo={youtuberInfo} />
        <style.MainInfoContainer>
          <style.LeftInfoContainer>
            <YoutuberIntro youtuberInfo={youtuberInfo} />
            <YoutuberReview youtuberInfo={youtuberInfo} />
            <YoutuberVideos youtuberInfo={youtuberInfo} M_display={'none'} />
          </style.LeftInfoContainer>
          <style.RightInfoContainer>
            <RecommendYoutuber category={youtuberInfo.category} />
            <RecommendYoutuber />
          </style.RightInfoContainer>
        </style.MainInfoContainer>
      </style.InfoContatiner>
    </style.YoutuberContainer>
  );
}
