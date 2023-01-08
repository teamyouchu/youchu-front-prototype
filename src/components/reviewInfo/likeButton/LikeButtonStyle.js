import styled from 'styled-components';

export const LikeButton = styled.div`
  width: 67px;
  height: 30px;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 13px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LikeImg = styled.img`
  width: 13px;
  height: 12px;
`;

export const likeCount = styled.span`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
`;
