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

const searchResults_Temp = [
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS 1',
    subscribe: 1234,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ2',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS 2',
    subscribe: 12345,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ3',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS 3',
    subscribe: 123456,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ4',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS 4',
    subscribe: 1234567,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ5',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS빠더너스 BDNS빠더너스 BDNS',
    subscribe: 12345678,
  },
];
