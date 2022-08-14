import * as style from './RelatedSearchStyle.js';
import { numToKorean } from 'lib/numberFomat.js';
import { Link } from 'react-router-dom';

export default function RelatedSearch({
  youtuberList,
  setChannel,
  setSearchValue,
  setIsSearch,
}) {
  // const [searchResults, setSearchResults] = useState([]);
  // useEffect(() => {
  //   const getSearchResult = async () => {
  //     await listAPI
  //       .getYoutuber(searchValue, 90, 5)
  //       .then((res) => {
  //         setSearchResults(res.data.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  //   getSearchResult();
  // }, [searchValue]);

  return (
    <style.SearchDropdownContainer youtuberList={youtuberList}>
      {!youtuberList && <style.RelatedSearch>연관 검색어</style.RelatedSearch>}
      {!youtuberList &&
        searchResults.map((data) => (
          <style.SearchResultBox
            as={Link}
            to={`/youtubers/review/${data.id}`}
            key={data.id}
            onClick={() => {
              setSearchValue('');
              setIsSearch(false);
            }}
          >
            <style.SearchResultImg src={data.thumbnail} alt={data.name} />
            <style.SearchResultName>{data.title}</style.SearchResultName>
            <style.SearchResultSubscribers>
              구독자 {numToKorean(data.subscribe)}명
            </style.SearchResultSubscribers>
          </style.SearchResultBox>
        ))}
      {youtuberList &&
        youtuberList.map((data) => (
          <style.SearchResultBox
            key={data.id}
            onClick={() => {
              setSearchValue(data.title);
              setIsSearch(false);
              setChannel({ channel_id: data.id, isExist: data.isExist });
            }}
          >
            <style.SearchResultImg src={data.thumbnail} alt={data.name} />
            <style.SearchResultName>{data.title}</style.SearchResultName>
            <style.SearchResultSubscribers>
              구독자 {numToKorean(data.subscribe)}명
            </style.SearchResultSubscribers>
          </style.SearchResultBox>
        ))}
    </style.SearchDropdownContainer>
  );
}

const searchResults = [
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS빠더너스 BDNS빠더너스 BDNS',
    subscribe: 1234,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ2',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS',
    subscribe: 12345,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ3',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS',
    subscribe: 123456,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ4',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS빠더너스 BDNS빠더너스 BDNS',
    subscribe: 1234567,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ5',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    title: '빠더너스 BDNS',
    subscribe: 12345678,
  },
];
