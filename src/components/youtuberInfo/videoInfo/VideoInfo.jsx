import * as style from './VideoInfoStyle';
import { numberComma } from 'lib/numberFomat';

export default function VideoInfo({
  data: { id, thumbnail, title, views, publishedDatetime },
}) {
  return (
    <style.VideoBox
      href={`https://youtu.be/${id}`}
      target="_blank"
      rel="noreferrer"
    >
      <style.VideoThumbnail src={thumbnail} />
      <style.VideoTitle>{title}</style.VideoTitle>
      <style.SpanFlex>
        <style.PlayIcon src={require('assets/images/play.png').default} />
        <style.InfoSpan>{numberComma(views)}</style.InfoSpan>
        <style.InfoSpan>{publishedDatetime.substr(0, 10)}</style.InfoSpan>
      </style.SpanFlex>
    </style.VideoBox>
  );
}
