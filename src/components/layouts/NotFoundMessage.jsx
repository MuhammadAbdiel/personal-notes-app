import useLanguage from "../../hooks/useLanguage";

const NotFoundMessage = () => {
  const text = useLanguage("app");

  return (
    <>
      <h2>404</h2>
      <p>{text.pageNotFound}</p>
    </>
  );
};

export default NotFoundMessage;
