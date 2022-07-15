import React, { useEffect, useRef, useState, useCallback } from 'react';
import searchAPI from 'api/searchAPI';
import * as style from './RegistrarionStyle';
import { throttle } from 'lodash';
// import { YoutuberContainer } from './RegistrarionStyle';

export default function Registration({ registClose }) {
  const closeRef = useRef();
  const closeModal = ({ target }) => {
    let className = target.getAttribute('class');

    if (className == null) {
      className = [];
    }
    if (className.includes('close-modal__container')) {
      closeRef.current.click();
    }
  };

  const [keyword, setKeyWord] = useState('');
  // const [youtuberList, setYoutuberList] = useState([
  //   {
  //     title: '쯔양',
  //     thumbnail:
  //         'https://yt3.ggpht.com/_s3C7XpwVKVr_5gDrmYJh9AOkU3wFlY9FWyZBVGVP_v7B09P5O4bbEZaWGpiuyT78Dk-aElE=s88-c-k-c0xffffffff-no-rj-mo',
  //   },
  //   {
  //     title: '월간 윤종신',
  //     thumbnail:
  //         'https://yt3.ggpht.com/ytc/AKedOLTiuOfbCXthi59y1-b1mnJywXGjUl8BfSfapzyM=s88-c-k-c0x00ffffff-no-rj-mo',
  //   },
  // ]);

  const [youtuberList, setYoutuberList] = useState([]);

  const throttled = useCallback(
    throttle((keyword) => {
      searchYoutuber(keyword);
    }, 5000),
    [],
  );

  useEffect(() => throttled(keyword), [keyword]);
  useEffect(() => {
    console.log(youtuberList);
  }, [youtuberList]);

  const registerSubmit = (e) => {
    e.preventDefault();
    //TODO: 송경석 처리 함수
  };

  const searchYoutuber = async (keyword) => {
    await searchAPI
      .youtuberSearchFromGoogle(keyword, 5)
      .then((res) => {
        setYoutuberList(res.data.channels);
      })
      .catch((err) => console.log(err));
  };

  return (
    <style.ModalContainer
      className="close-modal__container"
      onClick={closeModal}
    >
      <style.Modal width="500px" height="386px" padding="70px 60px">
        <img
          className="close-modal__container"
          src="/images/close-icon.png"
          alt="close-btn"
        />
        <style.Span font="SHSN-L" size="25px" margins="0px 0px 30px 0px">
          유튜버 등록
        </style.Span>

        <style.Span font="SHSN-R" size="14px">
          등록하시려는 유튜버의 이름을 입력해주세요!
        </style.Span>
        <style.RediretInfo font="SHSN-M" size="14px" color="#5C7FDF">
          이해가 안되면 클릭!
        </style.RediretInfo>
        <style.LinkInput
          placeholder="유튜버 이름 입력"
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <style.SearchResultContainer>
          {youtuberList.map((youtuber) => {
            const url = youtuber['thumbnail'];
            return (
              // <style.Tag key={title}>
              //   {title}
              //   {/*<Icon name="delete" onClick={() => handleDeleteTag(index)} />*/}
              // </style.Tag>
              <>
                <style.YoutuberContainer>
                  <img src={url} />
                  <span>{youtuber['title']}</span>
                </style.YoutuberContainer>
              </>
            );
          })}
        </style.SearchResultContainer>
        <form onSubmit={registerSubmit}>
          {/*<style.CompleteButton type="submit" ref={closeRef} onClick={registClose}>*/}
          {/*  완료*/}
          {/*</style.CompleteButton>*/}
          <style.CompleteButton type="submit" ref={closeRef}>
            완료
          </style.CompleteButton>
        </form>
      </style.Modal>
    </style.ModalContainer>
  );
}
