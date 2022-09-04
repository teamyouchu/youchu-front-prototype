import styled from 'styled-components';

export const reviewWriteContainer = styled.div`
  background-color: #f6f7fa;
  padding-top: 120px;
  padding-bottom: 60px;
  @media ${(props) => props.theme.tablet} {
    padding-top: 127px;
    padding-bottom: 30px;
    width: 100%;
  }
`;

export const ContentsContainer = styled.div`
  width: 800px;
  border: 1px solid #dedede;
  margin: 0 auto;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #dedede;
  }
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #dedede;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 25px 40px;
  @media ${(props) => props.theme.tablet} {
    padding: 20px 24px 30px 24px;
    margin-bottom: 12px;
  }
`;

export const Span = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 26px;
  line-height: 32px;
  color: #000000;
  letter-spacing: 0px;
`;

export const Title = styled(Span)`
  margin-bottom: 30px;
  @media ${(props) => props.theme.tablet} {
    font-size: 21px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`;

export const ChannelContainer = styled.div`
  display: flex;
`;

export const Img = styled.img`
  border: 1px solid #dedede;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  margin-right: 20px;
  @media ${(props) => props.theme.tablet} {
    margin-right: 10px;
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChannelNameTitle = styled(Span)`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 21px;
  margin-bottom: 10px;
`;

export const ChannelName = styled.div`
  width: 626px;
  height: 41px;
  border: 1px solid #dedede;
  padding: 0 15px;

  text-align: left;
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 41px;
  color: #000000;
  letter-spacing: 0px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const BodyContainer = styled.form`
  background: #ffffff 0% 0% no-repeat padding-box;
  border-bottom: 1px solid #dedede;
  padding: 25px 40px;
  @media ${(props) => props.theme.tablet} {
    padding: 20px 24px;
  }
`;

export const SubTitle = styled(Title)`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 10px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 20px;
  }
`;

export const WriteContainer = styled.div`
  padding: 20px;
  @media ${(props) => props.theme.tablet} {
    padding: 0;
  }
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  letter-spacing: 0px;
  margin-bottom: 10px;
`;

export const CommentLabel = styled(Label)`
  margin-top: 20px;
`;

export const CommentInput = styled.textarea`
  width: 680px;
  height: 300px;
  border: 1px solid #dedede;
  padding: 15px;
  resize: none;

  text-align: left;
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  letter-spacing: 0px;
  &::placeholder {
    color: #94969b;
  }
  &:focus {
    outline: 2px solid #3ea6ff;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const FooterContainer = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 20px 40px 40px 40px;
  @media ${(props) => props.theme.tablet} {
    padding: 20px 24px 30px 24px;
  }
`;

export const Caution = styled.div`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 10px;
  line-height: 13px;
  color: #94969b;
  letter-spacing: 0px;
  margin-bottom: 20px;
`;

export const SubmitBtn = styled.button`
  width: 170px;
  height: 40px;
  border: 0px;
  border-radius: 5px;
  background-color: #5c7fdf;
  cursor: pointer;
  text-align: center;
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  letter-spacing: 0px;
  &:hover {
    background-color: #4c72dc;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;
