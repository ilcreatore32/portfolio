
const Spinner = () => {
  return (
    <div
      className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-300"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
