import { Link } from 'react-router-dom';
import { InfoCard } from '../../components/InfoCard';
import { InfoInput } from '../../components/InfoInput';
import { ProfileInput } from '../../components/ProfileInput';
import { Button } from '../../components/Button';

export const RegistFormSecond = () => {
  const registInfo = [
    { title: '프로필 사진', value: '' },
    { title: '이메일', value: '' },
    { title: '비밀번호', value: '' },
    { title: '비밀번호 확인', value: '' },
    { title: '닉네임', value: '' },
  ];
  return (
    <InfoCard cl='max-w-max p-8 mr-20'>
     
    </InfoCard>
  );
};
