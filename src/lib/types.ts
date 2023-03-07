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

export interface IChannel {
  id: string;
  thumbnail: string;
  name: string;
  rating: number;
  reviewCount: number;
}

export interface IChannelList {
  data: IChannel[];
  hasNext: boolean;
}

export interface IReview extends IChannel {
  channelId: number;
}

export interface IReviewList extends IChannelList {
  data: IReview[];
}
