import * as style from './YoutuberInfoStyle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YoutuberBanner from './youtuberBanner/YoutuberBanner';
import YoutuberHeader from './youtuberHeader/YoutuberHeader';
import YoutuberIntro from './infoContainer/YoutuberIntro';
import YoutuberReview from './infoContainer/YoutuberReview';
import YoutuberVideos from './infoContainer/YoutuberVideos';
import RecommendYoutuber from 'components/youtuberInfo/recommendYoutuber/RecommendYoutuber';
import ReviewList from 'components/reviewList/ReviewList';
import youtuberAPI from 'api/youtuberAPI';

export default function YoutuberInfo({ all }) {
  const { channel_id } = useParams();

  const [youtuberInfo, setYoutuberInfo] = useState({
    isLoading: false,
    data: {},
  });

  useEffect(() => {
    youtuberAPI
      .getYoutuberInfo(channel_id)
      .then((res) => {
        setYoutuberInfo({
          ...youtuberInfo,
          isLoading: true,
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel_id]);

  return (
    <>
      {/* TODO 서지수 스켈레톤 추가 */}
      {youtuberInfo.isLoading && (
        <style.YoutuberContainer>
          <YoutuberBanner bannerImgUrl={youtuberInfo.data.backgroundImage} />
          <style.InfoContatiner>
            <YoutuberHeader youtuberInfo={youtuberInfo.data} />
            <style.MainInfoContainer>
              <style.LeftInfoContainer>
                {!all && <YoutuberIntro youtuberInfo={youtuberInfo.data} />}
                <YoutuberReview youtuberInfo={youtuberInfo.data} all={all} />
                {!all && <YoutuberVideos />}
                {all && <ReviewList from={'youtuber'} all={all} />}
              </style.LeftInfoContainer>
              <style.RightInfoContainer all={all}>
                <RecommendYoutuber category={youtuberInfo.data.category} />
                <RecommendYoutuber />
              </style.RightInfoContainer>
            </style.MainInfoContainer>
          </style.InfoContatiner>
        </style.YoutuberContainer>
      )}
    </>
  );
}
