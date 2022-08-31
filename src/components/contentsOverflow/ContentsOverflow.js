import * as style from './ContentsOverflowStyle';
import { useState, useEffect, useRef } from 'react';

export default function ContentsOverflow({ contents }) {
  const contentRef = useRef();
  const [height, setHeight] = useState(0);
  const [overflow, setOverflow] = useState(false);
  const [showMore, setShowMore] = useState(false);
  //   useEffect(() => {
  //     setHeight(contentRef.current?.clientHeight);
  //     if (height > 138) {
  //       console.log(contentRef.current, height);
  //       setShowMoreBtn(true);
  //       setShowMore(true);
  //     }
  //     return(() => {

  //     })
  //   }, [height, contents]);
  useEffect(() => {
    setHeight(contentRef.current?.clientHeight);
  }, [contents]);
  useEffect(() => {
    console.log(contentRef.current, height);
    if (height > 138) {
      setOverflow(true);
    }
  }, [height]);
  return (
    <>
      <style.Contents ref={contentRef} className={showMore ? '' : 'hidden'}>
        {contents}
      </style.Contents>
      {overflow && (
        <style.ViewMore
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? '자세히 보기' : '간략히 보기'}
        </style.ViewMore>
      )}
    </>
  );
}
