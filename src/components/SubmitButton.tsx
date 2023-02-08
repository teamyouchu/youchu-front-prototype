interface IProps {
  text: string;
}

export default function SubmitButton({ text }: IProps) {
  return (
    <>
      <button>{text}</button>
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
        @media (max-width: 400px) {
          .submit_button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
