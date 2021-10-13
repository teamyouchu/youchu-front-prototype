import ReviewRank from 'components/ReviewRank';
import Recommend from 'components/Recommend';
import Banner from 'components/Banner';
import * as style from './style';

export default function Home() {
  return (
    <>
      <style.Container>
        <Banner />
        <ReviewRank />
        <Recommend />
      </style.Container>
    </>
  );
}
