import { useState } from 'react';
import { InfoCard } from '../../components/InfoCard';
import {
  validateLoginEmail,
  validatePassword,
} from '../../utils/ValidationRules';
import { InfoInput } from '../../components/InfoInput';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { TitleText } from '../../components/TitleText';
import { LogoTItle } from '../../components/Logo/LogoTitle';

export const LoginForm = () => {
  const [loginInfo, setLoginInfo] = useState([
    { title: '이메일', value: '', validateFn: validateLoginEmail },
    {
      title: '비밀번호',
      value: '',
      validateFn: validatePassword,
      type: 'password',
    },
  ]);
  const updateValue = (index, newValue) => {
    setLoginInfo((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, value: newValue } : item
      )
    );
  };
  return (
    <InfoCard cl='max-w-max p-8 mr-20'>
      <div>
        <TitleText title='로그인'>
          <div className='h-4'>
            <span className='mr-3'>계정이 없으신가요?</span>
            <span className='cursor-pointer text-href-color hover:border-b-[1.5px] hover:border-href-color'>
              <Link to='/regist/1'>회원가입</Link>
            </span>
          </div>
        </TitleText>

        <form>
          <InfoInput title='이메일' />
          <div className=' flex flex-col justify-center items-center'>
            <Button width='100%' height='40px'>
              로그인
            </Button>
            <LogoTItle cl='text-5xl mt-12' />
          </div>
        </form>
      </div>
    </InfoCard>
  );
};
