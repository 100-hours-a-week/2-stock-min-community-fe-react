export const InfoCard = (props) => {
  return (
    <div className={`shadow-lg rounded-lg bg-white ${props.cl}`}>
      {props.children}
    </div>
  );
};
