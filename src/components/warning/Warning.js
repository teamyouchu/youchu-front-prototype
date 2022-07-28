import * as style from './WarningStyle';

export default function Warning({ isSuccess, text, margin }) {
  return (
    <style.Warning isSuccess={isSuccess} margin={margin}>
      {text}
    </style.Warning>
  );
}
