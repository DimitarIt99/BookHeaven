import { useTranslation } from "react-i18next";

function Book() {
  const { t } = useTranslation();

  //i18n.changeLanguage("en");

  return <h1> {t("title")}</h1>;
}

export default Book;
