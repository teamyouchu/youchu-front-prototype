import MyInfo from 'components/myInfo/MyInfo';

export default function ModifyNickName() {
  return (
    <MyInfo
      title="프로필 수정"
      showNickname={true}
      showCategory={false}
      buttonMsg="저장하기"
    />
  );
}
