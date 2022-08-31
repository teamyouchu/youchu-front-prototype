import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReviewInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  border-bottom: 1px solid #dedede;
  :last-child {
    border-bottom: 0;
  }
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    padding: 20px 24px;
    border-bottom: 1px solid rgb(222, 222, 222, 0.49);
  }
`;

export const ReviewInfoHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 15px;
  }
`;

export const Span = styled.span`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #000000;
`;

export const BestReview = styled(Span)`
  margin-bottom: 10px;
  color: #5c7fdf;
`;

export const WriterInfoFlex = styled.div`
  display: flex;
`;

export const ReviewWriterImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #dedede;
  margin-right: 8px;
`;

export const WriterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ margin_B }) => margin_B};
`;

export const Ratings = styled.div`
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  padding-left: 5px;
`;

export const ReviewWriterName = styled(Span)`
  font-family: 'SHSN-R';
  font-size: 13px;
  line-height: 17px;
  color: #94969b;
`;

export const YoutuberName = styled(Link)`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  margin-bottom: 5px;
  color: #000000;
  &:hover {
    color: #000000;
  }
`;

export const ReviewCreated = styled.div`
  text-align: left;
  font-family: 'SHSN-M';
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0px;
  color: #94969b;
  margin-bottom: 20px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 15px;
  }
`;

export const UtilContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const UtilBox = styled.div`
  display: flex;
  align-items: center;
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

export const ReportButton = styled(Span)`
  font-family: 'SHSN-R';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
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
