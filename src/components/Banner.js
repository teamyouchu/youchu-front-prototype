import React from 'react';
import * as style from './styles/BannerStyle';
// import BannerImg from '/images/banner.png';

export default function Banner() {
  return (
    <>
      <style.Container>
        <style.TextField>
          여러분들만 아는 <br />
          <style.RedSpan>유튜버</style.RedSpan>들을 리뷰해봐요
        </style.TextField>
        <style.BannerImg src={process.env.PUBLIC_URL + '/images/banner.png'}></style.BannerImg>
      </style.Container>
    </>
  );
}
