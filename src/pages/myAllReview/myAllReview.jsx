import ReviewList from 'components/reviewList/ReviewList';
import * as style from './style';

export default function MyAllReview() {
  return (
    <style.MyAllReviewContainer>
      <ReviewList from={'myInfo'} all={true} />
    </style.MyAllReviewContainer>
  );
}
