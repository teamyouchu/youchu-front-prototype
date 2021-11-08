import * as style from './styles/StarRatingStyle';

export default function StarRating({ ratings, paddingB }) {
  const perRatings = ratings * 20;
  return (
    <style.StarRatings paddingB={paddingB}>
      <style.StarBase>★★★★★</style.StarBase>
      <style.StarFill ratings={perRatings}>★★★★★</style.StarFill>
    </style.StarRatings>
  );
}
