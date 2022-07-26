import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as style from './MyInfoStyle';
import signupAPI from 'lib/api/signupAPI';
import userAPI from 'lib/api/userAPI';
import MyNickname from 'components/myNickname/MyNickname';
import MyCategory from 'components/myCategory/MyCategory';
import { UserContext } from 'lib/UserContext';

export default function MyInfo({
  title,
  titleFont,
  showNickname,
  showCategory,
  buttonMsg,
  from,
}) {
  const [nickName, setNickName] = useState('');
  const [isNickNameNull, setIsNickNameNull] = useState(false);
  const [isNickNameLen, setIsNickNameLen] = useState(false);
  const [isNickNameDup, setIsNickNameDup] = useState(false);
  const [isNotNickNameDup, setIsNotNickNameDup] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const { setUserObj } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    userAPI
      .getMe()
      .then((res) => {
        setNickName(res.data.nickname);
        setCategoryList(res.data.favoriteCategory);
      })
      .catch((err) => {
        console.error(err);
      });
    return () => {
      userAPI
        .getMe()
        .then(({ data }) => {
          setUserObj({
            email: data.email,
            favoriteCategory: data.favoriteCategory,
            hasReview: data.hasReview,
            imageUrl: data.imageUrl,
            nickname: data.nickname,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    };
  }, [setUserObj]);

  //회원가입 함수
  const onSignupClick = async () => {
    setIsNickNameNull(nickName === '');
    if (!isNickNameNull && !isNickNameLen && !isNickNameDup) {
      await signupAPI
        .postSignup({
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
    setIsNickNameNull(nickName === '');
    if (!isNickNameNull && !isNickNameLen && !isNickNameDup) {
      await userAPI
        .putNickname({
          nickname: nickName,
        })
        .then(() => {
          history.go(-1);
        })
        .catch((err) => console.error(err));
    }
  };

  // 선호 카테고리 변경 함수
  const onCategoryClick = async () => {
    await userAPI
      .putCategory({
        favoriteCategory: categoryList,
      })
      .then(() => {
        history.go(-1);
      })
      .catch((err) => {
        console.error(err);
      });
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
          />
        )}
        {showCategory && (
          <MyCategory
            categoryList={categoryList}
            setCategoryList={setCategoryList}
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
