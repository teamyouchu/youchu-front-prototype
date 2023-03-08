export default function Footer() {
  return (
    <>
      <footer className="footer_container">
        <div className="footer_box">
          <ul className="footer_ul">
            <li className="link_li">
              {/* TODO 서지수 서비스 소개 url 수정 */}
              <a className="footer_span" href="/asdfas">
                서비스 소개
              </a>
            </li>
            <li className="link_li">
              <a
                className="footer_span"
                href={`https://dandelion-clavicle-1cc.notion.site/4229b193bbff42bd91b7b427b866b3fe`}
                target="_blank"
                rel="noreferrer"
              >
                이용약관
              </a>
            </li>
            <li className="link_li">
              <a
                className="footer_span"
                href={`https://dandelion-clavicle-1cc.notion.site/22bd6a30bb144decb27e5e60dff805d8`}
                target="_blank"
                rel="noreferrer"
              >
                개인정보 처리방침
              </a>
            </li>
          </ul>

          <div className="footer_ul">
            <span className="footer_span mail_title">
              문의&nbsp;:&nbsp;
              <span className="footer_span mail">youchukmu@gmail.com</span>
            </span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer_container {
          width: 100%;
          height: 106px;
          display: table;
          border-top: 1px solid #dedede;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          position: absolute;
          bottom: 0px;
        }

        .footer_box {
          height: 100%;
          width: 400px;
          margin: 0px auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 0 24px;
        }

        .footer_ul {
          display: flex;
          align-items: center;
          margin: 20px 0;
        }
        .footer_ul:first-child {
          margin-bottom: 10px;
        }
        .footer_ul:last-child {
          margin-top: 10px;
          margin-bottom: 30px;
        }

        .link_li {
          list-style: none;
          padding: 0 15px;
          border-right: 1px solid #dedede;
          height: 18px;
        }
        .link_li:first-child {
          padding-left: 0;
        }
        .link_li:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .footer_span {
          font-family: 'SHSN-M';
          text-align: left;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0px;
          color: #94969b;
        }
        .footer_span:hover {
          color: #94969b;
          text-decoration: underline;
        }

        .mail {
          font-family: 'SHSN-L';
        }

        @media (max-width: 400px) {
          .footer_box {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
