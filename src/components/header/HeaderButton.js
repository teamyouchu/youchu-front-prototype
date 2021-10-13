import * as style from './headerStyle';

export default function HeaderButton({ color, content }) {
  return (
    <>
      {color === 'white' ? (
        <style.LoginButton basic color={color}>
          {content}
        </style.LoginButton>
      ) : color === 'black' ? (
        <style.ReviewButton color={color}>{content}</style.ReviewButton>
      ) : (
        <style.RegisterButton color={color}>{content}</style.RegisterButton>
      )}
    </>
  );
}
