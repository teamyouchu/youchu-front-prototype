import styled from 'styled-components';
import { Rating } from 'semantic-ui-react';

export const reviewWriteContainer = styled.div`
  background-color: #f6f7fa;
  padding-top: 120px;
  padding-bottom: 60px;
`;

export const ContentsContainer = styled.div`
  width: 800px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #dedede;
  padding: 25px 40px;
`;

export const Title = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 26px;
  line-height: 32px;
  color: #000000;
  letter-spacing: 0px;
  margin-bottom: 30px;
`;

export const ChannelContainer = styled.div`
  display: flex;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  title: props.title,
}))`
  border: 1px solid #dedede;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  margin-right: 20px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ChannelNameTitle = styled.div`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  letter-spacing: 0px;
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
`;

export const BodyContainer = styled.div`
  border-bottom: 1px solid #dedede;
  padding: 25px 40px;
`;

export const SubTitle = styled(Title)`
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 10px;
`;

export const WriteContainer = styled.div`
  padding: 20px;
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

export const StarRating = styled(Rating)`
  &&& {
    display: block;
    margin-bottom: 20px;
  }
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
`;

export const FooterContainer = styled.div`
  padding: 20px 40px 40px 40px;
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
`;

export const Warning = styled.span`
  text-align: left;
  font-family: 'SHSN-L';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #ed706b;
`;
