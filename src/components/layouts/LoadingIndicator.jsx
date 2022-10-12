import React from "react";
import useLanguage from "../../hooks/useLanguage";

const LoadingIndicator = () => {
  const text = useLanguage("app");

  return <p className="loading-indicator">{text.msg.loading}</p>;
};

export default LoadingIndicator;
