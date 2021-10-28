import styled from 'styled-components';

export const GrayBar = styled.div`
  height: 120px;
  background-color: #75787a;
`;

export const YoutuberContainer = styled.div`
  display: flex;
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

export const YoutuberSummaryRankScore = styled.span`
  font-size: 14px;
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

export const CategoryLikeContainer = styled(YoutuberDetailContainer)`
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
