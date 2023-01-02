import * as style from './RegButtonStyle';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import youtuberAPI from 'lib/api/youtuberAPI';
import { UserContext } from 'lib/UserContext';

export default function RegButton({ channel }) {
  const { setRistOpen } = useContext(UserContext);

  // 유튜버 등록 요청 코드
  const history = useHistory();
  const onRegisterClick = async () => {
    if (channel.isExist) {
      setRistOpen(false);
      alert('이미 등록된 유튜버입니다. 유튜버 페이지로 이동합니다.');
      history.push(`/youtubers/review/${channel.channel_id}`);
    } else {
      await youtuberAPI
        .registYoutuber({
          channel_id: channel.channel_id,
        })
        .then((res) => {
          setRistOpen(false);
          alert('유튜버의 첫 리뷰를 작성해주세요.');
          history.push(`/youtubers/reviewWrite/${channel.channel_id}`);
        })
        .catch((err) => console.log(err));
    }
  };
  return <style.RegButton onClick={onRegisterClick}>등록하기</style.RegButton>;
}
