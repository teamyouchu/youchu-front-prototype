import styled from 'styled-components';

export const RecommendContainer = styled.div`
  width: 298px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dedede;
  opacity: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const RecommendBox = styled.div`
  border-bottom: 1px solid #dedede;
  :first-child {
    border-bottom: 0;
    padding: 16px 18px 0 18px;
  }
  :last-child {
    border-bottom: 0;
  }
`;

export const RecommendTitle = styled.span`
  font-family: 'SHSN-B';
  text-align: left;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
