import { GiAngelWings } from "react-icons/gi";
import { useTranslation } from "react-i18next";

function LoginUser() {
  const { t } = useTranslation();

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="loginForm">
        <div>
          <h1>
            {t("project_title")} <GiAngelWings />
          </h1>
        </div>
        <form>
          <div className="mb-4 form-floating">
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder={t("email")}
            />
            <label htmlFor="loginEmail">{t("email")}</label>
          </div>
          <div className="md-4 form-floating">
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder={t("password")}
            />
            <label htmlFor="loginPassword">{t("password")}</label>
          </div>
          <button type="submit" className="btn btn-secondary m-1">
            {t("login")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
