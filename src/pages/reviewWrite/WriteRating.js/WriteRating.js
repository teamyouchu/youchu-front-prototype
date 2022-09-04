import * as style from './WriteRatingStyle';
import StarIcon from '@mui/icons-material/Star';

export default function WriteRating({ rating, setRating, setIsRating }) {
  return (
    <style.WriteRating
      precision={0.5}
      value={rating}
      onChange={(event, newValue) => {
        setRating(newValue);
      }}
      onClick={() => {
        setIsRating(false);
      }}
      emptyIcon={<StarIcon fontSize="inherit" />}
    />
  );
}
