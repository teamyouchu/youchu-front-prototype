import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FlexContainer = styled.div`
  display: flex;
`;

export const RankContainer = styled(FlexContainer)`
  align-items: center;
`;

export const FlexContainerColumn = styled(FlexContainer)`
  flex-direction: column;
`;

export const MainContainer = styled(FlexContainerColumn)`
  padding: 20px 40px 0px 0px;
  &.Mypage {
    padding: 0px 40px 0px 0px;
  }
`;

export const DetailContainer = styled(FlexContainerColumn)`
  margin-top: 0px;
  filter: ${(props) => props.Blur};
`;

export const RightButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin: 4px 0px 0px 5px;
  font-size: 10px;
`;

export const ReviewContainer = styled(FlexContainerColumn)`
  height: auto;
  width: 100%;
  padding: 30px 0px 30px 40px;
  border-bottom: 1px solid #dedede;
  &.BestReviewContainer {
    border-top: none;
    padding: 10px 0px 30px 40px;
  }
  &.MypageContainer {
    border: none;
    padding: 10px 0px 30px 0px;
  }
`;

export const FilterDropdownContainer = styled.div`
  display: flex;
  margin: 0px 0px 20px 40px;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const BestSpan = styled(Span)`
  padding: 20px 0px 0px 40px;
`;

export const UtilContainer = styled(FlexContainer)`
  align-items: center;
`;

export const LikeButton = styled.div`
  width: 67px;
  height: 32px;
  border: 1px solid #dedede;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 13px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LikeImg = styled.img`
  width: 14px;
  height: 13px;
  margin-right: 11px;
`;

export const ProfileImg = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 8px;
`;

export const ReportButton = styled.span`
  font-family: 'SHSN-R';
  color: #94969b;
  &:hover {
    cursor: pointer;
  }
`;
