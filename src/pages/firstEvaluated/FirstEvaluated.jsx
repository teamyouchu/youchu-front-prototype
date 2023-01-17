import * as style from './style';
import FirstYoutuberList from 'components/firstYoutuberList/FirstYoutuberList';

export default function FirstEvaluated() {
  return (
    <style.FirstEvaledContainer>
      <FirstYoutuberList from={'evaled'} />
    </style.FirstEvaledContainer>
  );
}
