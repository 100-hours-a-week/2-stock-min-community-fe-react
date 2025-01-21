import { Title } from './Title';
import mainImage from '../../assets/mainPageImage.png';
import arrow from '../../assets/arrowImage.png';
import { AuthCard } from '../../components/AuthCard';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <AuthCard cl='flex justify-center'>
      <div className='w-full flex flex-row justify-between items-center'>
        <div className='animate-fadeInLeft'>
          <Title content='Hey Stock!' />
          <Title content='요즘 쓸만한 정보' />
          <Title content='어디 없어?' />
          <div className='mb-10'>
            <p>주식 정보를 누구나 자유롭게 얘기하고 토론합니다.</p>
            <p>부자가 되기 위한 주식 커뮤니티 Hey Stock!</p>
          </div>
          <div className='relative w-[200px] text-xl font-bold group cursor-pointer transition ease-in-out origin-left hover:scale-110 transition-transform duration-300'>
            <Link to='/login'>
              <span className='inline-block'>START NOW</span>
              <img className='inline ml-2 w-[40px]' src={arrow} alt='' />
              <span className='absolute w-[20px] h-[20px] bg-title-yellow rounded-full top-[9px] left-[151px] mix-blend-darken group-hover:animate-ping'></span>
            </Link>
          </div>
        </div>
        <div className='flex flex-col h-full justify-end animate-fadeInRight'>
          <img src={mainImage} alt='' className='w-[500px] h-[400px]' />
        </div>
      </div>
    </AuthCard>
  );
};
