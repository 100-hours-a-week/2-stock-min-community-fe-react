export const Title = (props) => {
  return (
    <div className='mb-10'>
      <span className='text-6xl font-bold bg-highlighted-bar'>
        {props.content}
      </span>
    </div>
  );
};
