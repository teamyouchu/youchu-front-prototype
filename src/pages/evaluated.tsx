import Seo from '@/components/Seo';
import YoutuberList from '@/components/YoutuberList';

export default function Evaluated() {
  return (
    <>
      <Seo title="평가 목록" />
      <div className="evaled_container">
        <YoutuberList from={'evaled'} />
      </div>

      <style jsx>{`
        .evaled_container {
          width: 400px;
          margin: 0 auto;
          background: #f6f7fa 0% 0% no-repeat padding-box;
          opacity: 1;
          padding-top: 30px;
        }
        @media (max-width: 400px) {
          .evaled_container {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
