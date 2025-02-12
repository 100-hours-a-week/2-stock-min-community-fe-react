export const InfoInput = ({ label, name, value, type, error, onChange }) => {
  return (
    <div className='flex flex-col justify-center'>
      <div>{label}</div>
      <input
        className='border rounded-md'
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      ></input>
      <div className='w-[350px] h-[25px] text-red-500'>{error}</div>
    </div>
  );
};
