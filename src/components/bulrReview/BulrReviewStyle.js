import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BulrReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: blur(12px);
  z-index: 2;
`;

export const BulrTitle = styled.span`
  text-align: center;
  font-family: 'SHSN-B';
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
`;

export const ReviewButton = styled(Link)`
  width: 170px;
  height: 40px;
  border-radius: 5px;
  background: #5c7fdf 0% 0% no-repeat padding-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BtnSpan = styled(BulrTitle)`
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;
