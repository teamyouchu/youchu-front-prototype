import * as style from './styles/MyNickNameStyle';
import signupAPI from 'api/signupAPI';

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
  setIsNotNickNameDup
}) {
    const onNickNameChange = (e) => {
      setNickName(e.target.value);
      setIsNickNameNull(false);
      setIsNickNameLen(false);
      setIsNickNameDup(false);
      setIsNotNickNameDup(false);
    };
  
    const onNickNameBlur = () => {
      setIsNickNameNull(nickName === "");
      setIsNickNameLen(nickName.length !== 0 && nickName.length < 2);
      if (nickName.length >= 2) {
        nickNameDuplicate(nickName);
      } else {
        setIsNickNameDup(false);
        setIsNotNickNameDup(false);
      }
    };
  
    const nickNameDuplicate = async (nickName) => {
      await signupAPI
        .postNickNameDup({
            nickname: nickName,
          })
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
          placeholder='유추에서 사용 할 닉네임을 입력해주세요'
          required
          autoFocus
          value={nickName}
          minLength="2"
          maxLength="15"
          onChange={onNickNameChange}
          onBlur={onNickNameBlur}
          className={isNickNameNull || isNickNameLen || isNickNameDup ? 'warnig' : undefined}
        />
        {isNickNameNull && <style.Warning>닉네임을 작성해주세요!</style.Warning>}
        {isNickNameLen && <style.Warning>2~15자만 가능합니다.</style.Warning>}
        {isNickNameDup && <style.Warning>이미 존재하는 닉네임입니다! 다른 닉네임을 적어주세요.</style.Warning>}
        {isNotNickNameDup && <style.Success>사용 가능한 닉네임입니다!</style.Success>}
      </style.NickNameContainer>
    );
}