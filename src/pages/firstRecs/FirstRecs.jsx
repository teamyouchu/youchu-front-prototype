import * as style from './style';
import FirstYoutuberList from 'components/firstYoutuberList/FirstYoutuberList';

export default function FirstRecs() {
  return (
    <style.FirstRecsContainer>
      <style.EvaledCountBox>
        <style.RowFlex>
          <style.EvaledCountTitleBox>
            <style.Star>★</style.Star>
            <style.EvaledCountTitle>평가 수</style.EvaledCountTitle>
          </style.EvaledCountTitleBox>
          <style.EvaledLink to={'evaluated'}>
            평가한 유튜버 보러 가기
          </style.EvaledLink>
        </style.RowFlex>
        <style.EvaledCount>6</style.EvaledCount>
        <style.EvaledCountText>5개 평가하기 달성!</style.EvaledCountText>
      </style.EvaledCountBox>
      <FirstYoutuberList from={'recs'} />
    </style.FirstRecsContainer>
  );
}
