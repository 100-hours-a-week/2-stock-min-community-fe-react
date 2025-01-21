export const validateLoginEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') return '* 이메일을 입력해주세요.';
  if (!emailRegex.test(email)) return '* 유효하지 않은 이메일 형식입니다.';
  if (email.length < 5) return '* 이메일이 너무 짧습니다.';
  return '';
  //추후에 이메일 중복검사 추가하기
};
export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  if (password === '') return '* 비밀번호를 입력하세요.';
  if (!passwordRegex.test(password))
    return '* 비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다.';
  return '';
};
