import * as style from './style';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import youtuberAPI from 'lib/api/youtuberAPI';
import Warning from 'components/warning/Warning';

export default function ReviewWrite() {
  const history = useHistory();
  const { youtuber_id } = useParams();
  const [youtuberTitle, setYoutuberTitle] = useState('');
  const [youtuberThumbnail, setYoutuberThumbnail] = useState('');
  const [comment, setComment] = useState();
  const [rating, setRating] = useState();
  const [isRating, setIsRating] = useState(false);

  useEffect(() => {
    // 페이지 렌더링 시 유튜버 id로 정보 가져오기
    youtuberAPI
      .getYoutuber(youtuber_id)
      .then((res) => {
        setYoutuberTitle(res.data.title);
        setYoutuberThumbnail(res.data.thumbnail);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const onDoneSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || rating === undefined) {
      // 별점 미입력 시 경고 상태값 변경
      setIsRating(true);
      alert('별점은 필수 입력 사항입니다.');
    } else {
      // 조건에 맞으면 리뷰 작성 함수 실행
      reviewWriteFunc();
    }
  };

  const reviewWriteFunc = async () => {
    await youtuberAPI
      .postReview(youtuber_id, {
        comment: comment,
        rating: rating,
      })
      .then(() => {
        history.goBack();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <style.reviewWriteContainer>
      <style.ContentsContainer>
        <style.HeaderContainer>
          <style.Title>유튜버 리뷰 작성</style.Title>
          <style.ChannelContainer>
            <style.Img
              src={youtuberThumbnail}
              alt={youtuberTitle}
              title={youtuberTitle}
            />
            <style.FlexContainer>
              <style.ChannelNameTitle>유튜버 이름</style.ChannelNameTitle>
              <style.ChannelName>{youtuberTitle}</style.ChannelName>
            </style.FlexContainer>
          </style.ChannelContainer>
        </style.HeaderContainer>
        <form onSubmit={onDoneSubmit}>
          <style.BodyContainer>
            <style.SubTitle>유튜버 리뷰 작성하기</style.SubTitle>
            <style.WriteContainer>
              <style.Label>별점</style.Label>
              <style.StarRating
                icon="star"
                maxRating={5}
                clearable
                size="huge"
                onRate={(e, { rating }) => {
                  setRating(rating);
                }}
                onClick={() => {
                  setIsRating(false);
                }}
              />
              {isRating && (
                <Warning text="별점을 입력해주세요" margin="5px 0 0 0" />
              )}
              <style.CommentLabel>리뷰쓰기</style.CommentLabel>
              <style.CommentInput
                required
                minLength="3"
                maxLength="5000"
                placeholder="이 유튜버에 대한 생각을 자유롭게 작성해주세요."
                onChange={(e) => setComment(e.target.value)}
              />
            </style.WriteContainer>
          </style.BodyContainer>
          <style.FooterContainer>
            <style.Caution>
              솔직하게 작성하신 리뷰는 수정이 불가능하고 삭제만 가능합니다. 허위
              리뷰나, 명예훼손, 욕설, 타인비방글 등 유튜버나 제3자의 권리를
              침해하는 리뷰는 제재를 받을 수 있습니다. 게시에 따른 책임은
              작성자에게 있으며, 유츄는 이에 대한 법적 책임을 지지 않습니다.
            </style.Caution>
            <style.SubmitBtn type="submit">완료</style.SubmitBtn>
          </style.FooterContainer>
        </form>
      </style.ContentsContainer>
    </style.reviewWriteContainer>
  );
}
