import { Link, useNavigate } from 'react-router-dom';
import { InfoCard } from '../../components/InfoCard';
import { InfoInput } from '../../components/InfoInput';
import { TitleText } from '../../components/TitleText';
import { Button } from '../../components/Button';

import { useState } from 'react';
import useValidation from '../../hooks/useValidation';
import { ProfileInput } from '../../components/ProfileInput';

export const RegistFormFirst = () => {
  const navigate = useNavigate();
  const {
    formData,
    errors,
    isValid,
    handleChange,
    handleFileChange,
    validateAll,
  } = useValidation({
    email: '',
    password: '',
    confirmPassword: '',
    profile: '',
    nickname: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      alert('회원가입 성공');
      console.log('회원가입 데이터 : ', formData);
      navigate('/login');
    }
  };

  const [step, setStep] = useState(false);

  const handleNext = () => {
    setStep(() => !step);
  };

  return (
    <InfoCard cl='min-w-[368px] max-w-[368px] p-8 mr-20 overflow-hidden'>
      <form
        onSubmit={handleSubmit}
        className={`flex transition-transform duration-500 ease-in-out ${
          step ? '-translate-x-[358px]' : ''
        }`}
      >
        <div className='mr-10 box-border'>
          <TitleText title='회원가입'>
            <div>
              <span className='mr-3'>이미 계정이 있으신가요?</span>
              <span className='cursor-pointer text-href-color hover:border-b-[1.5px] hover:border-href-color'>
                <Link to='/login'>로그인</Link>
              </span>
            </div>
          </TitleText>
          <InfoInput
            label='이메일'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InfoInput
            label='비밀번호'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <InfoInput
            label='비밀번호 확인'
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
          <div className='w-full flex justify-end'>
            <Button
              type='button'
              onClick={handleNext}
              width='100%'
              height='40px'
            >
              다음
            </Button>
          </div>
        </div>

        <div className='ml-5'>
          <div
            className='inline-block mb-8 text-xl font-semibold cursor-pointer'
            onClick={handleNext}
          >
            &lt;
          </div>
          <ProfileInput
            name='profile'
            value={formData.profile}
            label='프로필 사진'
            onChange={handleFileChange}
            error={errors.profile}
          />

          <InfoInput
            label='닉네임'
            name='nickname'
            type='text'
            onChange={handleChange}
            value={formData.nickname}
            error={errors.nickname}
          />

          {isValid ? (
            <Button
              type='submit'
              width='100%'
              height='40px'
              background='blue'
            ></Button>
          ) : (
            <Button type='submit' width='100%' height='40px' background='white'>
              확인
            </Button>
          )}
        </div>
      </form>
    </InfoCard>
  );
};
