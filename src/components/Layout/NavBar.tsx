import { useContext, useRef, useState } from 'react';
import Link from 'next/link';
import { UserContext } from '@/lib/context';
import LogoutModal from './LogoutModal';
import { useRouter } from 'next/router';

export default function NavBar() {
  const { pathname } = useRouter();
  const { userObj } = useContext(UserContext);

  // 로그아웃 모달 토글
  const [showLogout, setShowLogout] = useState<boolean>(false);
  const ModalRef = useRef<HTMLDivElement>(null);
  const onAvatarClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <>
      <div className="header_container">
        <div className="header_box">
          <Link href="/" style={{ height: '40px' }}>
            <img src={'images/YouChu_logo.png'} className="logo_img" />
          </Link>
          {!userObj.isLogin ? (
            pathname !== '/login' && (
              // 유저가 로그인 하지 않았을 때
              <Link
                href={{
                  pathname: '/login',
                  query: {
                    from: 'header',
                  },
                }}
                as={`/login`}
              >
                <div className="login_button">로그인</div>
              </Link>
            )
          ) : (
            // 유저가 로그인 했을 때
            <div className="avatar_img_box" ref={ModalRef}>
              <img
                className="avatar_img"
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
          )}
        </div>
      </div>

      <style jsx>{`
        .header_container {
          width: 100%;
          z-index: 90;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
        }

        .header_box {
          width: 400px;
          height: 82px;
          margin: 0px auto;
          display: flex;
          padding: 24px 24px 18px 24px;
          justify-content: space-between;
          align-items: flex-start;
        }

        .logo_img {
          width: 62px;
          height: 40px;
        }

        .login_button {
          width: 60px;
          height: 30px;
          background: #ffffff 0% 0% no-repeat padding-box;
          border: 1px solid #dedede;
          display: flex;
          align-items: center;
          justify-content: center;

          font-family: 'SHSN-M';
          text-align: center;
          font-size: 13px;
          line-height: 17px;
          letter-spacing: 0px;
          color: #000000;
        }
        .login_button:hover {
          background-color: #ebebeb;
        }

        .avatar_img_box {
          height: 30px;
          position: relative;
          z-index: 90;
        }
        .avatar_img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #dedede;
          cursor: pointer;
        }

        @media (max-width: 400px) {
          .header_box {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
