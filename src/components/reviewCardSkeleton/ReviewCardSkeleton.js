import * as style from './ReviewCardSkeletonStyle';

export default function ReviewCardSkeleton({ page }) {
  return (
    <style.RvContainer page={page}>
      <style.SkeletonImg variant="circular" />
      <style.RvInfoContainer>
        <style.Group marginB="10px">
          <style.SkeletonRvCategory variant="rounded" />
        </style.Group>
        <style.Group marginB="8px">
          <style.SkeletonRvChannelName variant="rounded" />
          <style.SkeletonSubscriberCount variant="rounded" />
        </style.Group>
        <style.Group marginB={'15px'}>
          <style.SkeletonRatings variant="rounded" />
        </style.Group>
        <style.Group marginB_M="0px" page={page}>
          <style.Group marginB="5px">
            <style.SkeletonBestReviewTitle variant="rounded" />
          </style.Group>
          <style.Group marginB="2px" marginB_M="2px">
            <style.SkeletonBestReview variant="rounded" />
          </style.Group>
          <style.Group marginB_M="0px">
            <style.SkeletonBestReview variant="rounded" />
          </style.Group>
        </style.Group>
      </style.RvInfoContainer>
    </style.RvContainer>
  );
}
