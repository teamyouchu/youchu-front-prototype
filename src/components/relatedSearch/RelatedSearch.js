import * as style from './RelatedSearchStyle.js';

export default function RelatedSearch({ setIsSearch }) {
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
    <style.SearchDropdownContainer>
      <style.RelatedSearch>연관 검색어</style.RelatedSearch>
      {/* {searchResults.map((data) => (
        <style.SearchResult
          to={`/youtubers/review/id=${data.id}`}
          key={data.id}
          onClick={() => {
            setIsSearch(false);
          }}
        >
          {data.name}
        </style.SearchResult>
      ))} */}
    </style.SearchDropdownContainer>
  );
}
