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
  channelId?: number;
  thumbnail: string;
  name: string;
  rating: number;
  reviewCount: number;
}

export interface IChannelList {
  data: IChannel[];
  hasNext: boolean;
}
