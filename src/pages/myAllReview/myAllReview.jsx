import ReviewList from 'components/reviewList/reviewList';
import * as style from './style';

export default function MyAllReview() {
  return (
    <style.MyAllReviewContainer>
      <ReviewList from={'myInfo'} all={true} />
    </style.MyAllReviewContainer>
  );
}
