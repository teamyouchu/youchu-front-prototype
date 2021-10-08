import styled from 'styled-components';

const Container = styled.div`
    width: 360px;
    border: 1px solid #DEDEDE;
    border-radius: 10px;
    margin-bottom: 10px;
`;

const Img = styled.img.attrs(props => ({
  src : props.src,
  alt : props.alt,
  title : props.title
}))`
    width: 72px;
    height: 72px;
    border: 1px solid #DEDEDE;
    border-radius: 50%;
    margin: 18px 20px;
`;

const Info = styled.div`
    position: absolute;
    display: inline-block;
    margin: 18px 0;
`;

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const ChannelName = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 3px;
`;

const StarRatings = styled.div`
  position: relative;
  padding: 0px 2px 5px 0;
`;

const StarBase = styled.div`
  color: #D8D8D8;
  z-index: 0;
`;

const StarFill = styled.div`
  color: #F8D26A;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.ratings + '%'};
`;

const Ratings = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  padding: 0px 2px 5px 0;
`;

const ReviewCount = styled.div`
  font-size: 14px;
  color: #94969B;
  padding-bottom: 5px;
`;

const Category = styled.div`
  background: #F2F2F2 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: #808084;
  font-size: 11px;
  padding: 6px 8px;
`;

export default function RecommendCard({
    channelName,
    ratings,
    reviewCount,
    category,
}) {
  const perRatings = ratings * 20;
  return (
      <Container>
            <Img 
                src={require('./img/월간윤종신.jpg').default}
                alt={channelName}
                title={channelName}
            />
            <Info>
                <Group>
                    <ChannelName>{channelName}</ChannelName>
                </Group>
                <Group>
                    <StarRatings>
                      <StarBase>★★★★★</StarBase>
                      <StarFill ratings={perRatings}>★★★★★</StarFill>
                    </StarRatings>
                    <Ratings>{ratings}</Ratings>
                    <ReviewCount>({reviewCount}개 리뷰)</ReviewCount>
                </Group>
                <Group>
                    <Category>{category}</Category>
                </Group>
            </Info>
      </Container>
  );
}