import { numToKorean } from 'lib/numberFomat';
import { useState } from 'react';
import * as style from './style';

export default function YoutuberIntro({
  youtuberInfo: {
    id,
    title,
    description,
    category,
    thumbnail,
    backgroundImage,
    subscribes,
    reviews,
    rating,
  },
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <style.InfoContainer>
      <style.InfoBox>
        <style.InfoTitle> 소개</style.InfoTitle>
        <style.SpanFlex>
          <style.InfoSpan>홈페이지</style.InfoSpan>
          <style.YoutubeIconA
            href={`https://www.youtube.com/channel/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            <style.YoutubeIcon
              src={require('assets/images/youtubeIcon.png').default}
            />
          </style.YoutubeIconA>
        </style.SpanFlex>
        <style.SpanFlex>
          <style.InfoSpan>구독자 수</style.InfoSpan>
          <style.SubscriberCount>
            {numToKorean(subscribes)}명
          </style.SubscriberCount>
        </style.SpanFlex>
        <style.YoutuberDescription className={showMore ? '' : 'showHidden'}>
          {description}
        </style.YoutuberDescription>
        {!showMore && (
          <style.ViewMore
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            자세히 보기
          </style.ViewMore>
        )}
      </style.InfoBox>
    </style.InfoContainer>
  );
}
