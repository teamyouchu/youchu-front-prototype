import styled from 'styled-components';

export const MyAllReviewContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 60px;
  @media ${(props) => props.theme.tablet} {
    padding-top: 103px;
    padding-bottom: 30px;
    width: 100%;
  }
`;
