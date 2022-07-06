import * as style from './styles/MyCategoryStyle';

export default function MyCategory({categoryList, setCategoryList}) {  
    const onClick = (e) => {
      const isIncludes = categoryList.find((el) => el === e.target.value);
      if (isIncludes) {
        setCategoryList(categoryList.filter((el) => el !== e.target.value));
      } else {
        setCategoryList(preList => [...preList, e.target.value]);
      }
    };
  
    return (
      <>
        <style.SubTitle>유튜버 관심 카테고리 선택 (1개 이상)</style.SubTitle>
        <style.CategoryContainer>
          {categoryArray.map(category => (
            <style.CategoryBox 
              key={category.id} 
              value={category.value} 
              onClick={onClick} 
              active={categoryList.find((el) => el === category.value)}
            >
              {category.value}
            </style.CategoryBox>
          ))}
        </style.CategoryContainer>
      </>
    );
}

const categoryArray = [
    {
      "id": 1,
      "value": "영화/애니메이션"
    },
    {
      "id": 2,
      "value": "자동차/교통",
    },
    {
      "id": 3,
      "value": "음악",
    },
    {
      "id": 4,
      "value": "애완동물/동물",
    },
    {
      "id": 5,
      "value": "스포츠",
    },
    {
      "id": 6,
      "value": "여행/이벤트",
    },
    {
      "id": 7,
      "value": "게임",
    },
    {
      "id": 8,
      "value": "인물/블로그",
    },
    {
      "id": 9,
      "value": "코미디",
    },
    {
      "id": 10,
      "value": "엔터테인먼트",
    },
    {
      "id": 11,
      "value": "뉴스/정치",
    },
    {
      "id": 12,
      "value": "노하우/스타일",
    },
    {
      "id": 13,
      "value": "교육",
    },
    {
      "id": 14,
      "value": "과학기술",
    },
    {
      "id": 15,
      "value": "비영리/사회운동",
    },
  ]