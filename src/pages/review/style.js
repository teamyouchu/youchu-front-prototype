import styled from 'styled-components';

export const GrayBar = styled.div`
  height: 120px;
  background-color: #75787a;
`;

export const YoutuberContainer = styled.div`
  display: flex;
`;

export const Contatiner = styled.div`
  display: flex;
  width: 1100px;
  margin: 0 auto;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  title: props.title,
}))`
  border: 1px solid #dedede;
  border-radius: 50%;
  position: relative;
  bottom: 25px;
`;

export const RC_Img = styled(Img)`
  display: block;
  width: 130px;
  height: 130px;

  margin-bottom: 10px;
`;
