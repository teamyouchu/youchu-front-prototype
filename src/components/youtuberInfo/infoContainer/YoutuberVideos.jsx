import * as style from './style';
import { useEffect, useState } from 'react';
import VideoInfo from '../videoInfo/VideoInfo';
import youtuberAPI from 'lib/api/youtuberAPI';

export default function YoutuberVideos({ youtuberInfo: { id }, M_display }) {
  const [sortFocus /*SetSortSocus*/] = useState(true);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    await youtuberAPI
      .getYoutuberVideos(id)
      .then((res) => {
        setVideos(res.data.videos);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    // 유튜버 영상 요청 api
    if (sortFocus === true) {
      getVideos(id, '조회수 순');
    } else {
      getVideos(id, '최신순');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, sortFocus]);

  return (
    <style.InfoContainer M_display={M_display}>
      <style.InfoBox>
        <style.TitleFlex>
          <style.InfoTitle margin_B={'0'}> 동영상</style.InfoTitle>
          <style.SpanFlex margin_B={'0'}>
            {/* <style.SortSpan
              className={sortFocus ? 'sortFocus' : ''}
              onClick={() => {
                SetSortSocus(true);
              }}
            >
              조회수 순
            </style.SortSpan> */}
            <style.SortSpan
              className={sortFocus ? 'sortFocus' : ''}
              // className={sortFocus ? '' : 'sortFocus'}
              // onClick={() => {
              //   SetSortSocus(false);
              // }}
            >
              업로드 날짜순
            </style.SortSpan>
          </style.SpanFlex>
        </style.TitleFlex>
        <style.VideosContainer>
          {videos.map((data) => (
            <VideoInfo key={data.id} data={data} />
          ))}
        </style.VideosContainer>
      </style.InfoBox>
      <style.ShowMoreBox>
        <a
          href={`https://www.youtube.com/channel/${id}/videos`}
          target="_blank"
          rel="noreferrer"
        >
          <style.ShowMoreSpan>유튜버&nbsp;</style.ShowMoreSpan>
          <style.ShowMoreSpan>동영상 모두 보기&nbsp;&gt;</style.ShowMoreSpan>
        </a>
      </style.ShowMoreBox>
    </style.InfoContainer>
  );
}
