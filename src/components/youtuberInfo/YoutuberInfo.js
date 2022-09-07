import * as style from './YoutuberInfoStyle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YoutuberBanner from './youtuberBanner/YoutuberBanner';
import YoutuberHeader from './youtuberHeader/YoutuberHeader';
import YoutuberIntro from './infoContainer/YoutuberIntro';
import YoutuberReview from './infoContainer/YoutuberReview';
import YoutuberVideos from './infoContainer/YoutuberVideos';
import RecommendYoutuber from 'components/youtuberInfo/recommendYoutuber/RecommendYoutuber';
import ReviewList from 'components/reviewList/reviewList';
import youtuberAPI from 'lib/api/youtuberAPI';

export default function YoutuberInfo({ all }) {
  const { channel_id } = useParams();
  const [youtuberInfo, setYoutuberInfo] = useState({
    id: '',
    title: '',
    description: '',
    category: 0,
    thumbnail: '',
    backgroundImage: '',
    subscribes: 0,
    reviews: 0,
    rating: 0,
  });

  useEffect(() => {
    youtuberAPI
      .getYoutuberInfo(channel_id)
      .then((res) => {
        setYoutuberInfo(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel_id]);

  return (
    <style.YoutuberContainer>
      <YoutuberBanner bannerImgUrl={youtuberInfo.backgroundImage} />
      <style.InfoContatiner>
        <YoutuberHeader youtuberInfo={youtuberInfo} />
        <style.MainInfoContainer>
          <style.LeftInfoContainer>
            {!all && <YoutuberIntro youtuberInfo={youtuberInfo} />}
            <YoutuberReview youtuberInfo={youtuberInfo} all={all} />
            {!all && (
              <YoutuberVideos youtuberInfo={youtuberInfo} M_display={'none'} />
            )}
            {all && <ReviewList from={'youtuber'} all={all} />}
          </style.LeftInfoContainer>
          <style.RightInfoContainer all={all}>
            <RecommendYoutuber category={youtuberInfo.category} />
            <RecommendYoutuber />
          </style.RightInfoContainer>
        </style.MainInfoContainer>
      </style.InfoContatiner>
    </style.YoutuberContainer>
  );
}
