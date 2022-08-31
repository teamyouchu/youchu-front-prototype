import * as style from './style';
import { numToKorean } from 'lib/numberFomat';
import ContentsOverflow from 'components/contentsOverflow/ContentsOverflow';

export default function YoutuberIntro({
  youtuberInfo: { id, description, subscribes },
}) {
  return (
    <style.InfoContainer>
      <style.IntroBox>
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
        <ContentsOverflow contents={description} />
      </style.IntroBox>
    </style.InfoContainer>
  );
}
