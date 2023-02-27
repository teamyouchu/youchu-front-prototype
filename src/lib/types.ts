export interface IEvalYoutubers {
  count: number;
  list: { youtuberId: string; rating: number }[];
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
