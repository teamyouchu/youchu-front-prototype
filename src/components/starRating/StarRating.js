import * as style from './StarRatingStyle';

export default function StarRating({ ratings, margins, from }) {
  const perRatings = ratings * 20;
  return (
    <style.StarRatings margins={margins} from={from}>
      <style.StarBase from={from}>★★★★★</style.StarBase>
      <style.StarFill ratings={perRatings} from={from}>
        ★★★★★
      </style.StarFill>
    </style.StarRatings>
  );
}
