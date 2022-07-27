import MyReview from 'components/myReview/MyReview';
import * as style from './style';

export default function MyAllReview() {
  return (
    <style.MyAllReviewContainer>
      <MyReview all={true} />
    </style.MyAllReviewContainer>
  );
}
