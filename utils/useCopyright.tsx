const useCopyright = ({ ...obj }) => {
  const { start_date, comp_name } = obj;
  const start = new Date(start_date).getFullYear();
  const end = new Date().getFullYear();

  let dates;
  if (start === end) {
    dates = start;
  } else {
    dates = start + '-' + end;
  }

  return (
    <div className="copyright">
      &copy; Copyright | {dates} | All rights reserved | {comp_name.toUpperCase()}
    </div>
  );
};

export default useCopyright;
