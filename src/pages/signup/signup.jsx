import MyInfo from 'components/myInfo/MyInfo';
import { useLocation } from 'react-router-dom';

export default function Signup() {
  const location = useLocation();
  return (
    <MyInfo
      title="기본 프로필을 작성해봐요!"
      titleFont="SHSN-L"
      showNickname={true}
      showCategory={true}
      buttonMsg="완료"
      from={location.state.from}
    />
  );
}
