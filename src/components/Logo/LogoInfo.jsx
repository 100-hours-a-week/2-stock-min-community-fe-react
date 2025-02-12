import { ProfileMini } from '../Profile_mini';

export const Info = () => {
  return (
    <>
      <div className='flex'>
        <ProfileMini />
        <div>로그인</div>
        <div>회원가입</div>
      </div>
    </>
  );
};
