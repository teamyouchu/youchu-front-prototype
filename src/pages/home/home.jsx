import ReviewRank from 'components/ReviewRank';
import Recommend from 'components/Recommend';
import * as style from './style';

export default function Home() {
  return (
    <>
      <style.BannerContainer>
        <style.TextField>
          여러분들만 아는 <br />
          <style.RedSpan>유튜버</style.RedSpan>들을 리뷰해봐요
        </style.TextField>
        <style.BannerImg src='/images/banner.png' />
      </style.BannerContainer>
      <ReviewRank />
      <Recommend />
    </>
  );
}
