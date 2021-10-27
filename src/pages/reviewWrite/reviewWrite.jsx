import * as style from './style';

export default function ReviewWrite() {
  const ChannelName = '딩고 뮤직';
  return (
    <style.reviewWriteContainer>
      <style.ContentsContainer>
        <style.HeaderContainer>
          <style.Title>
            유튜버 리뷰 작성
          </style.Title>
          <style.ChannelContainer>
            <style.Img src='/images/딩고 뮤직.jpg' alt='딩고 뮤직' title='딩고 뮤직' />
            <style.FlexContainer>
              <style.ChannelNameTitle>유튜버 이름</style.ChannelNameTitle>
              <style.ChannelName>{ChannelName}</style.ChannelName>
            </style.FlexContainer>
          </style.ChannelContainer>
        </style.HeaderContainer>
        <form action="/" method="post">
          <style.BodyContainer>
            <style.SubTitle>유튜버 리뷰 작성하기</style.SubTitle>
            <style.WriteContainer>
                <style.Label>별점</style.Label>
                <style.StarRating icon='star' maxRating={5} clearable size='huge' />
                <style.Label>한줄평</style.Label>
                <style.CommentInput required minLength='10' maxLength='60' placeholder='예 : 힘들 때 큰도움이 되었어요.' />
                <style.Label>장점</style.Label>
                <style.StrengthInput as="textarea" required placeholder='이 유튜버가 가장 좋았던 점은 무엇인가요?'/>
                <style.Label>단점</style.Label>
                <style.WeaknessInput as="textarea" required placeholder='이 유튜버에게 아쉬웠던 점은 무엇인가요?'/>
            </style.WriteContainer>
          </style.BodyContainer>
          <style.FooterContainer>
            <style.Warning>솔직하게 작성하신 리뷰는 수정이 불가능하고 삭제만 가능합니다. 허위 리뷰나, 명예훼손, 욕설, 타인비방글 등 유튜버나 제3자의 권리를 침해하는 리뷰는 제재를 받을 수 있습니다. 게시에 따른 책임은 작성자에게 있으며, 유츄들은 이에 대한 법적 책임을 지지 않습니다.</style.Warning>
            <style.SubmitBtn type="submit">완료</style.SubmitBtn>
          </style.FooterContainer>
        </form>
      </style.ContentsContainer>
    </style.reviewWriteContainer>
  );
}
