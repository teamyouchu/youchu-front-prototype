import * as style from './MyNickNameStyle';
import userAPI from 'api/userAPI';
import Warning from 'components/warning/Warning';
import { stringTest } from 'lib/stringTest';

export default function MyNickname({
  nickName,
  setNickName,
  isNickNameNull,
  setIsNickNameNull,
  isNickNameLen,
  setIsNickNameLen,
  isNickNameDup,
  setIsNickNameDup,
  isNotNickNameDup,
  setIsNotNickNameDup,
  isValidNickname,
  setIsValidNickname,
  currentNickname,
}) {
  const onNickNameChange = (e) => {
    setNickName(e.target.value);
    setIsNickNameNull(false);
    setIsNickNameLen(false);
    setIsNickNameDup(false);
    setIsNotNickNameDup(false);
    setIsValidNickname(false);
  };

  const onNickNameBlur = () => {
    if (currentNickname !== nickName) {
      if (nickName === '') {
        setIsNickNameNull(nickName === '');
      } else {
        setIsValidNickname(stringTest(nickName));
      }
      if (nickName !== '' && nickName !== null && !stringTest(nickName)) {
        setIsNickNameLen(nickName.length < 2);
        if (nickName.length >= 2) {
          nickNameDuplicate();
        } else {
          setIsNickNameDup(false);
          setIsNotNickNameDup(false);
        }
      }
    }
  };

  const nickNameDuplicate = async () => {
    await userAPI
      .getDupNickName(nickName)
      .then((res) => {
        setIsNickNameDup(res.data.isExist);
        setIsNotNickNameDup(!res.data.isExist);
      })
      .catch((err) => console.log(err));
  };

  return (
    <style.NickNameContainer>
      <style.Label>닉네임</style.Label>
      <style.NicknameInput
        type="text"
        placeholder="유추에서 사용 할 닉네임을 입력해주세요"
        required
        autoFocus
        value={nickName || ''}
        minLength="2"
        maxLength="15"
        onChange={onNickNameChange}
        onBlur={onNickNameBlur}
        className={
          isNickNameNull || isNickNameLen || isNickNameDup
            ? 'warning'
            : undefined
        }
      />
      {isNickNameNull && <Warning text="닉네임을 작성해주세요!" />}
      {isNickNameLen && <Warning text="2~15자만 가능합니다." />}
      {isNickNameDup && (
        <Warning text="이미 존재하는 닉네임입니다! 다른 닉네임을 적어주세요." />
      )}
      {isNotNickNameDup && (
        <Warning isSuccess={true} text="사용 가능한 닉네임입니다!" />
      )}
      {isValidNickname && <Warning text="유효하지 않은 닉네임입니다." />}
    </style.NickNameContainer>
  );
}
