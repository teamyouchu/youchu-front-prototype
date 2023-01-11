import * as style from './FirstWriteRatingStyle';
import StarIcon from '@mui/icons-material/Star';

export default function FirstWriteRating({
  youtuberId,
  inputRating,
  setInputRating,
  evalYoutubers,
  setEvalYoutubers,
}) {
  return (
    <style.FirstWriteRating
      precision={0.5}
      onChange={(event, newValue) => {
        setYoutuber({ ...youtuber, rating: newValue });
      }}
      emptyIcon={<StarIcon fontSize="inherit" />}
    />
  );
}
