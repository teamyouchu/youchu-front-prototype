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
`;
export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dedede;
  padding: 30px 40px;
  :last-child {
    border-bottom: 0;
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
  margin-bottom: 20px;
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
  margin-bottom: 5px;
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
`;
