import { useRef } from 'react';

export const ProfileInput = ({ label, name, value, error, onChange }) => {
  const fileInputRef = useRef(null);
  const handleAddFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <>
      <div>
        <div>{label}</div>
        <div className='w-[350px] h-[25px] text-red-500'>{error}</div>
      </div>
      <div className='w-[300px] rounded-full'>
        <img src='profile_img.webp' alt='' className='w-[300px] rounded-full' />
        <button type='button' onClick={handleAddFile}>
          변경
        </button>
      </div>
      <input
        name={name}
        type='file'
        ref={fileInputRef}
        className='hidden'
        onChange={onChange}
      />
    </>
  );
};
