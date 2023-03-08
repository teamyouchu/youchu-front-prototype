interface IProps {
  text: string;
  isSatisfy?: boolean;
}

export default function SubmitButton({ isSatisfy = true, text }: IProps) {
  return (
    <>
      <button className={isSatisfy ? '' : 'unsatisfy'}>{text}</button>
      <style jsx>{`
        button {
          width: 352px;
          height: 55px;
          background: #000000 0% 0% no-repeat padding-box;
          border-radius: 5px;
          opacity: 1;

          font-family: 'SHSN-M';
          text-align: center;
          font-size: 19px;
          line-height: 23px;
          letter-spacing: 0px;
          color: #ffffff;

          border: 0;
          cursor: pointer;
        }
        button.unsatisfy {
          background: #cccccc 0% 0% no-repeat padding-box;
          cursor: default;
        }
        @media (max-width: 400px) {
          button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
