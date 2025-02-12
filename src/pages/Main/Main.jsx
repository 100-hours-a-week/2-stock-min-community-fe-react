import { Card } from '../../components/Card';
import { Logo } from '../../components/Logo/Logo';
import { Regist } from '../../components/Modal/Regist';
import { NavBar } from '../../components/NavBar/NavBar';

export const Main = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[10%]'>
          <NavBar />
        </div>

        <div className='w-[90%] h-[1500px]'>
          <header>
            <Logo />
          </header>
          <div>다양한</div>
          <div>콘텐츠</div>
          <Regist />
        </div>
      </div>
    </>
  );
};
