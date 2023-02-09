import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="not-found_container">
        <div className="not-found_box">
          <div className="emoji_box">
            <div className="emoji" role="img" aria-label="writing hand">
              😭
            </div>
          </div>
          <span className="message">
            잘못된 접근입니다! <br />
          </span>
          <span className="message">
            <Link href="/">홈</Link>으로 가볼까요?
          </span>
        </div>
      </div>

      <style jsx>{`
        .not-found_container {
          position: relative;
          width: 100%;
          height: calc(100vh - 82px - 106px);
          z-index: -1;
        }

        .not-found_box {
          width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .emoji_box {
          width: 96px;
          height: 96px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .emoji {
          font-size: 72px;
        }

        .message {
          font-family: 'SHSN-B';
          text-align: center;
          font-size: 18px;
          line-height: 22px;
          letter-spacing: 0px;
          color: #000000;
          margin: 5px 0;
        }
      `}</style>
    </>
  );
}
