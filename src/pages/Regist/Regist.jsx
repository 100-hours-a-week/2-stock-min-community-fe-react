import { InfoInput } from '../../components/InfoInput';
import { ProfileInput } from '../../components/ProfileInput';

export const Regist = () => {
  const registInfo = [
    { title: '프로필 사진', value: '' },
    { title: '이메일', value: '' },
    { title: '비밀번호', value: '' },
    { title: '비밀번호 확인', value: '' },
    { title: '닉네임', value: '' },
  ];
  return (
    <>
      <ProfileInput object={registInfo[0]} cl={'hidden'} />

      {registInfo.slice(1).map((element) => (
        <InfoInput object={element} password={registInfo[2].value}></InfoInput>
      ))}
    </>
  );
};
