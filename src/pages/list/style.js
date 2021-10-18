import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;

export const Title = styled.div`
  text-align: left;
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const CardContainer = styled.div`
  display: grid;
  row-gap: 60px;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;
