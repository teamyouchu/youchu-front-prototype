import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MyReviewInfoContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  border-bottom: 1px solid #dedede;
`;

export const YoutuberName = styled(Link)`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  display: flex;
  align-items: center;
  &:hover {
    color: #000000;
  }
`;

export const RightIcon = styled(FontAwesomeIcon)`
  margin-left: 5px;
  font-size: 10px;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Ratings = styled.div`
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  padding-left: 5px;
`;

export const ReviewContent = styled.div`
  text-align: left;
  font-family: 'SHSN-R';
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
`;

export const ReviewCreated = styled(ReviewContent)`
  font-family: 'SHSN-M';
  font-size: 12px;
  line-height: 15px;
  color: #94969b;
  margin-bottom: 20px;
`;

export const UtilContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LikeButton = styled.div`
  width: 67px;
  height: 30px;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 13px;
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

export const DeleteButton = styled.button`
  background: white;
  border: none;
  text-align: center;
  text-decoration: underline;
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #94969b;
  cursor: pointer;
`;
