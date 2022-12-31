import * as style from './SearchResultSkeletonStyle.js';

export default function SearchResultSkeleton({ page }) {
  return (
    <>
      {Array(5)
        .fill()
        .map((item, index) => (
          <style.SearchResultBox page={page} key={index}>
            <style.SkeletonSearchResultImg variant="circular" />
            <style.SkeletonSearchResultName variant="rounded" />
            <style.SkeletonSearchResultSubscribers variant="rounded" />
          </style.SearchResultBox>
        ))}
    </>
  );
}
