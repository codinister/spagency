const Errorbox = ({ err }: { err: string | undefined }) => {
  return <div className="err-box">{err}</div>;
};

export default Errorbox;
