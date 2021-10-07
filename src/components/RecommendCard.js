import styled from 'styled-components';

const Container = styled.div`
    dispaly: flex;
    width: 350px;
    height: 108px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DEDEDE;
    border-radius: 10px;
    margin: 10px;
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
    display: inline-block;
    margin: 18px 20px 18px 0;
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
  letter-spacing: 0px;
  color: #808084;
  font-size: 11px;
  padding: 6px 8px;
  border-radius: 5px;
`;

export default function RecommendCard({
    channelName,
    ratings,
    reviewCount,
    category,
}) {
  return (
      <Container>
            <Img 
                src={require('./월간윤종신.jpg').default}
                alt={channelName}
                title={channelName}
            />
            <Info>
                <Group>
                    <ChannelName>{channelName}</ChannelName>
                </Group>
                <Group>
                    <Ratings>★★★★★ {ratings}</Ratings>
                    <ReviewCount>({reviewCount}개 리뷰)</ReviewCount>
                </Group>
                <Group>
                    <Category>{category}</Category>
                </Group>
            </Info>
      </Container>
  );
}