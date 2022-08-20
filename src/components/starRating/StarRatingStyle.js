import styled from 'styled-components';

export const StarRatings = styled.div`
  position: relative;
  margin-right: ${({ from, margins }) =>
    from === 'RVCard' ? '5.666px' : from === 'RcmdCard' ? '6px' : margins};

  @media ${(props) => props.theme.tablet} {
    margin-right: ${({ from }) => from === 'RVCard' && '5.75px'};
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
