import * as style from './RelatedSearchStyle.js';
import { numToKorean } from 'lib/numberFomat.js';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function RelatedSearch({
  page,
  searchResults,
  setSearchValue,
  setAutoSearchValue,
  setIsRelatedSearch,
  setChannel,
  autoRef,
  index,
  setIndex,
  setKeyIndex,
}) {
  useEffect(() => {
    return () => {
      setIndex(-1);
      setKeyIndex(-1);
    };
  }, [setIndex, setKeyIndex]);
  return (
    <style.SearchDropdownContainer page={page}>
      {page === 'header' && (
        <style.RelatedSearch>연관 검색어</style.RelatedSearch>
      )}
      <div ref={autoRef}>
        {!(page === 'registration') &&
          // TODO 서지수 api 완성 시 Temp 제거
          searchResults_Temp.map((data, idx) => (
            <style.SearchResultBox
              key={data.id}
              className={index === idx ? 'item_over' : null}
              page={page}
              as={Link}
              to={`/youtubers/review/${data.id}`}
              onClick={() => {
                setSearchValue('');
                setAutoSearchValue(null);
                setIsRelatedSearch(false);
              }}
              onMouseOver={() => {
                setIndex(idx);
              }}
            >
              <style.SearchResultImg src={data.thumbnail} alt={data.name} />
              <style.SearchResultName>{data.title}</style.SearchResultName>
              <style.SearchResultSubscribers>
                구독자 {numToKorean(data.subscribe)}명
              </style.SearchResultSubscribers>
            </style.SearchResultBox>
          ))}
        {page === 'registration' &&
          searchResults.map((data, idx) => (
            <style.SearchResultBox
              key={data.id}
              className={index === idx ? 'item_over' : null}
              onClick={() => {
                setSearchValue(data.title);
                setAutoSearchValue(data.title);
                setIsRelatedSearch(false);
                setChannel({ channel_id: data.id, isExist: data.isExist });
              }}
              onMouseOver={() => {
                setIndex(idx);
              }}
            >
              <style.SearchResultImg src={data.thumbnail} alt={data.name} />
              <style.SearchResultName>{data.title}</style.SearchResultName>
              <style.SearchResultSubscribers>
                구독자 {numToKorean(data.subscribe)}명
              </style.SearchResultSubscribers>
            </style.SearchResultBox>
          ))}
      </div>
    </style.SearchDropdownContainer>
  );
}
