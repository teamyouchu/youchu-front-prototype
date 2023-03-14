import { useContext, useEffect } from 'react';
import { UserContext } from '@/lib/context';
import { deleteCookie } from '@/lib/cookies';

interface IProps {
  setShowLogout: React.Dispatch<React.SetStateAction<boolean>>;
  ModalRef: React.RefObject<HTMLDivElement>;
}

export default function LogoutModal({ setShowLogout, ModalRef }: IProps) {
  const { setUserObj } = useContext(UserContext);

  // 모달 외 영역 클릭 시 종료
  useEffect(() => {
    const handleCloseModal = (e: MouseEvent) => {
      if (
        !ModalRef.current ||
        !ModalRef.current.contains(e.target as HTMLDivElement)
      ) {
        setShowLogout(false);
      }
    };
    window.addEventListener('click', handleCloseModal);
    return () => {
      window.removeEventListener('click', handleCloseModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 로그아웃 함수
  const onLogoutClick = () => {
    setShowLogout(false);
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    setUserObj({
      isLogin: false,
      data: {
        id: 0,
        nickname: '',
        reviewCount: 0,
      },
    });
  };
  return (
    <>
      <div className="logout_modal">
        <button className="my_info_btn logout_btn" onClick={onLogoutClick}>
          로그아웃
        </button>
      </div>

      <style jsx>{`
        .logout_modal {
          width: 192px;
          background: #ffffff 0% 0% no-repeat padding-box;
          box-shadow: 0px 0px 15px #00000029;
          opacity: 1;
          position: absolute;
          right: 0px;
        }

        .my_info_btn {
          border: 0;
          background-color: transparent;
          width: 100%;
          padding: 16px;
          text-align: left;
          font-family: 'SHSN-B';
          font-size: 16px;
          line-height: 21px;
          letter-spacing: 0px;
          color: #000000;
          opacity: 1;
          cursor: pointer;
        }
        .my_info_btn:hover {
          color: #000000;
          background-color: #f9f9f9;
        }

        .logout_btn {
          color: #94969b;
        }
        .logout_btn:hover {
          color: #94969b;
        }
      `}</style>
    </>
  );
}
