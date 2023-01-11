import * as style from './RecommendCardSkeletonStyle';

export default function RecommendCardSkeleton({ page }) {
  return (
    <style.RcmdContainer page={page}>
      <style.SkeletonImg variant="circular" />
      <style.GroupBox>
        <style.Group marginB="3px">
          <style.SkeletonRcmdChannelName variant="rounded" />
        </style.Group>
        <style.Group marginB="5px">
          <style.SkeletonRating variant="rounded" />
        </style.Group>
        <style.Group>
          <style.SkeletonCategory variant="rounded" />
        </style.Group>
      </style.GroupBox>
    </style.RcmdContainer>
  );
}
