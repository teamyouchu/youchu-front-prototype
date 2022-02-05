import * as style from './styles/EmptyResultStyle';

export default function EmptyResult() {
  return (
    <style.EmptyResultContainer>
        <style.Img src="/images/empty_page.png" alt="empty image" />
        <style.Message>앗! 아직 등록이 안된 유튜버 인가봐요!</style.Message>
        <style.Message>
            <style.RegisterButton>
                유튜버 등록
            </style.RegisterButton>
            을 해볼까요?
        </style.Message>
    </style.EmptyResultContainer>
  );
}
