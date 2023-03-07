export interface IUser {
  isLogin: boolean;
  data: {
    id: number;
    nickname: string;
    reviewCount: number;
  };
}

export interface IReviews {
  channelId: string;
  comment: string;
  rating: number;
}

export interface IRatedReviews {
  count: number;
  reviews: IReviews[];
}

export interface IYoutuber {
  id: string;
  thumbnail: string;
  name: string;
  rating: number;
  reviewCount: number;
}

export interface IYoutuberList {
  data: IYoutuber[];
  hasNext: boolean;
}

export interface IReview extends IYoutuber {
  channelId: number;
}

export interface IReviewList extends IYoutuberList {
  data: IReview[];
}
