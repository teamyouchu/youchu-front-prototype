import { useContext, useRef, useState } from 'react';
import Link from 'next/link';
import { StateContext, UserContext } from '@/lib/Context';
import LogoutModal from './LogoutModal';

export default function FirstHeader() {
  const { userObj } = useContext(UserContext);
  const { isShowLogin } = useContext(StateContext);

  // 로그아웃 모달 토글
  const [showLogout, setShowLogout] = useState(false);
  const ModalRef = useRef<HTMLDivElement>(null);
  const onAvatarClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      <div className="FirstHeaderContainer">
        <div className="FirstHeaderBox">
          <Link href="/">
            <img src={'images/YouChu_logo.png'} className="LogoImg" />
          </Link>
          {userObj.isLogin ? (
            <div className="GoogleAvatarBox" ref={ModalRef}>
              <img
                className="GoogleAvatar"
                src={'images/DefaultProfile.png'}
                onClick={onAvatarClick}
              />
              {showLogout && (
                <LogoutModal
                  ModalRef={ModalRef}
                  setShowLogout={setShowLogout}
                />
              )}
            </div>
          ) : (
            <Link
              href={{
                pathname: '/login',
                query: {
                  from: 'header',
                },
              }}
              as={`/login`}
            >
              {isShowLogin && <button className="LoginButton">로그인</button>}
            </Link>
          )}
        </div>
      </div>

      <style jsx>{`
        .FirstHeaderContainer {
          width: 100%;
          z-index: 90;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
        }
        .FirstHeaderBox {
          width: 400px;
          height: 82px;
          margin: 0px auto;
          display: flex;
          padding: 24px 24px 18px 24px;
          justify-content: space-between;

          @media (max-width: 400px) {
            width: 100%;
          }
        }
        .LogoImg {
          width: 62px;
          height: 40px;
        }
        .GoogleAvatarBox {
          height: 30px;
          position: relative;
          z-index: 90;
        }
        .GoogleAvatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #dedede;
          cursor: pointer;
        }
        .LoginButton {
          width: 60px;
          height: 30px;
          background: #ffffff 0% 0% no-repeat padding-box;
          border: 1px solid #dedede;

          font-family: 'SHSN-M';
          text-align: center;
          font-size: 13px;
          line-height: 17px;
          letter-spacing: 0px;
          color: #000000;
          :hover {
            background-color: #ebebeb;
          }
        }
      `}</style>
    </>
  );
}
