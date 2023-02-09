interface IProps {
  rating: number;
}

export default function StarRating({ rating }: IProps) {
  const perRatings = rating * 20;
  return (
    <>
      <div className="star_container">
        <div className="star_base">★★★★★</div>
        <div className="star_fill">★★★★★</div>
      </div>

      <style jsx>{`
        .star_container {
          position: relative;
          overflow: hidden;
          font-family: 'SHSN-R';
          font-size: 16px;
          line-height: 18px;
        }

        .star_base {
          color: #d8d8d8;
          z-index: 0;
        }

        .star_fill {
          color: #f8d26a;
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          width: ${perRatings + '%'};
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
