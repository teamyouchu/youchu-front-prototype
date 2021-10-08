import * as style from './headerStyle';

export default function HeaderButton({ color, content }) {
  return (
    <>
      {color === 'white' ? (
        <style.HeaderButton basic color={color}>
          {content}
        </style.HeaderButton>
      ) : (
        <style.HeaderButton color={color}>{content}</style.HeaderButton>
      )}
    </>
  );
}
