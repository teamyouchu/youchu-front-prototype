import * as style from './style';
import { useEffect, useContext } from 'react';
import { UserContext } from 'lib/UserContext';
import userAPI from 'api/userAPI';
import { categoryArray } from 'lib/modules';
import ReviewList from 'components/reviewList/reviewList';

export default function Profile() {
  const { userObj, setUserObj } = useContext(UserContext);
  useEffect(() => {
    userAPI
      .getMe()
      .then(({ data }) => {
        setUserObj({
          ...userObj,
          isLogin: true,
          data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <style.ProfileContainer>
      <style.ProfileTitle>내 정보</style.ProfileTitle>
      {userObj.isLogin && (
        <style.ProfileBox>
          <style.PicBox>
            <style.flexBox>
              <style.UserPic
                src={require('assets/images/DefaultProfile.png').default}
              />
              <style.ModifyBtn to="/modifyNickName">
                <style.UserName>{userObj.data.nickname}</style.UserName>
                <style.UserEmail>{userObj.data.email}</style.UserEmail>
              </style.ModifyBtn>
            </style.flexBox>
            <style.flexBox>
              <style.CategoryBtn to="/modifyCategory">
                <style.CategoryTitle>관심사</style.CategoryTitle>
                <style.CategorysBox>
                  {userObj.data.favoriteCategory.map((category) => (
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
      )}
    </style.ProfileContainer>
  );
}
