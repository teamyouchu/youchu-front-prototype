import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 106px;
  border-top: 1px solid #dedede;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

export const FooterBox = styled.div`
  height: 100%;
  width: 400px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 24px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const FooterUl = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 0;
  &:first-child {
    margin-bottom: 10px;
  }
  &:last-child {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

export const LinkLi = styled.li`
  list-style: none;
  padding: 0 15px;
  border-right: 1px solid #dedede;
  :first-child {
    padding: 0 15px 0 0;
  }
  :last-child {
    padding: 0 0 0 15px;
    border-right: 0;
  }
`;

export const FooterSpan = styled.a`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #94969b;
  &:hover {
    color: #94969b;
    text-decoration: underline;
  }
`;

export const FootermailTitle = styled.span`
  font-family: 'SHSN-M';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #94969b;
  margin-bottom: 10px;
  @media ${(props) => props.theme.tablet} {
    margin: 0;
  }
`;

export const Footermail = styled(FootermailTitle)`
  font-family: 'SHSN-L';
`;
