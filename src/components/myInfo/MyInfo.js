import * as style from './MyInfoStyle';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import userAPI from 'api/userAPI';
import authAPI from 'api/authAPI';
import MyNickname from './myNickname/MyNickname';
import MyCategory from './myCategory/MyCategory';
import { UserContext } from 'lib/UserContext';

export default function MyInfo({
  title,
  titleFont,
  showNickname,
  showCategory,
  buttonMsg,
  from,
}) {
  const history = useHistory();
  const { userObj, setUserObj } = useContext(UserContext);

  const [nickName, setNickName] = useState('');
  const [isNickNameNull, setIsNickNameNull] = useState(false);
  const [isNickNameLen, setIsNickNameLen] = useState(false);
  const [isNickNameDup, setIsNickNameDup] = useState(false);
  const [isNotNickNameDup, setIsNotNickNameDup] = useState(false);
  const [isValidNickname, setIsValidNickname] = useState(false);

  const [categoryList, setCategoryList] = useState([]);
  const [isCategoryLen, setIsCategoryLen] = useState(false);

  useEffect(() => {
    setNickName(userObj.data.nickname);
    setCategoryList(userObj.data.favoriteCategory);
  }, [userObj]);

  //회원가입 함수
  const onSignupClick = async () => {
    setIsNickNameNull(nickName === '');
    setIsCategoryLen(categoryList.length < 1);
    if (
      !isNickNameNull &&
      !isNickNameLen &&
      !isNickNameDup &&
      categoryList.length >= 1
    ) {
      await authAPI
        .putSignup({
          nickname: nickName,
          favoriteCategories: categoryList,
        })
        .then(() => {
          if (from === 'button') {
            history.go(-2);
          } else {
            history.push(`${from.pathname}`);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  // 닉네임 변경 함수
  const onNicknameClick = async () => {
    if (userObj.data.nickname === nickName) {
      history.go(-1);
    } else {
      setIsNickNameNull(nickName === '');
      if (
        !isNickNameNull &&
        !isNickNameLen &&
        !isNickNameDup &&
        !isValidNickname
      ) {
        await userAPI
          .putNickname({
            nickname: nickName,
          })
          .then(() => {
            setUserObj({
              ...userObj,
              data: {
                ...userObj.data,
                nickname: nickName,
              },
            });
            history.go(-1);
          })
          .catch((err) => console.error(err));
      }
    }
  };

  // 선호 카테고리 변경 함수
  const onCategoryClick = async () => {
    setIsCategoryLen(categoryList.length < 1);
    if (categoryList.length >= 1) {
      await userAPI
        .putCategory({
          favoriteCategory: categoryList,
        })
        .then(() => {
          setUserObj({
            ...userObj,
            data: {
              ...userObj.data,
              favoriteCategory: categoryList,
            },
          });
          history.go(-1);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <style.MyInfoContainer>
      <style.MyInfoBox>
        <style.Title titleFont={titleFont}>{title}</style.Title>
        {showNickname && (
          <MyNickname
            nickName={nickName}
            setNickName={setNickName}
            isNickNameNull={isNickNameNull}
            setIsNickNameNull={setIsNickNameNull}
            isNickNameLen={isNickNameLen}
            setIsNickNameLen={setIsNickNameLen}
            isNickNameDup={isNickNameDup}
            setIsNickNameDup={setIsNickNameDup}
            isNotNickNameDup={isNotNickNameDup}
            setIsNotNickNameDup={setIsNotNickNameDup}
            isValidNickname={isValidNickname}
            setIsValidNickname={setIsValidNickname}
          />
        )}
        {showCategory && (
          <MyCategory
            categoryList={categoryList}
            setCategoryList={setCategoryList}
            isCategoryLen={isCategoryLen}
            setIsCategoryLen={setIsCategoryLen}
          />
        )}
        <style.SetBtn
          onClick={
            showNickname === true && showCategory === true
              ? onSignupClick
              : showNickname === true && showCategory === false
              ? onNicknameClick
              : showNickname === false && showCategory === true
              ? onCategoryClick
              : null
          }
        >
          {buttonMsg}
        </style.SetBtn>
      </style.MyInfoBox>
    </style.MyInfoContainer>
  );
}
