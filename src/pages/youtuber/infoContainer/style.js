import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  opacity: 1;
  margin-bottom: 30px;
  :last-child {
    margin-bottom: 0;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #dedede;
    margin-bottom: 0;
    display: ${({ M_display }) => M_display};
  }
`;
export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dedede;
  padding: 0 40px;
  :first-child {
    padding-top: 30px;
  }
  :last-child {
    border-bottom: 0;
    padding-bottom: ${({ padding_B }) => padding_B || '30px'};
  }
  @media ${(props) => props.theme.tablet} {
    padding: 0 24px;
    border-bottom: 1px solid rgb(222, 222, 222, 0.49);
    :first-child {
      padding-top: 20px;
    }
  }
`;

export const Span = styled.span`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 26px;
  line-height: 32px;
  letter-spacing: 0px;
  color: #000000;
`;

export const InfoTitle = styled(Span)`
  margin-bottom: ${({ margin_B }) => margin_B || '25px'};
  ::before {
    content: '유튜버';
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 20px;
  }
`;

export const SpanFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ margin_B }) => margin_B || '20px'};
  @media ${(props) => props.theme.tablet} {
    margin-bottom: ${({ margin_B }) => margin_B || '15px'};
  }
`;

export const InfoSpan = styled(Span)`
  font-size: 16px;
  line-height: 21px;
  color: #94969b;
  margin: 0 30px 0 0;
`;

export const YoutubeIconA = styled.a`
  height: 21px;
`;

export const YoutubeIcon = styled.img`
  width: 30px;
  height: 21px;
`;

export const SubscriberCount = styled(Span)`
  font-size: 16px;
  line-height: 21px;
`;

export const YoutuberDescription = styled(Span)`
  font-family: 'SHSN-R';
  font-size: 16px;
  line-height: 23px;
  width: 100%;
  &.showHidden {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`;

export const ViewMore = styled(Span)`
  font-family: 'SHSN-R';
  font-size: 16px;
  line-height: 21px;
  color: #5c7fdf;
  cursor: pointer;
  margin-top: 5px;
`;

// 유튜버 리뷰
export const Rating = styled(Span)`
  font-family: 'SHSN-B';
  font-size: 25px;
  line-height: 31px;
  margin-right: 10px;
  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const ReviewCount = styled(Span)`
  font-size: 14px;
  line-height: 18px;
  margin-left: 5px;
  color: #94969b;
`;

export const ShowMoreBox = styled.div`
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    height: 51px;
  }
`;

export const ShowMoreSpan = styled(Span)`
  font-family: 'SHSN-R';
  font-size: 14px;
  line-height: 18px;
  :first-child {
    font-family: 'SHSN-B';
  }
`;

// 유튜버 동영상
export const TitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
`;

export const SortSpan = styled(Span)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #94969b;
  margin-right: 15px;
  cursor: pointer;
  &.sortFocus {
    color: #eb3323;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const VideosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 53px;
`;
