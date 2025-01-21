import { Link } from 'react-router-dom';
import { InfoCard } from '../../components/InfoCard';
import { InfoInput } from '../../components/InfoInput';
import { ProfileInput } from '../../components/ProfileInput';
import { TitleText } from '../../components/TitleText';
import { Button } from '../../components/Button';

export const RegistFormFirst = () => {
  const registInfo = [
    { title: '프로필 사진', value: '' },
    { title: '이메일', value: '' },
    { title: '비밀번호', value: '' },
    { title: '비밀번호 확인', value: '' },
    { title: '닉네임', value: '' },
  ];
  return (
    <InfoCard cl='max-w-max p-8 mr-20'>
      <TitleText title='회원가입'>
        <div>
          <span className='mr-3'>이미 계정이 있으신가요?</span>
          <span className='cursor-pointer text-href-color hover:border-b-[1.5px] hover:border-href-color'>
            <Link to='/login'>로그인</Link>
          </span>
        </div>
      </TitleText>
      <div>
        {registInfo.slice(2).map((element) => (
          <InfoInput
            object={element}
            password={registInfo[2].value}
          ></InfoInput>
        ))}

        <Link to='/regist/2'>
          <div className='w-full flex justify-end'>
            <Button width='30%'>다음</Button>
          </div>
        </Link>
      </div>
    </InfoCard>
  );
};
