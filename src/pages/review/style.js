import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const GrayBar = styled.div`
  height: 120px;
  background-color: #75787a;
`;

export const FlexContainer = styled.div`
  display: flex;
`;
export const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export const YoutudberInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  font-family: 'SHSN-B';
`;

export const YoutuberHeaderTitle = styled.span`
  font-size: 28px;
`;

export const YoutuberSummaryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;

export const YoutuberSummaryRank = styled.span`
  color: #f8d26a;
`;

export const Score = styled.span`
  font-size: 14px;
  font-family: 'SHSN-M';
`;

export const YoutuberSummartRankReviewCount = styled.span`
  margin-left: 2px;
  font-size: 14px;
  color: #94969b;
`;

export const Contatiner = styled.div`
  display: flex;
  width: 1100px;
  flex-direction: column;
  margin: 0 auto;
`;

export const YoutuberHeaderContainer = styled.div`
  display: flex;
`;

export const YoutuberDetailContainer = styled.div`
  width: 800px;
  height: 530px;
  border: 1px solid #dedede;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 25px 40px;
`;

export const YoutuberDetailTitle = styled.div`
  font-family: 'SHSN-B';
  font-size: 26px;
  margin-bottom: 10px;
`;

export const YoutuberDetailContent = styled.div`
  margin-top: 20px;
  font-family: 'SHSN-R';
  font-size: 16px;
  display: flex;
`;

export const YoutuberDetailGray = styled(YoutuberDetailContent)`
  margin: 0px 30px 0px 0px;
  color: #94969b;
`;

export const YoutuberDetailSubcribe = styled.span`
  font-family: 'SHSN-M';
  font-size: 16px;
`;

export const YoutuberCardContainer = styled(YoutuberDetailContainer)`
  width: 298px;
  height: 485px;
  margin-left: 20px;
  padding: 0;
`;

export const CategoryTitle = styled.span`
  padding: 16px 18px;
  font-family: 'SHSN-B';
  font-size: 16px;
`;

export const CategoryCardContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dedede;
  margin-top: 15.3px;
`;

export const CategoryCardDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CategoryCardDetailTitle = styled.span`
  font-size: 16px;
  font-family: 'SHSN-M';
  margin-bottom: 5px;
`;

export const CategoryTag = styled.div`
  font-family: 'SHSN-M';
  font-size: 11px;
  color: #808084;
  display: inline;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 6px 8px;
`;

export const CategoryTagContainer = styled.div`
  margin-top: 5px;
`;

export const StarBase = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 18px;
  color: #d8d8d8;
  z-index: 0;
`;

export const StarRatings = styled.div`
  position: relative;
`;

export const StarFill = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 18px;
  color: #f8d26a;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${(props) => props.ratings + '%'};
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  padding: 0px 5px 15px 0;
`;

export const ReviewContainer = styled.div`
  width: 800px;
  height: 530px;
  border: 1px solid #dedede;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const ReviewContainerHeader = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px 0px 40px;
  border-bottom: 1px solid #dedede;
`;

export const ReviewContainerFooter = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 21px;
  border-top: 1px solid #dedede;
`;

export const ReviewButton = styled.div`
  cursor: pointer;
`;

export const RightButton = styled(FontAwesomeIcon)`
  margin-left: 7px;
  font-family: 'SHSN-R';
`;

export const BoldSpan = styled.span`
  font-family: 'SHSN-B';
  font-size: 14px;
`;

export const TotalScore = styled(BoldSpan)`
  font-size: 25px;
`;

export const ReviewDetailInfo = styled(FlexContainer)`
  margin: 30px 0px 0px 0px;
`;

export const BestReviewContainer = styled(FlexContainer)`
  height: 300px;
  width: 100%;
  padding: 20px 0px 20px 40px;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  title: props.title,
}))`
  border: 1px solid #dedede;
  border-radius: 50%;
  position: relative;
  bottom: 25px;
`;

export const RcImg = styled(Img)`
  display: block;
  width: 130px;
  height: 130px;

  margin-bottom: 10px;
`;

export const CategoryImg = styled(RcImg)`
  display: block;
  width: 72px;
  height: 72px;
  position: static;
  margin: 0px 15px 20px 18px;
`;
