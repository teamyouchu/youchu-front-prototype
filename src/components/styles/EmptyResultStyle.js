import styled from 'styled-components';

export const EmptyResultContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media ${(props) => props.theme.tablet} {
    &&& {
      margin-top: 15px;
    }
  }
`;

export const EmojiBox = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content : center;
  align-items: center;
  @media ${(props) => props.theme.tablet} {
    &&& {
      width: 96px;
      height: 96px;
    }
  }
`;

export const Emoji = styled.div`
  font-size: 120px;
  @media ${(props) => props.theme.tablet} {
    &&& {
      font-size: 72px;
    }
  }
`;

export const Message = styled.span`
    font-family: 'SHSN-B';
    text-align: center;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0px;
    color: #000000;
    margin-top: 10px;

    @media ${(props) => props.theme.tablet} {
    &&& {
      font-size: 18px;
      line-height: 22px;
      margin-top: 5px;
    }
  }
`;

export const RegisterButton = styled(Message)`
    color: #EB3323;
    text-decoration: underline;
`;
