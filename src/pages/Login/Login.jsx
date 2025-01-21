import { useState } from 'react';
import { AuthCard } from '../../components/AuthCard';
import { InfoCard } from '../../components/InfoCard';
import { InfoInput } from '../../components/InfoInput';
import loginImage from '../../assets/login_image.png';

import {
  validateLoginEmail,
  validatePassword,
} from '../../utils/ValidationRules';
import { ProfileInput } from '../../components/ProfileInput';
import { Button } from '../../components/Button';
import { LogoTItle } from '../../components/Logo/LogoTitle';

export const Login = () => {
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
    <AuthCard cl='flex justify-between'>
      {/* 로그인창 */}
      <InfoCard cl='max-w-max p-8'>
        <div>
          <div className='mb-10'>
            <div className='text-4xl font-bold mb-2'>로그인</div>
            <div className='h-4'>
              <span className='mr-3'>계정이 없으신가요?</span>
              <span className='cursor-pointer text-href-color hover:border-b-[1.5px] hover:border-href-color'>
                회원가입
              </span>
            </div>
          </div>
          <form>
            {loginInfo.map((element, index) => (
              <InfoInput
                object={element}
                onChange={(newValue) => updateValue(index, newValue)}
              ></InfoInput>
            ))}
            <Button width='100%' height='30px'>
              로그인
            </Button>
          </form>
        </div>
      </InfoCard>
      {/* 이미지 */}
      <div className='w-full h-full flex flex-col items-center'>
        <div>
          <LogoTItle />
        </div>
        <div className=''>
          <img src={loginImage}></img>
        </div>
      </div>
    </AuthCard>
  );
};
