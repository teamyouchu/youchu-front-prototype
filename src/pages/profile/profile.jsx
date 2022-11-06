import * as style from './style';
import { useEffect, useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import userAPI from 'lib/api/userAPI';
import { categoryArray } from 'lib/modules';
import ReviewList from 'components/reviewList/reviewList';

export default function Profile() {
  const { userObj, setUserObj } = useContext(UserContext);
  useEffect(() => {
    userAPI
      .getMe()
      .then(({ data }) => {
        setUserObj({
          id: data.id,
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
          <style.flexBox>
            <style.UserPic
              src={require('assets/images/DefaultProfile.png').default}
            />
            <style.ModifyBtn to="/modifyNickName">
              <style.UserName>{userObj.nickname}</style.UserName>
              <style.UserEmail>{userObj.email}</style.UserEmail>
            </style.ModifyBtn>
          </style.flexBox>
          <style.flexBox>
            <style.CategoryBtn to="/modifyCategory">
              <style.CategoryTitle>관심사</style.CategoryTitle>
              <style.CategorysBox>
                {userObj.favoriteCategory.map((category) => (
                  <style.Categorycontents key={category}>
                    {categoryArray.find((x) => x.id === category).value}
                  </style.Categorycontents>
                ))}
              </style.CategorysBox>
              <style.ChevronIcon>&gt;</style.ChevronIcon>
            </style.CategoryBtn>
          </style.flexBox>
        </style.PicBox>
        <ReviewList from={'myInfo'} />
      </style.ProfileBox>
    </style.ProfileContainer>
  );
}
