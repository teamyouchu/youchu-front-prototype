import * as style from './style';
import { useEffect, useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import userAPI from 'lib/api/userAPI';
import { categoryArray } from 'lib/modules';
import MyReview from 'components/myReview/MyReview';
import Logout from 'components/logout/Logout';

export default function Profile() {
  const { userObj, setUserObj } = useContext(UserContext);
  useEffect(() => {
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
  }, [setUserObj]);
  return (
    <style.ProfileContainer>
      <style.ProfileTitle>내 정보</style.ProfileTitle>
      <style.ProfileBox>
        <style.PicBox>
          <style.UserPic src={userObj.imageUrl} />
          <style.UserName>{userObj.nickname}</style.UserName>
          <style.UserEmail>{userObj.email}</style.UserEmail>
          <style.ModifyBtn to="/modifyNickName">프로필 수정</style.ModifyBtn>
          <style.CategoryBtn to="/modifyCategory">
            <style.CategoryTitle>관심사</style.CategoryTitle>
            <style.CategorysBox>
              {userObj.favoriteCategory.map((category) => (
                <style.Categorycontents key={category}>
                  {categoryArray.find((x) => x.id === category).value},&nbsp;
                </style.Categorycontents>
              ))}
            </style.CategorysBox>
            <style.ChevronIcon>
              <i className="fas fa-chevron-right"></i>
            </style.ChevronIcon>
          </style.CategoryBtn>
          <Logout />
        </style.PicBox>
        <MyReview />
      </style.ProfileBox>
    </style.ProfileContainer>
  );
}
