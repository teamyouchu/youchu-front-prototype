import ReviewRank from 'components/ReviewRank';
import Recommend from 'components/Recommend';
import * as style from './style';

export default function Home() {
  return (
    <>
      <style.Container>
        <ReviewRank />
        <Recommend />
      </style.Container>
    </>
  );
}
