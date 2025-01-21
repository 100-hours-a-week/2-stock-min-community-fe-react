import { useEffect, useState } from 'react';
import { Round } from './Round';

export const ProfileInput = ({ object }) => {
  return (
    <div className='mb-4'>
      <div>{object.title}</div>
      <div className='w-[300px] h-[30px] text-red-500'></div>
      <Round width={'150'} height={'150'} />
    </div>
  );
};
