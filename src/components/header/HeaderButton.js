import * as style from './headerStyle';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function HeaderButton({ color, content }) {
  return (
    <>
      {color === 'white' ? (
        <style.LoginButton basic>{content}</style.LoginButton>
      ) : color === 'black' ? (
        <Link to="/list">
          <style.ReviewButton color={color}>
            <style.BarIcon icon={faBars}></style.BarIcon>
            {content}
          </style.ReviewButton>
        </Link>
      ) : (
        <style.RegisterButton color={color}>{content}</style.RegisterButton>
      )}
    </>
  );
}
