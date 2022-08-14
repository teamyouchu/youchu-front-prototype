import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from 'react';
import searchAPI from 'lib/api/searchAPI';
import youtuberAPI from 'lib/api/youtuberAPI';
import * as style from './RegistrationStyle';
import { throttle } from 'lodash';
import RelatedSearch from 'components/relatedSearch/RelatedSearch';

export default function Registration({ registClose }) {
  // 모달 영역 외 클릭 시 닫기
  const closeRef = useRef([]);
  const closeModal = ({ target }) => {
    let className = target.getAttribute('class');
    if (className == null) {
      className = [];
    }
    if (className.includes('close-modal__container')) {
      closeRef.current.click();
    }
  };

  // esc 키 누르면 모달 종료
  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        registClose();
      }
    },
    [registClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction);
    return () => {
      document.removeEventListener('keydown', escFunction);
    };
  }, [escFunction]);

  // 유튜브에 유튜버 검색 api
  const [youtuberList, setYoutuberList] = useState([]);
  const searchYoutuber = async (value) => {
    await searchAPI
      .youtuberSearchFromGoogle(value, 5)
      .then((res) => {
        setYoutuberList(res.data.channels);
      })
      .catch((err) => console.log(err));
  };

  //TODO 서지수 임시로 작성한 듯 삭제하기
  const throttled = useMemo(
    () =>
      throttle((value) => {
        searchYoutuber(value);
      }, 5000),
    [],
  );

  // 검색어
  const [searchValue, setSearchValue] = useState('');
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      // 검색어가 있으면 연관검색어 표시, 유튜버 검색 api 요청
      setIsSearch(true);
      throttled(e.target.value);
      // TODO 서지수 api 용량 초과 해결되면 위에 코드 지우고 아래 코드로 사용하기
      // searchYoutuber(e.target.value);
    } else {
      // 검색어가 없으면 연관검색어 미표시
      setIsSearch(false);
    }
  };

  // 검색어 외 영역 클릭에 따른 연관검색어 표시 여부
  const inputRef = useRef();
  const [isSearch, setIsSearch] = useState(false);
  useEffect(() => {
    const handleCloseSearch = (e) => {
      if (
        isSearch &&
        (!inputRef.current || !inputRef.current.contains(e.target))
      ) {
        setIsSearch(false);
      }
    };
    window.addEventListener('click', handleCloseSearch);
    return () => {
      window.removeEventListener('click', handleCloseSearch);
    };
  }, [isSearch]);

  // 유튜버 등록 요청 코드
  const [channel, setChannel] = useState();
  const onRegisterClick = async () => {
    console.log(channel);
    if (channel.isExist) {
      //TODO 서지수 이미 등록된 유튜버 등록 안되고 페이지로 넘어가도록 처리
    } else {
      await youtuberAPI
        .registYoutuber({
          channel_id: channel.channel_id,
        })
        .then((res) => {
          console.log(res.data);
          // TODO 서지수 제대로 작동하는지 확인
          setIsSearch(false);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <style.ModalContainer
      className="close-modal__container"
      onClick={closeModal}
    >
      <style.Modal width="500px" height="386px" padding="70px 60px">
        <style.ModalTitleFlex>
          <style.Span font="SHSN-L" size="25px" lineHeight="31px">
            유튜버 등록
          </style.Span>
          <style.ModalXIcon
            className="close-modal__container"
            src={require('assets/images/close-icon.png').default}
            alt="close-btn"
            onClick={registClose}
            ref={closeRef}
          />
        </style.ModalTitleFlex>

        <style.Span font="SHSN-R">
          등록하시려는 유튜버의 이름을 입력해주세요!
        </style.Span>
        <style.RediretInfo font="SHSN-M" color="#5C7FDF">
          이해가 안되면 클릭!
        </style.RediretInfo>
        <style.InputContainer ref={inputRef}>
          <style.LinkInput
            placeholder="유튜버 이름 입력"
            value={searchValue}
            onChange={onSearchValueChange}
            onClick={() => {
              if (searchValue) {
                setIsSearch(!isSearch);
              }
            }}
          />
          {isSearch && (
            <RelatedSearch
              youtuberList={youtuberList}
              setSearchValue={setSearchValue}
              setIsSearch={setIsSearch}
              setChannel={setChannel}
            />
          )}
        </style.InputContainer>

        <style.CompleteButton onClick={onRegisterClick}>
          완료
        </style.CompleteButton>
      </style.Modal>
    </style.ModalContainer>
  );
}
