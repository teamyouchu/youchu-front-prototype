import { createContext } from 'react';
import { IUser, IRatedReviews } from './types';

interface IUserContext {
  userObj: IUser;
  setUserObj: React.Dispatch<React.SetStateAction<IUser>>;
}

const UserContextState: IUserContext = {
  userObj: {
    isLogin: false,
    data: {
      id: 0,
      nickname: '',
      reviewCount: 0,
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserObj: () => {},
};

export const UserContext = createContext(UserContextState);

interface IRatedReviewsContext {
  ratedReviews: IRatedReviews;
  setRatedReviews: React.Dispatch<React.SetStateAction<IRatedReviews>>;
}

const RatedReviewsContextState: IRatedReviewsContext = {
  ratedReviews: { count: 0, reviews: [] },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setRatedReviews: () => {},
};

export const RatedReviewsContext = createContext(RatedReviewsContextState);

// interface IStateContext {
//   isShowHeader: boolean;
//   setIsShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
//   isSearchShow: boolean;
//   setIsSearchShow: React.Dispatch<React.SetStateAction<boolean>>;
//   isShowRegisterBtn: boolean;
//   setIsShowRegisterBtn: React.Dispatch<React.SetStateAction<boolean>>;
//   isShowLogin: boolean;
//   setIsShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
//   registOpen: boolean;
//   setRistOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const StateContextState: IStateContext = {
//   isShowHeader: true,
//   setIsShowHeader: () => {},
//   isSearchShow: true,
//   setIsSearchShow: () => {},
//   isShowRegisterBtn: true,
//   setIsShowRegisterBtn: () => {},
//   isShowLogin: true,
//   setIsShowLogin: () => {},
//   registOpen: false,
//   setRistOpen: () => {},
// };

// export const StateContext = createContext(StateContextState);
