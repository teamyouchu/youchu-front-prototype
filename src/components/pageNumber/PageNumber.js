import React from 'react';
import * as style from './PageNumberStyle';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
export default function PageNumber() {
  const temp = [1, 2, 3, 4, 5];
  const mapToComponent = (temp) => {
    return temp.map((order, i) => {
      return <style.NumberSpan>{`0${order}`}</style.NumberSpan>;
    });
  };
  return (
    <>
      <style.PageContainer>
        <style.LeftButton icon={faChevronLeft} />
        {mapToComponent(temp)}
        <style.RightButton icon={faChevronRight} />
      </style.PageContainer>
    </>
  );
}
