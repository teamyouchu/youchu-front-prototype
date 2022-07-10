import MyInfo from 'components/myInfo/MyInfo';

export default function Signup() {
  return (
    <MyInfo
      title="기본 프로필을 작성해봐요!"
      titleFont="SHSN-L"
      showNickname={true}
      showCategory={true}
      buttonMsg="완료"
    />
  );
}
