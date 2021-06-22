const Button = (props) => {
  const { title, loading, isError } = props;

  if (loading)
    return (
      <button data-testid="btn-loading" disabled>
        loading...
      </button>
    );
  return (
    <>
      <button data-testid="btn-loading">{title}</button>
      {isError && <span>Error message</span>}
    </>
  );
};

export default Button;