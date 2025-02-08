import { useState } from 'react';

export const InfoInput = ({ name, label, type, value, onChange, error }) => {
  return (
    <div className='mb-2'>
      <div className='mb-1'>{label}</div>
      <input
        name={name}
        className={`border border-slate-400 rounded-md w-full h-[40px] px-2 py-4`}
        onChange={onChange}
        value={value}
        type={type}
      ></input>
      <div className='w-[300px] h-[30px] text-red-500'>{error}</div>
    </div>
  );
};
