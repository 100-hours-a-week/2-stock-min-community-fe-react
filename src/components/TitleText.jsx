export const TitleText = ({ title, children }) => {
  return (
    <div className='mb-10'>
      <div className='text-4xl font-bold mb-2'>{title}</div>
      {children}
    </div>
  );
};
