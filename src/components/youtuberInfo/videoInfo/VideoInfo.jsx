import * as style from './VideoInfoStyle';
import { numberComma } from 'lib/numberFomat';

export default function VideoInfo({
  data: { videoUrl, thumbnail, title, views, dates },
}) {
  return (
    <style.VideoBox href={videoUrl} target="_blank" rel="noreferrer">
      <style.VideoThumbnail src={thumbnail} />
      <style.VideoTitle>{title}</style.VideoTitle>
      <style.SpanFlex>
        <style.PlayIcon src={require('assets/images/play.png').default} />
        <style.InfoSpan>{numberComma(views)}</style.InfoSpan>
        <style.InfoSpan>{dates}</style.InfoSpan>
      </style.SpanFlex>
    </style.VideoBox>
  );
}
