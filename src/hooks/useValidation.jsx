import { useEffect, useState } from 'react';

const useValidation = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = (name, value) => {
    let error = '';

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = '* 유효한 이메일 주소를 입력하세요.';
      }
      if (value === '') {
        error = '* 이메일을 입력해 주세요';
      }
      //추후에 중복된 이메일 로직 추가
    } else if (name === 'password') {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;

      if (!passwordRegex.test(value)) {
        error = '* 대소문자, 특수문자 포함 및 8자이상 24자이하';
      }
      if (value === '') {
        error = '* 비밀번호를 입력해주세요';
      }
    } else if (name === 'confirmPassword') {
      if (value !== formData.password) {
        error = '비밀번호가 일치하지 않습니다.';
      }
      if (value === '') {
        error = '* 비밀번호를 입력해주세요';
      }
    } else if (name === 'nickname') {
      const nicknameRegex = /\s/;
      if (value === '') {
        error = '* 닉네임을 입력해주세요';
      }
      if (nicknameRegex.test(value)) {
        error = '* 닉네임에 공백을 포함할 수 없습니다';
      }
    } else if (name === 'profile') {
      if (value === '' || value === undefined) {
        error = '* 프로필 사진을 설정해주세요';
      }
    }

    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  const handleFileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];

    setFormData((prev) => ({ ...prev, [name]: file }));
    const error = validate(name, file);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  useEffect(() => {
    const noErrors = Object.values(errors).every((err) => err === '');
    const allFieldsFilled = Object.values(formData).every(
      (val) => val && (typeof val === 'string' ? val.trim() !== '' : true)
    );
    setIsValid(noErrors && allFieldsFilled);
  }, [errors, formData]);
  const validateAll = () => {
    const newErrors = {};
    for (const key in formData) {
      newErrors[key] = validate(key, formData[key]);
    }
    setErrors(newErrors);
    //에러가 없으면 true 반환
    return Object.values(newErrors).every((error) => !error);
  };
  return {
    formData,
    errors,
    isValid,
    handleChange,
    handleFileChange,
    validateAll,
  };
};

export default useValidation;
