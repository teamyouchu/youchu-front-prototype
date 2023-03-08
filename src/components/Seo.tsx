import Head from 'next/head';

interface IProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function Seo({ title, description, keywords = '' }: IProps) {
  const message = `${title} | YouChu`;

  return (
    <Head>
      {/* <h1> 태그의 내용과 일치시키는 경우가 많으며, 웹사이트의 이름도 포함, 영문 40자, 한글 20자 이내 */}
      <title>{message}</title>
      {/* 페이지에 대한 설명, 영문 160자, 한글 80자 이내 */}
      <meta name="description" content={description} />
      {/* 해당 웹페이지의 관련 키워드를 나열 */}
      <meta name="keywords" content={`유튜브, 유튜버, 추천, ${keywords}`} />

      {/* 로봇 메타 태그 */}
      <meta name="robots" content="index,follow" />

      {/* open graph */}
      <meta property="og:url" content="https://redkiwiapp.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="유추 Youchu" />
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
