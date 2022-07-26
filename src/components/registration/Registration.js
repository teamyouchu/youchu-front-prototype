import React, { useEffect, useRef, useState, useCallback } from 'react';
import searchAPI from 'lib/api/searchAPI';
import youtuberAPI from 'lib/api/youtuberAPI';
import * as style from './RegistrarionStyle';
import { throttle } from 'lodash';

function Tag({ title, subscribe, imgUrl, selectYoutuber, channelId }) {
  return (
    <style.YoutuberContainer
      className="select_btn"
      key={title}
      onClick={(e) => selectYoutuber(title, channelId, e)}
    >
      <img src={imgUrl} alt={title} />
      <span style={{ marginRight: '10px', marginLeft: '10px' }}>{title}</span>
      <span>구독자 {subscribe}명</span>
    </style.YoutuberContainer>
  );
}

export default function Registration({ registClose }) {
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

  const [keyword, setKeyWord] = useState('');
  const [isTyped, setIsTyped] = useState(false);
  const [channel, setChannel] = useState();

  const [youtuberList, setYoutuberList] = useState([]);

  const inputRef = useRef();

  const throttled = useCallback(
    throttle((keyword) => {
      searchYoutuber(keyword);
    }, 5000),
    [],
  );

  useEffect(() => throttled(keyword), [keyword, throttled]);

  const registYoutuber = async () => {
    await youtuberAPI
      .registYoutuber({
        channel_id: channel,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const registerSubmit = (e) => {
    //TODO: 송경석 처리 함수
    registYoutuber();
  };

  const searchYoutuber = async (keyword) => {
    await searchAPI
      .youtuberSearchFromGoogle(keyword, 5)
      .then((res) => {
        setYoutuberList(res.data.channels);
      })
      .catch((err) => console.log(err));
  };

  const selectYoutuber = (title, channelId, event) => {
    inputRef.current.value = title;
    setIsTyped(false);
    setChannel(channelId);
  };

  return (
    <style.ModalContainer
      className="close-modal__container"
      onClick={closeModal}
    >
      <style.Modal width="500px" height="386px" padding="70px 60px">
        <img
          className="close-modal__container"
          src={require('assets/images/close-icon.png').default}
          alt="close-btn"
          onClick={registClose}
          ref={closeRef}
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
          ref={inputRef}
          onClick={() => {
            if (!isTyped) {
              setIsTyped(!isTyped);
            }
          }}
        />

        <style.SearchResultContainer>
          {isTyped && (
            <style.SearchDropdownContainer>
              {youtuberList.map((youtuber, index) => {
                const url = youtuber['thumbnail'];
                return (
                  <Tag
                    imgUrl={url}
                    title={youtuber['title']}
                    subscribe={youtuber['subscribe']}
                    selectYoutuber={selectYoutuber}
                    index={index}
                    channelId={youtuber['id']}
                  />
                );
              })}
            </style.SearchDropdownContainer>
          )}
        </style.SearchResultContainer>
        <form onSubmit={registerSubmit}>
          <style.CompleteButton type="submit">완료</style.CompleteButton>
        </form>
      </style.Modal>
    </style.ModalContainer>
  );
}
