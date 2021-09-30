import ReviewCard from "./ReviewCard";
import './ReviewRank.css';

function ReviewRank() {
    return (
        <div className='row-container'>
            <h2 className='row-title'>이번주 리뷰가 많은 유튜버</h2>
            <div className='row-title-description'>리뷰 보러 가보실까요?</div>
            <div className='row-card-container'>
                <ReviewCard category='음악' channelName='월간 윤종신' subscriberCount='22.5만' reviewCount='381' rating='5.0' bestReview='제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만' />
                <ReviewCard category='엔터테이너' channelName='딩고 뮤직 / dingo music' subscriberCount='329만' reviewCount='500' rating='4.0' bestReview='제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만' />
                <ReviewCard category='음악' channelName='월간 윤종신' subscriberCount='22.5만' reviewCount='381' rating='5.0' bestReview='제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만' />
                <ReviewCard category='음악' channelName='월간 윤종신' subscriberCount='22.5만' reviewCount='381' rating='5.0' bestReview='제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만' />
                <ReviewCard category='음악' channelName='월간 윤종신' subscriberCount='22.5만' reviewCount='381' rating='5.0' bestReview='제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만' />
                <ReviewCard category='음악' channelName='월간 윤종신' subscriberCount='22.5만' reviewCount='381' rating='5.0' bestReview='제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만' />
                <ReviewCard category='음악' channelName='월간 윤종신' subscriberCount='22.5만' reviewCount='381' rating='5.0' bestReview='제가 많이 힘들고 혼란스러웠을 때 큰 도움이 되었던 노래였습니다. 그 당시에는 멜로디는 잔잔하지만' />
            </div>
        </div>
    )
}

export default ReviewRank;