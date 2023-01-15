import * as style from './FirstWriteRatingStyle';
import StarIcon from '@mui/icons-material/Star';

export default function FirstWriteRating({
  youtuberId,
  evalYoutubers,
  setEvalYoutubers,
}) {
  const onRatingChange = (newValue) => {
    if (newValue === null) {
      // 평가 삭제
      setEvalYoutubers({
        ...evalYoutubers,
        count: evalYoutubers.count - 1,
        list: [
          ...evalYoutubers.list.filter((el) => el.youtuberId !== youtuberId),
        ],
      });
    } else {
      const isIncludes = evalYoutubers.list.find(
        (el) => el.youtuberId === youtuberId,
      );
      if (isIncludes) {
        // 평가 수정
        const findIndex = evalYoutubers.list.findIndex(
          (el) => el.youtuberId === youtuberId,
        );
        const copyArray = [...evalYoutubers.list];
        copyArray[findIndex] = { ...copyArray[findIndex], rating: newValue };
        setEvalYoutubers({
          ...evalYoutubers,
          list: copyArray,
        });
      } else {
        // 평가 추가
        setEvalYoutubers({
          ...evalYoutubers,
          count: evalYoutubers.count + 1,
          list: [...evalYoutubers.list, { youtuberId, rating: newValue }],
        });
      }
    }
  };

  return (
    <style.FirstWriteRating
      precision={0.5}
      onChange={(_, newValue) => {
        onRatingChange(newValue);
      }}
      emptyIcon={<StarIcon fontSize="inherit" />}
    />
  );
}
