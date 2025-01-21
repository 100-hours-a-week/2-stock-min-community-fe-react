export const Round = ({ width, height }) => {
  return (
    <>
      {console.log(width, height)}
      <div
        className='border rounded-full'
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    </>
  );
};
