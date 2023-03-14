import Head from 'next/head';

interface IProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function Seo({ title, description }: IProps) {
  const message = `${title} | YouChu`;

  return (
    <Head>
      {/* <h1> 태그의 내용과 일치시키는 경우가 많으며, 웹사이트의 이름도 포함, 영문 40자, 한글 20자 이내 */}
      <title>{message}</title>
      {/* 페이지에 대한 설명, 영문 160자, 한글 80자 이내 */}
      <meta name="description" content={description} />
      {/* 해당 웹페이지의 관련 키워드를 나열 */}
      <meta
        name="keywords"
        content={`유튜브, 유튜버, 추천, 유튜버 평가, 유튜버 추천, 유추, youchu, youtube, youtuber, 채널, channel, 추천, recommendation, korea, 영화, 육류, 어류, IT, 과학, 철학, 디스플레이, 음향, 자동차, 부동산, 역사, 화장품, 라이프 스타일, 음악, 댄스, 뷰티, 패션, 애니메이션, 키즈, 게임, 여행, 캠핑, 아웃도어, 스포츠, 건상, 의료, 뉴스, 정치, 이슈, 단체, 정부, 엔터테인먼트, 푸드, 음식, 요리, 쿠킹, 브이로그, 연예인, 인물, 기술, 과학, 동물, 애완동물, 강아지, 고양이, 집사, 파충류, 열대어, 취미, 바이크, 경제, 금융, 재테크, 교육, 강의, 코미디, 먹방, ASMR, 다큐, 헬스, BJ, 식물, 유머, 코믹, 관광, 봉사,`}
      />

      {/* 로봇 메타 태그 */}
      <meta name="robots" content="index,follow" />

      {/* open graph */}
      <meta property="og:url" content="https://youchu.io" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="유추 YouChu" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/og image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* 트위터 */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/og image.jpg" />
    </Head>
  );
}
