const Icon = ({ path, classname }) => {
  return (
    <svg viewBox="0 0 128 128" className={classname}>
      {path}
    </svg>
  );
};

export default Icon;