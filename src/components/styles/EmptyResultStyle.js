import styled from 'styled-components';

export const EmptyResultContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Message = styled.span`
    font-family: 'SHSN-B';
    text-align: center;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0px;
    color: #000000;
    margin-top: 10px;
`;

export const RegisterButton = styled(Message)`
    color: #EB3323;
    text-decoration: underline;
`;

export const Img = styled.img`
  width: 160px;
  height: 160px;
`;
