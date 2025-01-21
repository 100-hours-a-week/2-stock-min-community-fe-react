import { useState } from 'react';

export const InfoInput = ({ object, onChange }) => {
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setError(object.validateFn(e.target.value));
    onChange(e.target.value);
  };

  return (
    <div className='mb-4'>
      <div className='mb-4'>{object.title}</div>
      <input
        className={`border rounded-md w-full h-[30px] px-2 py-4`}
        name='info'
        onChange={handleChange}
        type={object.type}
      ></input>
      <div className='w-[300px] h-[30px] text-red-500'>{error}</div>
    </div>
  );
};
