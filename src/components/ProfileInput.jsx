import { useRef } from 'react';
import { Round } from './Round';

export const ProfileInput = ({ name, value, label, onChange, error }) => {
  const fileInputRef = useRef(null);
  const fileInputHandler = () => {
    fileInputRef.current.click();
  };
  return (
    <div className='mb-4'>
      <div>{label}</div>
      <div className='w-[300px] h-[30px] text-red-500'>{error}</div>
      <div className='w-[300px] h-[30px] text-red-500'></div>
      <div className='flex justify-center'>
        <Round width={'200'} height={'200'}>
          <div className='w-full h-full rounded-full opacity-60 cursor-pointer bg-zinc-100 hover:opacity-100'>
            <input
              name={name}
              type='file'
              ref={fileInputRef}
              className='hidden'
              accept='image/*'
              onChange={onChange}
            />
            <button
              className='absolute w-[70px] p-1 text-white bg-zinc-500 border rounded-lg top-[80px] left-[67px]'
              onClick={fileInputHandler}
            >
              추가
            </button>
          </div>
        </Round>
      </div>
    </div>
  );
};
