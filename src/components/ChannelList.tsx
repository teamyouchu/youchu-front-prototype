import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/lib/context';
import { IReview, IChannel } from '@/lib/types';
import ChannelCard from './ChannelCard';
import SubmitButton from './SubmitButton';

interface IProps {
  from: string;
  data: IChannel[] | IReview[];
}

export default function ChannelList({ from, data }: IProps) {
  const { userObj } = useContext(UserContext);

  return (
    <>
      <div className="channel_list">
        <span className="recs_title">
          {userObj.data?.nickname}님이
          <br />
          {from === 'recs' ? '좋아하실 만한 ' : '평가한 '}
          <span className="recs_title blue">유튜버</span>
        </span>
        <div>
          {data.map((channel) => (
            <ChannelCard key={channel.id} data={channel} />
          ))}
        </div>
        <Link href={'/'}>
          <SubmitButton text={'유튜버 평가 더하기'} />
        </Link>
      </div>

      <style jsx>{`
        .channel_list {
          width: 100%;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          padding: 24px 24px 30px 24px;
        }

        .recs_title {
          font-family: 'SHSN-B';
          text-align: left;
          font-size: 24px;
          line-height: 35px;
          letter-spacing: 0px;
          color: #000000;
        }

        .blue {
          color: #5c7fdf;
        }
      `}</style>
    </>
  );
}
