import * as style from './StarRatingStyle';

export default function StarRating({ ratings, paddingB, margins }) {
  const perRatings = ratings * 20;
  return (
    <style.StarRatings paddingB={paddingB} margins={margins}>
      <style.StarBase>★★★★★</style.StarBase>
      <style.StarFill ratings={perRatings}>★★★★★</style.StarFill>
    </style.StarRatings>
  );
}
