import signupAPI from 'api/signupAPI';
import { useState } from 'react';
import * as style from './style';

export default function Signup() {
  const [nickName, setNickName] = useState('');
  const [isNickNameNull, setIsNickNameNull] = useState(false);
  const [isNickNameLen, setIsNickNameLen] = useState(false);
  const [isNickNameDup, setIsNickNameDup] = useState(false);
  const [isNotNickNameDup, setIsNotNickNameDup] = useState(false);
  const onNickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const onNickNameBlur = () => {
    setIsNickNameNull(nickName === "");
    setIsNickNameLen(nickName.length !== 0 && nickName.length < 2);
    if (nickName.length >= 2) {
      nickNameDuplicate(nickName);
    } else {
      setIsNickNameDup(false);
      setIsNotNickNameDup(false);
    }
  };

  const nickNameDuplicate = async (nickName) => {
    await signupAPI
      .postNickNameDup({
          "nickName": nickName,
        })
      .then((res) => {
        console.log(res);
        setIsNickNameDup(!res.data.data);
        setIsNotNickNameDup(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const [categoryList, setCategoryList] = useState([]);

  const onClick = (e) => {
    const isIncludes = categoryList.find((el) => el === e.target.value);
    if (isIncludes) {
      setCategoryList(categoryList.filter((el) => el !== e.target.value));
    } else {
      setCategoryList(preList => [...preList, e.target.value]);
    }
  }
  return (
    <style.SignupContainer>
      <style.SignupBox>
        <style.Title>기본 프로필을 작성해봐요!</style.Title>
        <style.Label>닉네임</style.Label>
        <style.NicknameInput />
        <style.NickNameContainer>
          <style.Label>닉네임</style.Label>
          <style.NicknameInput 
            type="text"
            placeholder='유추에서 사용 할 닉네임을 입력해주세요'
            required
            autoFocus
            value={nickName}
            minLength="2"
            maxLength="15"
            onChange={onNickNameChange}
            onBlur={onNickNameBlur}
          />
        </style.NickNameContainer>
        <style.SubTitle>유튜버 관심 카테고리 선택 (1개 이상)</style.SubTitle>
        <style.CategoryContainer>
          {categoryArray.map(category => (
            <style.CategoryBox key={category.id} value={category.value} onClick={onClick} active={categoryList.find((el) => el === category.value)}>
              {category.value}
            </style.CategoryBox>
          ))}
        </style.CategoryContainer>
        <style.SetBtn type="submit">완료</style.SetBtn>
      </style.SignupBox>
    </style.SignupContainer>
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