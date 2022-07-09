import * as style from './styles/MyCategoryStyle';

export default function MyCategory({categoryList, setCategoryList}) {  
    const onClick = (e) => {
      const isIncludes = categoryList.find((el) => el === parseInt(e.target.value));
      if (isIncludes) {
        // 삭제
        setCategoryList(categoryList.filter((el) => el !== parseInt(e.target.value)));
      } else {
        // 추가
        setCategoryList(preList => [...preList, parseInt(e.target.value)]);
      }
    };
  
    return (
      <>
        <style.SubTitle>유튜버 관심 카테고리 선택 (1개 이상)</style.SubTitle>
        <style.CategoryContainer>
          {categoryArray.map(category => (
            <style.CategoryBox 
              key={category.id} 
              value={category.id} 
              onClick={onClick} 
              active={categoryList.find((el) => el === category.id)}
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
      "id": 10,
      "value": "음악",
    },
    {
      "id": 15,
      "value": "애완동물/동물",
    },
    {
      "id": 17,
      "value": "스포츠",
    },
    {
      "id": 19,
      "value": "여행/이벤트",
    },
    {
      "id": 20,
      "value": "게임",
    },
    {
      "id": 22,
      "value": "인물/블로그",
    },
    {
      "id": 23,
      "value": "코미디",
    },
    {
      "id": 24,
      "value": "엔터테인먼트",
    },
    {
      "id": 25,
      "value": "뉴스/정치",
    },
    {
      "id": 26,
      "value": "노하우/스타일",
    },
    {
      "id": 27,
      "value": "교육",
    },
    {
      "id": 28,
      "value": "과학기술",
    },
    {
      "id": 29,
      "value": "비영리/사회운동",
    },
  ]