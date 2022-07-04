import * as style from './styles/MyInfoStyle';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import signupAPI from 'api/signupAPI';
import userAPI from 'api/userAPI';
import MyNickname from './MyNickname';
import MyCategory from './MyCategory';

export default function MyInfo({title, titleFont, nowNickname, showNickname, showCategory, buttonMsg}) {
    const [nickName, setNickName] = useState('');
    const [isNickNameNull, setIsNickNameNull] = useState(false);
    const [isNickNameLen, setIsNickNameLen] = useState(false);
    const [isNickNameDup, setIsNickNameDup] = useState(false);
    const [isNotNickNameDup, setIsNotNickNameDup] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    
    useEffect(()=> {
      userAPI
        .getMe()
        .then((res) => {
          setNickName(res.data.nickname);
          setCategoryList(res.data.favoriteCategory);
        })
        .catch((err) => {
          console.error(err);
        })
    },[]);

    const history = useHistory();
    const onSignupClick = async () => {
      setIsNickNameNull(nickName === "");
      if (!isNickNameNull && !isNickNameLen && !isNickNameDup) {
        await signupAPI
        .postSignup({
          nickname: nickName,
          favoriteCategories: categoryList,
        })
        .then(() => {
          history.go(-2);
        })
        .catch((err) => console.error(err));
      }
    };

    const onNicknameClick = async() => {
      setIsNickNameNull(nickName === "");
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

    const onCategoryClick = async() => {
      console.log(categoryList);
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
          {showNickname && showCategory && <style.SubTitle>유튜버 관심 카테고리 선택 (1개 이상)</style.SubTitle>}
          {showCategory && (
            <MyCategory 
              categoryList={categoryList}
              setCategoryList={setCategoryList}
            />
          )}
          <style.SetBtn onClick={
            showNickname === true && showCategory === true ? 
            onSignupClick : 
              showNickname === true && showCategory === false ?
              onNicknameClick :
                showNickname === false && showCategory === true ?
                onCategoryClick : null }>
            {buttonMsg}
          </style.SetBtn>
        </style.MyInfoBox>
      </style.MyInfoContainer>
    );
};