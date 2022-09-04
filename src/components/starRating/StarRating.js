import * as style from './StarRatingStyle';

export default function StarRating({ rating, from }) {
  const perRatings = rating * 20;
  return (
    <style.StarRatings from={from}>
      <style.StarBase from={from}>★★★★★</style.StarBase>
      <style.StarFill rating={perRatings} from={from}>
        ★★★★★
      </style.StarFill>
    </style.StarRatings>
  );
}
