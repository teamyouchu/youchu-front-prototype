import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '@/lib/context';
import RecsCard from './RecsCard';
import SubmitButton from './SubmitButton';

interface IProps {
  from: string;
}

export default function YoutuberList({ from }: IProps) {
  const { userObj } = useContext(UserContext);

  return (
    <>
      <div className="youtuber_list">
        <span className="recs_title">
          {userObj.data?.nickname}님이
          <br />
          {from === 'recs' ? '좋아하실 만한 ' : '평가한 '}
          <span className="recs_title blue">유튜버</span>
        </span>
        <div>
          {youtuberList.map((youtuber) => (
            <RecsCard key={youtuber.id} data={youtuber} />
          ))}
        </div>
        <Link href={'/'}>
          <SubmitButton text={'유튜버 평가 더하기'} />
        </Link>
      </div>

      <style jsx>{`
        .youtuber_list {
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

const youtuberList = [
  {
    id: '0',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: '1',
    thumbnail:
      'https://yt3.ggpht.com/Fef_8oLf6u9pS1TEX6a4e12sTRr-IP-XQo26eg63vZizMItQiGrDZgcTJxugtE08216IZn2zNA=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '딩고 뮤직 / dingo music',
    rating: 4.5,
    reviews: 1000,
    category: 10,
  },
  {
    id: '2',
    thumbnail:
      'https://yt3.ggpht.com/ytc/AMLnZu8Ia8DsIhh46F6WWu1xhktgEfbSZgSo8y-02K9dmQ=s176-c-k-c0x00ffffff-no-rj',
    title: '빠더너스',
    rating: 3,
    reviews: 200,
    category: 23,
  },
  {
    id: '3',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: '4',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: '5',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: '6',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: '7',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: '8',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
  {
    id: '9',
    thumbnail:
      'https://yt3.googleusercontent.com/ytc/AMLnZu_uDVGXlffthbwItGEmpb9B_H9gg7C67oKkJLys=s176-c-k-c0x00ffffff-no-rj-mo',
    title: '월간 윤종신',
    rating: 5,
    reviews: 381,
    category: 10,
  },
];
