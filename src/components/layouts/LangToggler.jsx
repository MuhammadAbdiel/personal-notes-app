import React, { useContext } from "react";
import { MdGTranslate, MdTranslate } from "react-icons/md";
import LocaleContext from "../../contexts/LocaleContext";

const LangToggler = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <button
      type="button"
      title={locale === "id" ? "Indonesia" : "English"}
      className="nav-icon"
      onClick={toggleLocale}
    >
      {locale === "id" ? <MdGTranslate /> : <MdTranslate />}
    </button>
  );
};

export default LangToggler;
