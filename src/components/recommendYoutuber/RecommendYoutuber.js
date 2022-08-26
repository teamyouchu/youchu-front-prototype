import * as style from './recommendYoutuberStyle';
import RecommendCard from 'components/recommendCard/RecommendCard';
import { categoryArray } from 'lib/modules';

export default function RecommendYoutuber({ category }) {
  return (
    <style.RecommendContainer>
      <style.RecommendBox>
        {category ? (
          <style.RecommendTitle>
            {categoryArray.find((x) => x.id === category).value}
            유튜버
          </style.RecommendTitle>
        ) : (
          <style.RecommendTitle>이번주 인기 유튜버</style.RecommendTitle>
        )}
      </style.RecommendBox>
      {recommendYoutuber.map((data) => (
        <style.RecommendBox>
          <RecommendCard key={data.id} page={'youtuber'} data={data} />
        </style.RecommendBox>
      ))}
    </style.RecommendContainer>
  );
}

const recommendYoutuber = [
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNSaaaaaaaaaaaaaaaㅁㄴㅇㄹㅁㄴㅇaaaㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㄹㅁㄴㅇaaaasdasdfadsfasfds',
    rating: 5.0,
    reviews: 1000,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ2',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 4.9,
    reviews: 998,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ3',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 3.2,
    reviews: 100,
    category: 23,
  },
  {
    id: 'UC5xLohcPE65Y-U62X6snmRQ4',
    imageUrl:
      'https://yt3.ggpht.com/ytc/AKedOLQsvosDKDnUr_pgsdnS_smR9RmjincBJD9lL0vHaw=s88-c-k-c0x00ffffff-no-rj',
    name: '빠더너스 BDNS',
    rating: 5.0,
    reviews: 100,
    category: 23,
  },
];
