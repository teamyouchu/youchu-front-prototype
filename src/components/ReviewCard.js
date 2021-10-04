import './ReviewCard.css';

export default function ReviewCard({
  category,
  channelName,
  subscriberCount,
  reviewCount,
  rating,
  bestReview,
}) {
  return (
    <div className="review-card-container">
      <img
        className="yt_img"
        src={require('./월간윤종신.jpg').default}
        alt={channelName}
        title={channelName}
      />
      <div className="review-card-info">
        <div className="info-group">
          <div className="category">{category}</div>
        </div>
        <div className="info-group">
          <div className="channelName">{channelName}</div>
          <div className="subscriberCount">구독자 {subscriberCount} 명</div>
        </div>
        <div className="info-group">
          <div className="rating">❤❤❤❤❤ {rating}</div>
          <div className="review-count">({reviewCount}개 리뷰)</div>
        </div>
        <div className="info-group">
          <div className="best-review-title">Best Review</div>
          <div className="best-review">{bestReview}</div>
        </div>
      </div>
    </div>
  );
}
