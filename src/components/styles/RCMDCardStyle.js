import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  border: 1px solid #dedede;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Img = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
  title: props.title,
}))`
  width: 72px;
  height: 72px;
  border: 1px solid #dedede;
  border-radius: 50%;
  margin: 18px 20px;
`;

export const Info = styled.div`
  position: absolute;
  display: inline-block;
  margin: 18px 0;
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

export const ChannelName = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  padding-bottom: 3px;
`;

export const StarRatings = styled.div`
  position: relative;
  padding: 0px 2px 5px 0;
`;

export const StarBase = styled.div`
  color: #d8d8d8;
  z-index: 0;
`;

export const StarFill = styled.div`
  color: #f8d26a;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${(props) => props.ratings + '%'};
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  padding: 0px 2px 5px 0;
`;

export const ReviewCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  color: #94969b;
  padding-bottom: 5px;
`;

export const Category = styled.div`
  font-family: 'SHSN-M';
  font-size: 11px;
  color: #808084;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 6px 8px;
`;
