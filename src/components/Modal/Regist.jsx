import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import useLockBodyScroll from '../../hooks/useLockBodyScrool';
import { InfoInput } from '../InfoInput';
import useValidation from '../../hooks/useValidation';
import { ProfileInput } from '../ProfileInput';
Modal.setAppElement('#root');
export const Regist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    formData,
    errors,
    isValid,
    handleChange,
    handleFileChange,
    validateAll,
  } = useValidation({ email: '', profile: '' });
  useLockBodyScroll(isOpen);

  const createUser = async (formData) => {
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      createUser(formData);
    } else {
      validateAll();
    }
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className='bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto max-h-[80vh] overflow-y-auto'
        overlayClassName='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
      >
        <form onSubmit={handleSubmit}>
          <h2 className='text-xl font-bold'>Tailwind 모달</h2>
          <p className='mt-2 text-gray-700'>
            이것은 react-modal을 활용한 Tailwind 모달입니다.
          </p>
          <InfoInput
            label='이메일'
            name='email'
            type='text'
            error={errors.email}
            value={formData.email}
            onChange={handleChange}
          ></InfoInput>
          <ProfileInput
            label='프로필 사진 추가'
            name='profile'
            error={errors.profile}
            onChange={handleFileChange}
          ></ProfileInput>
          <button
            onClick={() => setIsOpen(false)}
            className='mt-4 px-4 py-2 bg-red-500 text-white rounded'
          >
            닫기
          </button>
          <button
            type='submit'
            className={`mt-4 px-4 py-2 ${
              isValid
                ? 'bg-red-500 text-white border border-red-500 rounded transition'
                : 'bg-white text-red-500 border border-red-500 rounded transition'
            }`}
          >
            확인
          </button>
        </form>
      </Modal>
    </div>
  );
};
