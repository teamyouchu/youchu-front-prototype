import styled from 'styled-components';

export const StarRatings = styled.div`
  position: relative;
  overflow: hidden;
  @media ${(props) => props.theme.mobile} {
    width: ${({ from }) => from === 'RVCard' && '14px'};
  }
`;

export const StarBase = styled.div`
  font-family: 'SHSN-R';
  font-size: 16px;
  line-height: 18px;
  color: #d8d8d8;
  z-index: 0;
  @media ${(props) => props.theme.tablet} {
    font-size: ${({ from }) => from === 'RVCard' && '14px'};
    line-height: ${({ from }) => from === 'RVCard' && '14px'};
  }
`;

export const StarFill = styled(StarBase)`
  color: #f8d26a;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ rating }) => rating + '%'};
  @media ${(props) => props.theme.mobile} {
    width: ${({ from }) => from === 'RVCard' && '14px'};
  }
`;
