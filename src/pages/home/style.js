import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 1170px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    padding: 124px 24px 30px 24px;
    width: 100%;
  }
`;

export const BannerContainer = styled.div`
  width: 1100px;
  height: 350px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

export const TextField = styled.span`
  font-family: 'SHSN-R';
  text-align: left;
  font-size: 45px;
  line-height: 57px;
  letter-spacing: 0px;
  color: #000000;
`;

export const BoldSpan = styled(TextField)`
  font-family: 'SHSN-B';
  color: ${(props) => props.color || '#000000'};
`;

export const BannerImg = styled.img`
  width: 422px;
  height: 276px;
`;

export const RowContainer = styled.div`
  width: ${(props) => props.width || '1170px'};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`;

export const RowTitle = styled.div`
  font-family: 'SHSN-B';
  text-align: left;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 5px;
  margin-left: ${(props) => props.left || '0px'};

  @media ${(props) => props.theme.tablet} {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 0;
    margin-left: 0;
  }
`;

export const RowDescription = styled.div`
  font-family: 'SHSN-L';
  text-align: left;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0px;
  color: #94969b;
  margin-bottom: 20px;
  margin-left: ${(props) => props.left || '0px'};

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
    line-height: 15px;
    margin-left: 0;
  }
`;

export const ReviewContainer = styled.div`
  max-width: 1170px;
  display: flex;
`;

export const HandleBtn = styled.div`
  cursor: pointer;
  position: relative;
  top: 50px;
  width: 35px;
  height: 30px;
  text-align: center;
  font-size: 23px;
  line-height: 30px;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

export const ReviewCardContainer = styled.div`
  display: grid;
  width: 1100px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  grid-template-columns: repeat(10, 1fr);
  column-gap: 20px;
  margin-bottom: 60px;

  @media ${(props) => props.theme.tablet} {
    column-gap: 16px;
  }
`;

export const RecommendCardContainer = styled.div`
  display: grid;
  width: 1100px;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
  row-gap: 10px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 0;
  }
`;
