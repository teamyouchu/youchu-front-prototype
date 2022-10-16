import * as style from './style';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import youtuberAPI from 'lib/api/youtuberAPI';
import SearchInput from 'components/searchInput/SearchInput';

export default function MRegistration() {
  // 유튜버 등록 요청 코드
  const [channel, setChannel] = useState();
  const history = useHistory();
  const onRegisterClick = async () => {
    if (channel.isExist) {
      alert('이미 등록된 유튜버입니다. 유튜버 페이지로 이동합니다.');
      history.push(`/youtubers/review/${channel.channel_id}`);
    } else {
      await youtuberAPI
        .registYoutuber({
          channel_id: channel.channel_id,
        })
        .then((res) => {
          alert('유튜버의 첫 리뷰를 작성해주세요.');
          history.push(`/youtubers/reviewWrite/${channel.channel_id}`);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <style.MRegiContainer>
      <style.Span
        font="SHSN-L"
        size="25px"
        lineHeight="31px"
        margins="0 0 30px 0"
      >
        유튜버 등록
      </style.Span>
      <style.Span font="SHSN-R" margins="0 0 10px 0">
        등록하시려는 유튜버의 이름을 입력해주세요!
      </style.Span>
      <SearchInput page={'registration'} setChannel={setChannel} />
      <style.CompleteButton onClick={onRegisterClick}>
        등록하기
      </style.CompleteButton>
    </style.MRegiContainer>
  );
}
