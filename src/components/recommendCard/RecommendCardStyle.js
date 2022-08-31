import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RcmdContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: ${({ page }) => (page === 'youtuber' ? '100%' : '350px')};
  border: ${({ page }) => (page === 'youtuber' ? '0' : '1px solid #dedede')};
  border-radius: 10px;
  padding: ${({ page }) => (page === 'youtuber' ? '20px 18px' : '18px 20px')};
  color: #000000;
  &:hover {
    color: #000000;
  }

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const Img = styled.img`
  border: 1px solid #dedede;
  border-radius: 50%;
  width: 72px;
  height: 72px;
  margin-right: 20px;

  @media ${(props) => props.theme.mobile} {
    width: 36px;
    height: 36px;
    margin-right: 16px;
  }
`;

export const GroupBox = styled.div`
  width: calc(100% - 92px);
  @media ${(props) => props.theme.mobile} {
    width: calc(100% - 52px);
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: ${({ marginB }) => marginB};
`;

export const RcmdChannelName = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 21px;

  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media ${(props) => props.theme.tablet} {
    max-width: 500px;
  }
  @media ${(props) => props.theme.mobile} {
    max-width: 170px;
  }
`;

export const Ratings = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  margin: 0 2px 0 6px;
`;

export const ReviewCount = styled.div`
  font-family: 'SHSN-M';
  font-size: 14px;
  line-height: 18px;
  color: #94969b;
`;

export const Category = styled.div`
  font-family: 'SHSN-M';
  font-size: 11px;
  line-height: 14px;
  color: #808084;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 6px 8px;
  @media ${(props) => props.theme.tablet} {
    padding: 5px 9px 4px 9px;
  }
`;
