import * as style from './style';
import { useEffect, useState } from 'react';
import VideoInfo from '../videoInfo/VideoInfo';

export default function YoutuberVideos({
  youtuberInfo: { id, reviews, rating },
  M_display,
}) {
  const [sortFocus, SetSortSocus] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // 유튜버 영상 요청 api
    if (sortFocus === true) {
      setVideos(bestVideos);
    } else {
      setVideos(newVideos);
    }
  }, [sortFocus]);
  return (
    <style.InfoContainer M_display={M_display}>
      <style.InfoBox>
        <style.TitleFlex>
          <style.InfoTitle margin_B={'0'}> 동영상</style.InfoTitle>
          <style.SpanFlex margin_B={'0'}>
            <style.SortSpan
              className={sortFocus ? 'sortFocus' : ''}
              onClick={() => {
                SetSortSocus(true);
              }}
            >
              조회수 순
            </style.SortSpan>
            <style.SortSpan
              className={sortFocus ? '' : 'sortFocus'}
              onClick={() => {
                SetSortSocus(false);
              }}
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

const bestVideos = [
  {
    id: 1,
    videoUrl: 'https://youtu.be/Lb1UMS-n-rY',
    thumbnail:
      'https://i.ytimg.com/vi/Lb1UMS-n-rY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqoyEbEnx6itkQMXZi8Br5Txi3vQ',
    title: '[ENG][문쌤] 수업 중 에어드랍 테러 그만해! 내가 돼지라는 소리야?',
    views: 5495152,
    dates: '2021-09-23',
  },
  {
    id: 2,
    videoUrl: 'https://youtu.be/rcZDzL7rMTM',
    thumbnail:
      'https://i.ytimg.com/vi/rcZDzL7rMTM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr7Wgx64k7_K1Vsxo6Z6C1ZN92gg',
    title: '[문쌤] 에어드랍 꺼놨더니 또 이런 짓을 해? 문제 테러 당한 문쌤',
    views: 3197530,
    dates: '2020-01-17',
  },
  {
    id: 3,
    videoUrl: 'https://youtu.be/nvOb18mDR1A',
    thumbnail:
      'https://i.ytimg.com/vi/nvOb18mDR1A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBXUw4fMoubA1TI7mXyY1agdyafrg',
    title: '뉴스 도중에 포켓몬빵 깠는데... (레전드 방송사고)',
    views: 3033625,
    dates: '2022-03-25',
  },
];

const newVideos = [
  {
    id: 1,
    videoUrl: 'https://youtu.be/c2ynY3AnUNg',
    thumbnail:
      'https://i.ytimg.com/vi/c2ynY3AnUNg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIZwDf4RmrWRhperiXCnwXFULFLg',
    title: '뉴스 도중에 층간소음 항의하러 갔다가... (레전드 방송사고)',
    views: 175199,
    dates: '2021-08-24',
  },
  {
    id: 2,
    videoUrl: 'https://youtu.be/nX1ExikYzxU',
    thumbnail:
      'https://i.ytimg.com/vi/nX1ExikYzxU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBEQCN85X8ZdM5Nvd033A2kNX1O5g',
    title: '[해인칭] “무인도에 떨어진다면?” 극 N들의 대화, 만약에 게임!',
    views: 178384,
    dates: '2022-08-21',
  },
  {
    id: 3,
    videoUrl: 'https://youtu.be/WXYU7vNGTMY',
    thumbnail:
      'https://i.ytimg.com/vi/WXYU7vNGTMY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6Ns1hru565kjYJdipOvhJMQUXyg',
    title: '면치기 하지 말자 얘들아',
    views: 238215,
    dates: '2022-08-17',
  },
];
