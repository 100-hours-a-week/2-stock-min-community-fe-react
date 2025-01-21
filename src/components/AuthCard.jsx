export const AuthCard = (props) => {
  return (
    <div
      className={`shadow-lg rounded-lg bg-content-bg min-h-[600px] py-8 px-20 mb-10 ${props.cl}`}
    >
      {props.children}
    </div>
  );
};
