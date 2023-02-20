export interface IEvalYoutubers {
  count: number;
  list: { youtuberId: string; rating: number }[];
}

export interface IYoutuberList {
  id: string;
  thumbnail: string;
  title: string;
  rating: number;
  reviews: number;
  category: number;
}
