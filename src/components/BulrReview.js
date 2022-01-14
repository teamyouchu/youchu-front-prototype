import React from 'react';
import { useHistory } from 'react-router';
import * as style from './styles/BulrReviewStyle';

export default function BulrReview() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/youtubers/reviewWrite');
  };
  return (
    <style.ConfirmReviewContainer>
      <style.Span font={'SHSN-B'} size={'20px'}>
        유튜버 리뷰를 작성하고 전체 리뷰를 확인하세요!
      </style.Span>
      <style.ReviewButton onClick={handleClick}>
        <style.Span color="#fff" font="SHSN-B" size="14px">
          유튜버 리뷰하기
        </style.Span>
      </style.ReviewButton>
    </style.ConfirmReviewContainer>
  );
}
