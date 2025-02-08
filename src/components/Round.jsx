export const Round = ({ width, height, children }) => {
  return (
    <>
      <div
        className='relative rounded-full'
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {children}
      </div>
    </>
  );
};
