import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/lib/context';
import { IChannel } from '@/lib/types';
import ChannelCard from './ChannelCard';
import SubmitButton from './SubmitButton';

interface IProps {
  from: string;
  data: IChannel[];
}

export default function ChannelList({ from, data }: IProps) {
  const { userObj } = useContext(UserContext);

  return (
    <>
      <section className="channel_list">
        <h1 className="list_title">
          {userObj.data?.nickname}님이
          <br />
          {from === 'recs' ? '좋아하실 만한 ' : '평가한 '}
          <span className="list_title blue">유튜버</span>
        </h1>
        <ul>
          {data.map((channel) => (
            <ChannelCard key={channel.id} data={channel} />
          ))}
        </ul>
        <Link href={'/'}>
          <SubmitButton text={'유튜버 평가 더하기'} />
        </Link>
      </section>

      <style jsx>{`
        .channel_list {
          width: 100%;
          background: #ffffff 0% 0% no-repeat padding-box;
          opacity: 1;
          padding: 24px 24px 30px 24px;
        }

        .list_title {
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
