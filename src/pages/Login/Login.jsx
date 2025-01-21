import { AuthCard } from '../../components/AuthCard';

import loginImage from '../../assets/login_image.png';

import { LogoTItle } from '../../components/Logo/LogoTitle';
import { Link, Route, Routes } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { RegistFormFirst } from '../Regist/RegistForm1';
import { RegistFormSecond } from '../Regist/RegistForm2';

export const Login = () => {
  return (
    <AuthCard cl='flex justify-between'>
      {/* 로그인창 */}
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/regist/1' element={<RegistFormFirst />} />
        <Route path='/regist/2' element={<RegistFormSecond />} />
      </Routes>
      {/* 이미지 */}
      <div className='w-full max-h-[600px] box-content flex flex-col items-center'>
        <div>
          <LogoTItle />
        </div>
        <div className='h-full'>
          <img src={loginImage} className='w-full h-[400px]'></img>
        </div>
      </div>
    </AuthCard>
  );
};
