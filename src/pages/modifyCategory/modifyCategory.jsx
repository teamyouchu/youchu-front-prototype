import MyInfo from 'components/MyInfo';

export default function ModifyCategory() {
  return (
    <MyInfo 
      title="내 관심 카테고리"
      showNickname={false}
      showCategory={true}
      buttonMsg="저장하기"
    />
  );
}