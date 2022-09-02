import * as style from './YoutuberBannerStyle';

export default function YoutuberBanner({ bannerImgUrl }) {
  return (
    <style.YoutuberBannerBox>
      {bannerImgUrl ? (
        <style.YoutuberBannerBox src={bannerImgUrl} alt="YoutuberBanner" />
      ) : (
        <style.GrayBar />
      )}
    </style.YoutuberBannerBox>
  );
}
