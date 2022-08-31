import * as style from './ContentsOverflowStyle';
import { useState, useEffect, useRef } from 'react';

export default function ContentsOverflow({ contents }) {
  const contentRef = useRef();
  const [overflow, setOverflow] = useState(false);
  const [showMore, setShowMore] = useState(true);
  useEffect(() => {
    if (contentRef.current?.clientHeight > 138) {
      setOverflow(true);
      setShowMore(false);
    }
  }, [contents]);
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
          {showMore ? '간략히 보기' : '자세히 보기'}
        </style.ViewMore>
      )}
    </>
  );
}
