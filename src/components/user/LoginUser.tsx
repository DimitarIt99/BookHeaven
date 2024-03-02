import { GiAngelWings } from "react-icons/gi";

function LoginUser() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="rounded-pill">
        <div>
          <h1>
            Book Heaven <GiAngelWings />
          </h1>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
              Email
            </label>
            <div className="mb-4">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="md-4">
            <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">
              Password
            </label>
            <div className="md-4">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
