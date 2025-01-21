export const Button = ({ width, height, children }) => {
  return (
    <div
      className='flex justify-center items-center border rounded-md cursor-pointer'
      style={{
        width: `${width}`,
        height: `${height}`,
      }}
    >
      <p>{children}</p>
    </div>
  );
};
