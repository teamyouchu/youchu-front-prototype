import styled from 'styled-components';

export const FirstMainContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f6f7fa 0% 0% no-repeat padding-box;
  opacity: 1;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const EvalCountBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-bottom: 10px;

  position: sticky;
  top: 0;
  z-index: 80;
  transition: box-shadow 0.5s;
  &.scrolled {
    border-bottom: 1px solid #dedede;
    /* box-shadow: 0 0 15px #dedede; */
  }
`;

export const EvalCount = styled.span`
  font-family: 'SHSN-B';
  text-align: center;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
`;

export const EvalCountText = styled(EvalCount)`
  font-family: 'SHSN-M';
  font-size: 15px;
  line-height: 19px;
  color: #787878;
  margin-bottom: 0;
`;

export const EvalCategory = styled.div`
  width: 100%;
  padding: 0 24px;
  z-index: 70;
`;

export const EvalList = styled.div`
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 0 24px 20px 24px;
  margin-top: 20px;
`;

export const BtnBox = styled.div`
  position: sticky;
  bottom: 30px;
  z-index: 60;
`;
