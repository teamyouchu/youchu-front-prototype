import styled from 'styled-components';

export const SearchDropdownContainer = styled.div`
  position: absolute;
  top: ${({ page }) =>
    page === 'header' ? '41px' : page === 'search' ? '45px' : '43px'};
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: ${({ page }) =>
    page === 'search' ? 0 : '0px 0px 15px #00000029'};
  opacity: 1;
  height: ${({ page }) => page === 'registration' && '210px'};
  overflow: ${({ page }) => page === 'registration' && 'overlay'};
  @media ${(props) => props.theme.tablet} {
    width: ${({ page }) => (page === 'registration' ? '100%' : '')};
  }
`;

export const RelatedSearch = styled.div`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  padding: 10px 20px 5px 20px;
  color: #eb3323;
`;

export const Registration = styled(RelatedSearch)`
  padding: 10px 20px 10px 20px;
  color: #000000;
`;

export const RedRegiText = styled.span`
  color: #eb3323;
  cursor: pointer;
  text-decoration: underline;
`;

export const SearchResultBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ page }) => (page === 'search' ? '5px 16px' : '5px 20px')};
  :first-child {
    margin-top: 5px;
  }
  :last-child {
    margin-bottom: 5px;
  }
  &.item_over {
    background-color: #f9fafc;
    cursor: pointer;
    color: #000000;
  }
`;

export const SearchResultImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const SearchResultName = styled.div`
  font-family: 'SHSN-R';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #000000;
  margin-right: 5px;

  max-width: 60%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const SearchResultSubscribers = styled.div`
  font-family: 'SHSN-R';
  text-align: left;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0px;
  color: #94969b;
`;
