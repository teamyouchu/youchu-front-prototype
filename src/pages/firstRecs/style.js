import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FirstRecsContainer = styled.div`
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

export const EvaledCountBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  margin: 30px 0;
`;

export const RowFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const EvaledCountTitleBox = styled.div`
  display: flex;
`;

export const Star = styled.span`
  font-family: 'SHSN-M';
  text-align: center;
  font-size: 19px;
  line-height: 19px;
  letter-spacing: 0px;
  color: #f8d26a;
  margin-right: 6px;
`;

export const EvaledCountTitle = styled.span`
  font-family: 'SHSN-B';
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #000000;
`;

export const EvaledLink = styled(Link)`
  font-family: 'SHSN-L';
  text-align: center;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #94969b;
  text-decoration: underline;
  :hover {
    color: #94969b;
    text-decoration: underline;
  }
`;

export const EvaledCount = styled(EvaledCountTitle)`
  font-size: 45px;
  line-height: 57px;
  color: #5c7fdf;
  margin-bottom: 10px;
`;

export const EvaledCountText = styled(EvaledCountTitle)`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #787878;
`;
