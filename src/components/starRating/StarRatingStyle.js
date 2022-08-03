import styled from 'styled-components';

export const StarRatings = styled.div`
  position: relative;
  margin: ${({ from, margins }) =>
    from === 'RVCard'
      ? '0 5.666px 15px 0'
      : from === 'RcmdCard'
      ? '0 6px 5px 0'
      : margins};

  @media ${(props) => props.theme.tablet} {
    margin: ${({ from }) => from === 'RVCard' && '0 5.75px 0 0'};
  }
`;

export const StarBase = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 18px;
  color: #d8d8d8;
  z-index: 0;
  @media ${(props) => props.theme.tablet} {
    font-size: ${({ from }) => from === 'RVCard' && '12.37px'};
    line-height: ${({ from }) => from === 'RVCard' && '14px'};
  }
`;

export const StarFill = styled.div`
  font-family: 'SHSN-M';
  font-size: 16px;
  line-height: 18px;
  color: #f8d26a;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  width: ${(props) => props.ratings + '%'};

  @media ${(props) => props.theme.tablet} {
    font-size: ${({ from }) => from === 'RVCard' && '12.37px'};
    line-height: ${({ from }) => from === 'RVCard' && '14px'};
  }
`;
