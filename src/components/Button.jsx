export const Button = ({
  width,
  height,
  background,
  children,
  onClick,
  type,
}) => {
  return (
    <button
      className='flex justify-center items-center border rounded-md cursor-pointer'
      style={{
        width: `${width}`,
        height: `${height}`,
        background: `${background}`,
      }}
      onClick={onClick}
      type={type}
    >
      <p>{children}</p>
    </button>
  );
};
